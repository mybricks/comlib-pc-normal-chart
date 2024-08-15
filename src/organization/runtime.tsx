import React, { useEffect, useState, useCallback } from 'react';
import { OrganizationGraph } from '@ant-design/graphs';
import { Data, MockData } from './constants';
import { Spin } from 'antd';
import EmptyWrap from '../components/emptyWrap';
import { callInputs, handleOutputFn } from '../utils';
import { chartTypes } from '../charts/constants';

export default function (props: RuntimeParams<Data>) {
  const { data, env, inputs, outputs, style } = props;

  const [dataSourceInRuntime, setRuntimeDataSource] = useState<any>({ id: 'root' });
  const [loading, setLoading] = useState(false);
  const [tip, setTip] = useState('');
  const [configData, setConfigData] = useState<Data['config']>(
    JSON.parse(JSON.stringify(data.config))
  );

  useEffect(() => {
    if (env.runtime) {
      setLoading(true);
      inputs.data((val: React.SetStateAction<any[]>, relOutputs: any) => {
        setRuntimeDataSource(val);
        handleOutputFn(relOutputs, outputs, 'data', val);
      });
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    callInputs(chartTypes.ORGANIZATION, props, {
      setLoading,
      setTip,
      setConfigData
    });
  }, []);

  const onReady = useCallback((graph: any) => {
    graph.on('node:click', ({ item }) => {
      const { id, value } = item['_cfg'].model;
      outputs['nodeClick']?.({ id, value });
    });
  }, []);

  return (
    <Spin spinning={loading} tip={tip}>
      {!env.runtime || Object.keys(dataSourceInRuntime).length > 1 ? (
        <OrganizationGraph
          style={{ width: style.width, height: style.height }}
          // {...data.config}
          {...configData}
          onReady={onReady}
          data={env.edit ? MockData : dataSourceInRuntime}
          key={env.edit ? JSON.stringify(data.config) : undefined}
        />
      ) : (
        <EmptyWrap
          style={{ width: style.width, height: style.height }}
          emptyText={data.emptyText}
          useEmpty={data.useEmpty}
          emptyImage={data.emptyImage}
        />
      )}
    </Spin>
  );
}
