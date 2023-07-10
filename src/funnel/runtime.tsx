import React, { useEffect, useState, useCallback } from 'react';
import { Funnel } from '@ant-design/charts';
import { Data, MockData } from './constants';
import copy from 'copy-to-clipboard';
import { Spin, message } from 'antd';

export default function ({ data, env, inputs, outputs, style }: RuntimeParams<Data>) {
  const [dataSourceInRuntime, setRuntimeDataSource] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (env.runtime) {
      setLoading(true);
      inputs.data((val: React.SetStateAction<any[]>) => {
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

  return !env.runtime || dataSourceInRuntime.length !== 0 ? (
    <Spin spinning={loading}>
      <Funnel
        style={{ width: style.width, height: style.height }}
        {...data.config}
        onReady={onReady}
        data={env.edit ? MockData : dataSourceInRuntime}
        key={env.edit ? JSON.stringify(data.config) : undefined}
      />
    </Spin>
  ) : null;
}
