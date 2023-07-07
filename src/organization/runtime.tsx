import React, { useEffect, useState } from 'react';
import { OrganizationGraph } from '@ant-design/graphs';
import { Data, MockData } from './constants';
import EmptyWrap from '../components/emptyWrap';
import copy from 'copy-to-clipboard';
import { Spin, message } from 'antd';

export default function ({ data, env, inputs, style }: RuntimeParams<Data>) {
  const [dataSourceInRuntime, setRuntimeDataSource] = useState<any>({ id: 'root' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (env.runtime) {
      inputs.data((val: React.SetStateAction<any[]>) => {
        setRuntimeDataSource(val);
        setLoading(false);
      });
    }
  }, []);

  return (
    <Spin spinning={loading}>
      <EmptyWrap
        isEmpty={data.useEmpty && env.runtime && Object.keys(dataSourceInRuntime).length === 1}
        emptyText={data.emptyText}
      >
        <OrganizationGraph
          {...style}
          {...data.config}
          data={env.edit ? MockData : dataSourceInRuntime}
          key={env.edit ? JSON.stringify(data.config) : undefined}
        />
      </EmptyWrap>
    </Spin>
  );
}
