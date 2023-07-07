import React, { useEffect, useState } from 'react';
import { OrganizationGraph } from '@ant-design/graphs';
import { Data, MockData } from './constants';
import { Spin } from 'antd';

export default function ({ data, env, inputs, style }: RuntimeParams<Data>) {
  const [dataSourceInRuntime, setRuntimeDataSource] = useState<any>({ id: 'root' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (env.runtime) {
      setLoading(true);
      inputs.data((val: React.SetStateAction<any[]>) => {
        setRuntimeDataSource(val);
        setLoading(false);
      });
    }
  }, []);

  return (
    <Spin spinning={loading}>
      <OrganizationGraph
        {...style}
        {...data.config}
        data={env.edit ? MockData : dataSourceInRuntime}
        key={env.edit ? JSON.stringify(data.config) : undefined}
      />
    </Spin>
  );
}
