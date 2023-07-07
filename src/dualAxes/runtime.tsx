import React, { useMemo, useEffect, useState, useCallback } from 'react';
import { DualAxes } from '@ant-design/charts';
import { Data, MockData } from './constants';
import EmptyWrap from '../components/emptyWrap';
import copy from 'copy-to-clipboard';
import { Spin, message } from 'antd';

export default function ({ data, env, inputs, outputs, style }: RuntimeParams<Data>) {
  const [leftDataSourceInRuntime, setRuntimeLeftDataSource] = useState([]);
  const [rightDataSourceInRuntime, setRuntimeRightDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (env.runtime) {
      setLoading(true);
      inputs.data0((val: any) => {
        if (Array.isArray(val)) {
          setRuntimeLeftDataSource(val);
        }
      });
      inputs.data1((val: any) => {
        if (Array.isArray(val)) {
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
    setLoading(false);
    return [leftDataSourceInRuntime, rightDataSourceInRuntime];
  }, [leftDataSourceInRuntime, rightDataSourceInRuntime]);

  return (
    <Spin spinning={loading}>
      <EmptyWrap
        isEmpty={
          data.useEmpty &&
          env.runtime &&
          leftDataSourceInRuntime.length === 0 &&
          rightDataSourceInRuntime.length === 0
        }
        emptyText={data.emptyText}
      >
        <DualAxes
          {...{ ...style, width: undefined }}
          {...data.config}
          onReady={onReady}
          data={env.edit ? MockData : dataSourceInRuntime}
          key={env.edit ? JSON.stringify(data.config) : undefined}
        />
      </EmptyWrap>
    </Spin>
  );
}
