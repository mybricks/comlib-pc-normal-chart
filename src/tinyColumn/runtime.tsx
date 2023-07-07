import React, { useEffect, useState, useCallback } from 'react';
import { TinyColumn } from '@ant-design/charts';
import { Data, MockData } from './constants';
import EmptyWrap from '../components/emptyWrap';
import copy from 'copy-to-clipboard';
import { message } from 'antd';

export default function ({ data, env, inputs, outputs, style }: RuntimeParams<Data>) {
  const [dataSourceInRuntime, setRuntimeDataSource] = useState([]);

  useEffect(() => {
    if (env.runtime) {
      inputs.data((val: React.SetStateAction<any[]>) => {
        if (Array.isArray(val)) {
          setRuntimeDataSource(val);
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

  return (
    <EmptyWrap
      isEmpty={data.useEmpty && env.runtime && dataSourceInRuntime.length === 0}
      emptyText={data.emptyText}
      small
    >
      <TinyColumn
        {...style}
        onReady={onReady}
        {...data.config}
        data={env.edit ? MockData : dataSourceInRuntime}
        key={env.edit ? JSON.stringify(data.config) : undefined}
      />
    </EmptyWrap>
  );
}
