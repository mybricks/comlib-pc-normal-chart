import React, { useEffect, useState } from 'react';
import { Funnel } from '@ant-design/charts';
import { Data, InputIds, MockData } from './constants';
import EmptyWrap from '../components/emptyWrap';

export default function ({ data, env, inputs, style }: RuntimeParams<Data>) {
  const [dataSourceInRuntime, setRuntimeDataSource] = useState([]);

  useEffect(() => {
    if (env.runtime) {
      inputs[InputIds.SetData]((val: React.SetStateAction<any[]>) => {
        if (Array.isArray(val)) {
          setRuntimeDataSource(val);
        }
      });
    }
  }, []);

  return (
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
  );
}
