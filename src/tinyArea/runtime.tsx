import React, { useEffect, useState } from 'react';
import { TinyArea } from '@ant-design/charts';
import { Data, InputIds, MockData } from './constants';
import EmptyWrap from '../components/emptyWrap';

export default function ({ data, env, inputs, style }: RuntimeParams<Data>) {
  const [dataSourceInRuntime, setRuntimeDataSource] = useState([]);
  const [config, setConfig] = useState(data);

  useEffect(() => {
    if (env.runtime) {
      inputs.data((ds: any) => {
        if (Array.isArray(ds)) {
          setRuntimeDataSource(ds);
        } else {
          setRuntimeDataSource([]);
          console.error('迷你面积图输入数据必须是数字数组');
        }
      });
      inputs.style((ds: any) => {
        setConfig({ ...config, ...ds });
      });
      const ids = ['xAxis', 'yAxis', 'tooltip'];
      ids.forEach((id) => {
        inputs[id]((ds: Object) => {
          setConfig({ ...config, [id]: { ...ds } });
        });
      });
    }
  }, []);

  return (
    <EmptyWrap
      isEmpty={data.useEmpty && env.runtime && dataSourceInRuntime.length === 0}
      emptyText={data.emptyText}
      small
    >
      <TinyArea
        {...style}
        {...config}
        data={env.edit ? MockData['default'] : dataSourceInRuntime}
        key={env.edit ? JSON.stringify(data.config) : undefined}
      />
    </EmptyWrap>
  );
}
