import React, { useEffect, useState, useCallback } from 'react';
import { Bar } from '@ant-design/charts';
import { Data, MockData } from './constants';
import copy from 'copy-to-clipboard';
import { Spin, message } from 'antd';
import EmptyWrap from '../components/emptyWrap';
import { callInputs, changeMockDataField, handleOutputFn, registerEvents } from '../utils';
import { chartTypes } from '../charts/constants';

export default function (props: RuntimeParams<Data>) {
  const { data, env, inputs, outputs, style } = props;

  const [dataSourceInRuntime, setRuntimeDataSource] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(false);
  const [tip, setTip] = useState('');
  const [configData, setConfigData] = useState<Data['config']>(
    JSON.parse(JSON.stringify(data.config))
  );

  useEffect(() => {
    if (env.edit) {
      setConfigData(data.config);
    }
  }, [data.config, env.edit]);

  useEffect(() => {
    if (env.runtime) {
      setLoading(true);
      inputs.data((val: React.SetStateAction<any[]>, relOutputs: any) => {
        if (Array.isArray(val)) {
          setRuntimeDataSource(val);
        }
        handleOutputFn(relOutputs, outputs, 'data', val);
      });
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    callInputs(chartTypes.BAR, props, {
      setLoading,
      setTip,
      setConfigData
    });
  }, []);

  const onReady = useCallback((graph: any) => {
    graph.on('legend-item-name:click', ({ target }) => {
      if (data.copyLegendTextOnClick) {
        const legendTitle = target?.attrs?.text;
        try {
          copy(legendTitle);
          message.success('复制成功 !');
        } catch {
          message.error('复制失败! 请稍后重试');
        }
      }
    });
    registerEvents({ events: data.events, graph, outputs });
  }, []);

  return (
    <Spin spinning={loading} tip={tip}>
      {!env.runtime || dataSourceInRuntime.length !== 0 ? (
        <Bar
          style={{ width: style.width, height: style.height }}
          onReady={onReady}
          {...configData}
          data={
            env.edit
              ? changeMockDataField(MockData[data.subType], data.config, {
                  x: 'value',
                  y: 'year',
                  category: 'type'
                })
              : dataSourceInRuntime
          }
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
