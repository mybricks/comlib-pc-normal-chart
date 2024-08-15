import React, { useEffect, useState } from 'react';
import { MockData } from './constants';
import Heatmap from './heatmap';
import { Spin } from 'antd';
import { handleOutputFn } from '../utils';

export default function ({ data, style, inputs, outputs, env }) {
  const [dataSource, setDataSource] = useState(env.edit ? MockData.slice(0, 20) : []);
  const [subDataSource, setSubDataSource] = useState(env.edit ? MockData.slice(20, 23) : []);
  const [loading, setLoading] = useState(false);
  const [tip, setTip] = useState('');
  useEffect(() => {
    inputs.setBgImg((url: string, relOutputs: any) => {
      data.config.annotations[0].src = url;
      data.config = { ...data.config };
      handleOutputFn(relOutputs, outputs, 'setBgImg', url);
    });
    inputs.data(({ dataSource, xAxis, yAxis }, relOutputs: any) => {
      if (!Array.isArray(dataSource)) return;
      if (xAxis) {
        Object.assign(data.config.xAxis, xAxis);
      }
      if (yAxis) {
        Object.assign(data.config.yAxis, yAxis);
      }
      if (xAxis || yAxis) {
        data.config = { ...data.config };
      }
      setDataSource(dataSource);
      handleOutputFn(relOutputs, outputs, 'data', { dataSource, xAxis, yAxis });
    });
    inputs.extraData0(({ dataSource, xAxis, yAxis }, relOutputs: any) => {
      if (!Array.isArray(dataSource)) return;
      if (xAxis) {
        Object.assign(data.subConfig[0].xAxis, xAxis);
      }
      if (yAxis) {
        Object.assign(data.subConfig[0].yAxis, yAxis);
      }
      setSubDataSource(dataSource);
      handleOutputFn(relOutputs, outputs, 'extraData0', { dataSource, xAxis, yAxis });
    });
    inputs.setMainConfig((config: { label: any; useSubHeatMap: any }, relOutputs: any) => {
      data.config = {
        ...data.config,
        ...config,
        label: {
          ...data.config.label,
          ...config.label
        }
      };

      if (config.useSubHeatMap !== void 0) {
        data.useSubHeatMap = config.useSubHeatMap;
      }
      handleOutputFn(relOutputs, outputs, 'setMainConfig', config);
    });
    inputs.setSubConfig((config: { label: any }, relOutputs: any) => {
      data.subConfig[0] = {
        ...data.subConfig[0],
        ...config,
        label: {
          ...data.subConfig[0].label,
          ...config.label
        }
      };
      data.subConfig = [...data.subConfig];
      handleOutputFn(relOutputs, outputs, 'setSubConfig', config);
    });
    inputs.loading((ds: React.SetStateAction<string>, relOutputs: any) => {
      if (typeof ds === 'string') setTip(ds);
      setLoading(!!ds);
      handleOutputFn(relOutputs, outputs, 'loading', ds);
    });
  }, []);

  return (
    <Spin spinning={loading} tip={tip}>
      <Heatmap
        env={env}
        style={style}
        inputs={inputs}
        outputs={outputs}
        dataSource={dataSource}
        subDataSource={subDataSource}
        mainConfig={data.config}
        subConfig={data.subConfig}
        useSubHeatMap={data.useSubHeatMap}
      />
    </Spin>
  );
}
