import React, { useEffect, useState } from 'react';
import { RingProgress } from '@ant-design/charts';
import { Data, MockData } from './constants';
import { Spin } from 'antd';
import EmptyWrap from '../components/emptyWrap';
import { handleOutputFn } from '../utils';

export default function ({ data, inputs, outputs, style, env, title }) {
  const [dataSourceInRuntime, setRuntimeDataSource] = useState(null);
  const [config, setConfig] = useState<Data | {}>(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (env.runtime) {
      setLoading(true);
      inputs.style((ds: any) => {
        setConfig({ ...config, ...ds });
      });

      inputs.percent((ds: number, relOutputs: any) => {
        const dsNum = Number(ds);
        if (isNaN(dsNum)) {
          console.error(`${title}输入数据不合法！`);
        } else {
          setRuntimeDataSource(ds);
        }
        handleOutputFn(relOutputs, outputs, 'data', ds);
      });

      const ids = ['statistic', 'tooltip'];
      ids.forEach((id) => {
        inputs[id]((ds: Object, relOutputs: any) => {
          setConfig({ ...config, [id]: { ...ds } });
          handleOutputFn(relOutputs, outputs, id, ds);
        });
      });

      setLoading(false);
    }
  }, []);

  return (
    <Spin spinning={loading}>
      {!env.runtime || dataSourceInRuntime !== null ? (
        <RingProgress
          {...config}
          style={{ width: style.width, height: style.height }}
          percent={env.edit ? MockData : dataSourceInRuntime}
          key={env.edit ? JSON.stringify(data.config) : undefined}
        />
      ) : (
        <EmptyWrap
          style={{ width: style.width, height: style.height }}
          emptyText={data.emptyText}
          useEmpty={data.useEmpty}
          emptyImage={data.emptyImage}
          small
        />
      )}
    </Spin>
  );
}
