import React, { useEffect, useState } from 'react';
import * as Charts from '@ant-design/charts';
import { Spin } from 'antd';

import {
  Data,
  MOCK_DATA,
  defaultFormatterFn,
  defaultLineStyleFn,
  inputIdMap,
  chartTypes,
  defaultConfigValue
} from './constants';
import { runJs } from './util';
import { useMemo } from 'react';
import EmptyWrap from '../components/emptyWrap';
import { handleOutputFn } from '../utils';

export default function ({ data, env, inputs, outputs, style }: RuntimeParams<Data>) {
  const { edit } = env;
  const [chartData, setChartData] = useState([]);
  const [percent, setPercent] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (edit) {
      let mockData = MOCK_DATA[data.type] || [];
      if (data.type === chartTypes.LIQUID) {
        setPercent(mockData as number);
      } else {
        mockData = (mockData as any).map((item) => {
          if (Array.isArray(data.config.yField)) {
            if (data.type === chartTypes.DUAL_AXES) {
              return [...item];
            } else {
              return {
                ...item,
                [data.config.yField[0]]: item[data.config.yField[0]],
                [data.config.yField[1]]: item[data.config.yField[1]],
                [data.config.xField]: item.label
              };
            }
          }

          return {
            ...item,
            [data.config.yField]: item[data.config.yField],
            [data.config.xField]: item[data.config.xField]
          };
        });
        setChartData(mockData as any);
      }
    }
  }, [data.type]);

  useEffect(() => {
    setLoading(true);
    inputs[inputIdMap.DATA]((val: any, relOutputs: any) => {
      if (data.type === chartTypes.LIQUID) {
        setPercent(val);
      } else {
        setChartData(val);
      }
      handleOutputFn(relOutputs, outputs, 'data', val);
    });
    setLoading(false);

    inputs[inputIdMap.CONFIG]((val: any, relOutputs: any) => {
      data.type = val.chartType || data.type;
      delete val.chartType;
      data.config = { ...val };
      handleOutputFn(relOutputs, outputs, 'config', val);
    });

    Object.keys(inputIdMap).map((key) => {
      const inputId = inputIdMap[key];
      const keyPath = inputId.split('.');
      if (keyPath.length > 1) {
        // 只考虑两级
        inputs[inputId] &&
          inputs[inputId]((val) => {
            data.config[keyPath[0]][keyPath[1]] = val;
            data.config = { ...data.config };
          });
      } else {
        if (inputId !== inputIdMap.DATA && inputId !== inputIdMap.CONFIG) {
          inputs[inputId] &&
            inputs[inputId]((val) => {
              if (
                inputId === inputIdMap.LABEL ||
                inputId === inputIdMap.LEGEND ||
                inputId === inputIdMap.TOOLTIP
              ) {
                data.config[inputId] = val ? defaultConfigValue[inputId] : false;
              } else {
                data.config[inputId] = val;
              }

              data.config = { ...data.config };
            });
        }
      }
    });
  }, []);

  const getTooltip = () => {
    if (data.tooltipFormatterFn.visible) {
      return {
        ...data.config.tooltip,
        formatter: runJs(decodeURIComponent(data.tooltipFormatterFn.content || defaultFormatterFn))
      };
    } else {
      return data.config.tooltip;
    }
  };

  const getLineStyle = () => {
    if (data.lineStyleFn.visible) {
      return runJs(decodeURIComponent(data.lineStyleFn.content || defaultLineStyleFn));
    } else {
      return null;
    }
  };

  const getGeometryOptions = () => {
    if (data.type === chartTypes.DUAL_AXES) {
      return data.config.geometryOptions || [{}, {}];
    }
  };

  const config = {
    data: chartData,
    percent,
    ...data.config,
    tooltip: getTooltip(),
    lineStyle: getLineStyle(),
    geometryOptions: getGeometryOptions()
  };

  if (!config.tooltip) {
    delete config.tooltip;
  }

  if (data.type === chartTypes.LIQUID) {
    delete config.data;
    delete config.label;
  } else {
    delete config.percent;
  }

  const Chart = useMemo(() => Charts[data.type], [data.type, data.config, chartData, config]);

  return (
    <Spin spinning={loading}>
      {config.data?.length > 0 || config.percent > 0 ? (
        <Chart style={{ width: style.width, height: style.height }} {...config} />
      ) : (
        <EmptyWrap
          style={{ width: style.width, height: style.height }}
          emptyText={data?.emptyText || '暂无数据'}
          useEmpty={data?.useEmpty}
          emptyImage={data.emptyImage}
        />
      )}
    </Spin>
  );
}
