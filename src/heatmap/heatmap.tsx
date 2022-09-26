import React, { useRef, useEffect, useCallback, useState } from 'react';
import { Chart } from '@antv/g2';
import { formatLabelContent, markLabel, setConfig } from './utils';
import { DataOrigin } from './const';
import { dataURLToFile, downloadImg } from '../utils';

export default function Heatmapa({
  inputs,
  dataSource,
  subDataSource,
  mainConfig,
  subConfig,
  useSubHeatMap,
  env,
}) {
  const ctRef: any = useRef();
  const chartRef: any = useRef();
  const dataSourceRef: any = useRef(dataSource);
  const subDataSourceRef: any = useRef(subDataSource);

  const mainTimeIdRef: any = useRef([]);

  const [mainView, setMainView] = useState<any>({});
  const [subViews, setSubViews] = useState<any>({});

  const createView = useCallback(
    ({ xField, yField, colorField, colors, label, size }) => {
      const view = chartRef.current.createView({
        padding: 0,
      });
      const geometry = view.heatmap();
      geometry
        .position([xField, yField])
        .color(colorField, colors)
        .label('', {
          content: (data) => formatLabelContent(label.displayFields, data),
          style: label.style,
        })
        .size(+size);

      view.tooltip({
        title: (title, datum) => {
          return formatLabelContent(label.displayFields, datum);
        },
        customItems: () => [],
      });
      return { view, geometry };
    },
    []
  );

  useEffect(() => {
    const { xField, yField, colorField, xAxis, yAxis, zAxis } = mainConfig;
    const chart = new Chart({
      container: ctRef.current,
      width: ctRef.current.clientWidth || 400,
      height: ctRef.current.clientHeight || 400,
    });

    chartRef.current = chart;

    const { view, geometry } = createView(mainConfig);

    chart.heatmap().position([xField, yField]);
    chart.scale({
      [xField]: {
        nice: true,
        min: xAxis.min === void 0 ? void 0 : xAxis.min,
        max: xAxis.max === void 0 ? void 0 : xAxis.max,
      },
      [yField]: {
        nice: true,
        min: yAxis.min === void 0 ? void 0 : yAxis.min,
        max: yAxis.max === void 0 ? void 0 : yAxis.max,
      },
      [colorField]: { nice: true, alias: zAxis.alias, min: 0 },
    });
    chart.annotation().image({ ...mainConfig.annotations[0] });
    renderMap(view, dataSourceRef.current, mainTimeIdRef.current, DataOrigin.main)
    setTimeout(() => {
      chart.forceFit();
    }, 0);

    const views = createView({ ...mainConfig, ...subConfig[0] });
    views.view.axis(false);
    setSubViews({ ...views });

    chart.render();

    // chart.interaction('view-zoom');
    // chart.interaction('drag-move');

    chart.getCanvas().on('mousewheel', (ev) => {
      ev.preventDefault();
    });

    setMainView({ view, geometry });

    return () => {
      chartRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    if (!useSubHeatMap) {
      return;
    }
    const { view, geometry } = createView({ ...mainConfig, ...subConfig[0] });
    view.axis(false);
    setSubViews({ view, geometry });

  }, [useSubHeatMap]);

  if (chartRef.current && env.edit) {
    chartRef.current.forceFit();
  }

  useEffect(() => {
    const { view, geometry } = mainView;
    const chart = chartRef.current;
    if (!geometry || !chart) return;

    setConfig(mainConfig, {
      chart: chartRef.current,
      geometry,
    });
    const { min, max } = mainConfig.xAxis;
    chart.legend({
      min, max
    })
    mainTimeIdRef.current.forEach(id => clearInterval(id));
    renderMap(view, dataSourceRef.current, mainTimeIdRef.current, DataOrigin.main)

    return () => {
      mainTimeIdRef.current.forEach(id => clearInterval(id));
      mainTimeIdRef.current = [];
    }
  }, [mainConfig]);

  useEffect(() => {
    const { view, geometry } = subViews;
    if (!geometry || !chartRef.current) return;
    setConfig(subConfig[0], {
      chart: null,
      geometry,
    });
    const ids = [];
    renderMap(view, subDataSourceRef.current, ids, DataOrigin.sub );

    return () => {
      ids.forEach(id => window.clearInterval(id));
    }
  }, [subConfig]);

  const renderMap = (view, dataSource, ids, origin) => {
    const list = markLabel(
      dataSource,
      origin === DataOrigin.main ? mainConfig.label.pick : subConfig[0].label.pick
    );
    const chart = chartRef.current;

    if (!dataSource.length) return;
    if (list.every((data) => Array.isArray(data))) {
      let index = 0;
      const firstList = list.shift();
      view.data(firstList);
      chart.render();

      list.push(firstList);
      const len = list.length;

      const id = window.setInterval(() => {
        view.data(list[index++ % len]);
        view.render();
      }, mainConfig.interval);
      
      ids.push(id);
    } else {
      view.data(list);
      chart.render();
    }
  }

  // 数据源更新
  useEffect(() => {
    const { view } = mainView;
    if (!view || !chartRef.current) return;
    dataSourceRef.current = dataSource;
    const ids = [];
    renderMap(view, dataSource, ids, DataOrigin.main);
    return () => {
      ids.forEach((fd) => window.clearInterval(fd));
    };
  }, [dataSource, mainView]);

  useEffect(() => {
    const { view, geometry } = subViews;
    subDataSourceRef.current = subDataSource;
    if (!view) return;
    if (!useSubHeatMap) {
      chartRef.current.removeView(view);
      return;
    }
    const ids = [];
    renderMap(view, subDataSource, ids, DataOrigin.sub)
    return () => {
      ids.forEach((fd) => window.clearInterval(fd));
    };
  }, [subDataSource, subConfig, subViews, useSubHeatMap]);

  useEffect(() => {
    inputs.downLoadImg((imageName: string) => {
      downloadImg(chartRef.current, { imageName });
    });
    inputs.relToFile((fileName: string = '图片', relOutputs) => {
      const base64 = downloadImg(chartRef.current, { base64: true });
      const file = dataURLToFile(base64, fileName);
      relOutputs.relToFile(file);
    });
  }, [])
  return <div style={{ height: 'inherit' }} ref={ctRef}></div>;
}

