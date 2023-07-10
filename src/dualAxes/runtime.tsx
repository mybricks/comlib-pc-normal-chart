import React, { useMemo, useEffect, useState, useCallback } from 'react';
import { DualAxes } from '@ant-design/charts';
import { Data, MockData } from './constants';
import copy from 'copy-to-clipboard';
import { Spin, message } from 'antd';
import EmptyWrap from '../components/emptyWrap';

export default function ({ data, env, inputs, outputs, style }: RuntimeParams<Data>) {
  const [leftDataSourceInRuntime, setRuntimeLeftDataSource] = useState([]);
  const [rightDataSourceInRuntime, setRuntimeRightDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (env.runtime) {
      setLoading(true);
      inputs.data0((val: any) => {
        if (Array.isArray(val)) {
          setLoading(false);
          setRuntimeLeftDataSource(val);
        }
      });
      inputs.data1((val: any) => {
        if (Array.isArray(val)) {
          setLoading(false);
          setRuntimeRightDataSource(val);
        }
      });
    }
  }, []);

  const onReady = useCallback((graph: any) => {
    graph.on('node:click', ({ item }) => {
      const { id, value } = item['_cfg'].model;
      outputs['nodeClick']?.({ id, value });
    });
    graph.on('legend-item-name:click', ({ target }) => {
      if (data.copyLegendTextOnClick) {
        const legendTitle = target?.attrs?.text;
        try {
          copy(legendTitle);
          message.success('复制成功 !');
        } catch {
          message.error('复制失败! 请稍后重试');
        }
      }
    });
  }, []);

  const dataSourceInRuntime = useMemo(() => {
    return [leftDataSourceInRuntime, rightDataSourceInRuntime];
  }, [leftDataSourceInRuntime, rightDataSourceInRuntime]);

  return (
    <Spin spinning={loading}>
      {!env.runtime ||
      leftDataSourceInRuntime.length !== 0 ||
      rightDataSourceInRuntime.length !== 0 ? (
        <DualAxes
          style={{ width: style.width, height: style.height }}
          {...data.config}
          onReady={onReady}
          data={env.edit ? MockData : dataSourceInRuntime}
          key={env.edit ? JSON.stringify(data.config) : undefined}
        />
      ) : (
        <EmptyWrap
          style={{ width: style.width, height: style.height }}
          emptyText={data.emptyText}
          useEmpty={data.useEmpty}
        />
      )}
    </Spin>
  );
}
