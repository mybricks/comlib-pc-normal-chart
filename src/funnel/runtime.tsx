import React, { useEffect, useState } from 'react';
import { Funnel } from '@ant-design/charts';
import { Data, InputIds, MockData } from './constants';
import EmptyWrap from '../components/emptyWrap';
import { Spin } from 'antd';

export default function ({ data, env, inputs, style }: RuntimeParams<Data>) {
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

  return (
    <Spin spinning={loading}>
      <EmptyWrap
        isEmpty={data.useEmpty && env.runtime && dataSourceInRuntime.length === 0}
        emptyText={data.emptyText}
      >
        <Funnel
          {...style}
          {...data.config}
          data={env.edit ? MockData['default'] : dataSourceInRuntime}
          key={env.edit ? JSON.stringify(data.config) : undefined}
        />
      </EmptyWrap>
    </Spin>
  );
}
