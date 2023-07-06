import React, { useEffect, useState } from 'react';
import { Liquid } from '@ant-design/charts';
import { Data, InputIds, MockData } from './constants';
import EmptyWrap from '../components/emptyWrap';
import { Spin } from 'antd';

export default function ({ data, env, inputs, style }: RuntimeParams<Data>) {
  const [dataSourceInRuntime, setRuntimeDataSource] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (env.runtime) {
      setLoading(true);
      setRuntimeDataSource({
        ...data.config,
        ...inputs[InputIds.SetData]
      });
      setLoading(false);
    }
  }, []);

  return (
    <Spin spinning={loading}>
      <EmptyWrap
        isEmpty={data.useEmpty && env.runtime && !Object.keys(dataSourceInRuntime).length}
        emptyText={data.emptyText}
      >
        <Liquid
          style={{ width: style.width, height: style.height }}
          {...(env.edit ? MockData[data.subType] : dataSourceInRuntime)}
          {...data.config}
          key={env.edit ? JSON.stringify(data.config) : undefined}
        />
      </EmptyWrap>
    </Spin>
  );
}
