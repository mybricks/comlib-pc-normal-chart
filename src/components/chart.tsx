import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { Spin } from 'antd';
import { ChartType } from '../const';
import { initInput } from './inputs';
import { updateAnnotations } from './updateAnnotations';

const isEmpty = (item: any) => {
  if (!item) return true;
  return Object.keys(item).length === 0;
}

const getField = (data) => {
  if (data.type === ChartType.BidirectionalBar) {
    return {
      xField: 'country',
      yField: ['耕地面积', '转基因面积'],
    };
  }
  if (data.type === ChartType.Pie) {
    return {
      angleField: 'value',
      colorField: 'type',
    };
  }
  if (data.type === ChartType.DualAxes) {
    return {
      xField: data.config.xField,
      yField: data.config.yField,
    };
  }
  return {
    xField: 'year',
    yField: 'value',
  };
};

export default function BasicChart({
  data,
  env,
  inputs,
  outputs,
  Chart,
  MockData,
  style
}: RuntimeParams<any>) {
  let dataSourceInEdit = useMemo(
    () => MockData[data.subType || 'default'],
    [data.type, data.subType]
  );
  const [dataSourceInRuntime, setRuntimeDataSource] = useState([]);
  const [leftDataSourceInRuntime, setRuntimeLeftDataSource] = useState([]);
  const [rightDataSourceInRuntime, setRuntimeRightDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tip, setTip] = useState('');

  useEffect(() => {
    if (env.runtime) {
      setLoading(true);
      inputs.data((ds: any) => {
        if (data.type === ChartType.Liquid) {
          data.config = {
            ...data.config,
            percent: ds.percent
          }
          setRuntimeDataSource([]);
        } else {
          setRuntimeDataSource(ds);
        }
        setLoading(false);
      });
      inputs.data0((ds: any) => {
        setRuntimeLeftDataSource(ds);
        setLoading(false);
      });
      inputs.data1((ds: any) => {
        setRuntimeRightDataSource(ds);
        setLoading(false);
      });
    }
  }, []);

  useEffect(() => {
    if (env.runtime) {
      initInput(data).forEach(({ id }) => {
        inputs[id]((ds: Object) => {
          if (id === 'style') {
            data.config = { ...data.config, ...ds };
          } else if (id === 'loading') {
            if (typeof ds === 'string') setTip(ds);
            setLoading(!!ds);
          } else {
            if (id === 'axis') id = 'xAxis';
            if (id === 'yaxis') id = 'yAxis';
            data.config = { ...data.config, [id]: { ...ds } };
          }
        });
      });
    }
  }, []);

  if (env.edit) {
    return (
      <Chart {...data.config} {...getField(data)} data={dataSourceInEdit} />
    );
  }

  dataSourceInEdit = null;

  data.config.annotations = useMemo(() => {
    return updateAnnotations(data, dataSourceInRuntime);
  }, [dataSourceInRuntime, data.config]);

  const dualAxesDataSourceInRuntime = useMemo(() => {
    return [leftDataSourceInRuntime, rightDataSourceInRuntime];
  }, [leftDataSourceInRuntime, rightDataSourceInRuntime]);

  const onReady = useCallback((graph: any) => {
    graph.on('node:click', ({ item }) => {
      const { id, value } = item['_cfg'].model;
      outputs['nodeClick']?.({ id, value });
    });
  }, [])

  return <Spin spinning={loading} tip={tip}>
    {
      isEmpty(dataSourceInRuntime) && isEmpty(dualAxesDataSourceInRuntime) ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>暂无数据</div>
      ) : (
        <Chart
          {...style}
          {...data.config}
          onReady={onReady}
          data={data.type === ChartType.DualAxes
            ? dualAxesDataSourceInRuntime
            : dataSourceInRuntime}
        />
      )
    }
  </Spin>
}
