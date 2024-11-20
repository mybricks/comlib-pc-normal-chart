import React, { useMemo, useEffect, useState, useCallback } from 'react';
import { DualAxes } from '@ant-design/charts';
import { Data, MockData, InputId, OutputId } from './constants';
import copy from 'copy-to-clipboard';
import { Spin, message } from 'antd';
import EmptyWrap from '../components/emptyWrap';
import { callInputs, handleOutputFn } from '../utils';
import { chartTypes } from '../charts/constants';

export default function (props: RuntimeParams<Data>) {
  const { data, env, inputs, outputs, style } = props;

  const [leftDataSourceInRuntime, setRuntimeLeftDataSource] = useState([]);
  const [rightDataSourceInRuntime, setRuntimeRightDataSource] = useState([]);
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
      inputs[InputId.Data0]((val: any, relOutputs: any) => {
        if (Array.isArray(val)) {
          setRuntimeLeftDataSource(val);
        }
        handleOutputFn(relOutputs, outputs, OutputId.Data0, val);
      });
      inputs[InputId.Data1]((val: any, relOutputs: any) => {
        if (Array.isArray(val)) {
          setRuntimeRightDataSource(val);
        }
        handleOutputFn(relOutputs, outputs, OutputId.Data1, val);
      });
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    callInputs(chartTypes.DUAL_AXES, props, {
      setLoading,
      setTip,
      setConfigData
    });
  }, []);

  useEffect(() => {
    configData.geometryOptions.forEach((item) => {
      if (item.seriesField) {
        item.color = undefined;
      }
    });
    inputs[InputId.GeometryOptions] &&
      inputs[InputId.GeometryOptions]((val: Array<any>, relOutputs: any) => {
        if (!Array.isArray(val)) {
          return;
        }

        configData.geometryOptions = configData.geometryOptions.map((option, index) => {
          return {
            ...option,
            ...(val[index] || {})
          };
        });
        handleOutputFn(relOutputs, outputs, OutputId.GeometryOptions, configData);
        setConfigData({ ...configData });
      });
  }, [configData]);

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
  }, []);

  const dataSourceInRuntime = useMemo(() => {
    return [leftDataSourceInRuntime, rightDataSourceInRuntime];
  }, [leftDataSourceInRuntime, rightDataSourceInRuntime]);

  return (
    <Spin spinning={loading} tip={tip}>
      {!env.runtime ||
      leftDataSourceInRuntime.length !== 0 ||
      rightDataSourceInRuntime.length !== 0 ? (
        <DualAxes
          style={{ width: style.width, height: style.height }}
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
