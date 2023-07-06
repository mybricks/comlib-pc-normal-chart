import React, { useEffect, useState } from 'react';
import { Liquid } from '@ant-design/charts';
import { Data, InputIds, MockData } from './constants';
import EmptyWrap from '../components/emptyWrap';

export default function ({ data, env, inputs, style }: RuntimeParams<Data>) {
  const [dataSourceInRuntime, setRuntimeDataSource] = useState({});

  useEffect(() => {
    if (env.runtime) {
      setRuntimeDataSource({
        ...data.config,
        ...inputs[InputIds.SetData]
      });
    }
  }, []);

  return (
    <EmptyWrap
      isEmpty={data.useEmpty && env.runtime && !Object.keys(dataSourceInRuntime).length}
      emptyText={data.emptyText}
    >
      <Liquid
        style={{ width: style.width, height: style.height }}
        {...(env.edit ? MockData[data.subType] : dataSourceInRuntime)}
        key={env.edit ? JSON.stringify(data.config) : undefined}
      />
    </EmptyWrap>
  );
}
