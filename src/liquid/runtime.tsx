import React, { useEffect, useState, useCallback } from 'react';
import { Liquid } from '@ant-design/charts';
import { Data, MockData } from './constants';
import copy from 'copy-to-clipboard';
import { Spin, message } from 'antd';
import EmptyWrap from '../components/emptyWrap';

export default function ({ data, env, inputs, outputs, style }: RuntimeParams<Data>) {
  const [dataSourceInRuntime, setRuntimeDataSource] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (env.runtime) {
      setLoading(true);
      inputs.data((val: React.SetStateAction<any>) => {
        if (typeof val.percent === 'number') {
          setLoading(false);
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
    <Spin spinning={loading}>
      {!env.runtime || Object.keys(dataSourceInRuntime).length !== 0 ? (
        <Liquid
          style={{ width: style.width, height: style.height }}
          onReady={onReady}
          {...(env.edit
            ? { ...MockData, ...data.config }
            : { ...data.config, ...dataSourceInRuntime })}
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
