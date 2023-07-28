import React, { useEffect, useState } from 'react';
import { OrganizationGraph } from '@ant-design/graphs';
import { Data, MockData } from './constants';
import { Spin } from 'antd';
import EmptyWrap from '../components/emptyWrap';

export default function ({ data, env, inputs, style }: RuntimeParams<Data>) {
  const [dataSourceInRuntime, setRuntimeDataSource] = useState<any>({ id: 'root' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (env.runtime) {
      setLoading(true);
      inputs.data((val: React.SetStateAction<any[]>) => {
        setLoading(false);
        setRuntimeDataSource(val);
      });
    }
  }, []);

  return (
    <Spin spinning={loading}>
      {!env.runtime || Object.keys(dataSourceInRuntime).length > 1 ? (
        <OrganizationGraph
          style={{ width: style.width, height: style.height }}
          {...data.config}
          data={env.edit ? MockData : dataSourceInRuntime}
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
