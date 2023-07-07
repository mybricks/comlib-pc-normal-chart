import React, { useEffect, useState, useCallback } from 'react';
import { Pie } from '@ant-design/charts';
import { Data, InputIds, MockData } from './constants';
import EmptyWrap from '../components/emptyWrap';
import copy from 'copy-to-clipboard';
import { Spin, message } from 'antd';

export default function ({ data, env, inputs, outputs, style }: RuntimeParams<Data>) {
  const [dataSourceInRuntime, setRuntimeDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (env.runtime) {
      setLoading(true);
      inputs[InputIds.SetData]((val: React.SetStateAction<any[]>) => {
        if (Array.isArray(val)) {
          setRuntimeDataSource(val);
        }
        setLoading(false);
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

  return (
    <Spin spinning={loading}>
      <EmptyWrap
        isEmpty={data.useEmpty && env.runtime && dataSourceInRuntime.length === 0}
        emptyText={data.emptyText}
      >
        <Pie
          {...{ ...style, width: undefined }}
          onReady={onReady}
          {...data.config}
          data={env.edit ? MockData[data.subType] : dataSourceInRuntime}
          key={env.edit ? JSON.stringify(data.config) : undefined}
        />
      </EmptyWrap>
    </Spin>
  );
}
