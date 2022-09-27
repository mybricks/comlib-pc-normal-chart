import React, { useEffect, useMemo, useState } from 'react';
import { DualAxes } from '@ant-design/charts';
import { Data, InputIds, MockData } from './constants';
import EmptyWrap from '../components/emptyWrap';

export default function ({ data, env, inputs, style }: RuntimeParams<Data>) {
  const [leftDataSourceInRuntime, setRuntimeLeftDataSource] = useState([]);
  const [rightDataSourceInRuntime, setRuntimeRightDataSource] = useState([]);

  useEffect(() => {
    if (env.runtime) {
      inputs[InputIds.SetLeftData]((val: any) => {
        if (Array.isArray(val)) {
          setRuntimeLeftDataSource(val);
        }
      });
      inputs[InputIds.SetRightData]((val: any) => {
        if (Array.isArray(val)) {
          setRuntimeRightDataSource(val);
        }
      });
    }
  }, []);

  const dataSourceInRuntime = useMemo(() => {
    return [leftDataSourceInRuntime, rightDataSourceInRuntime];
  }, [leftDataSourceInRuntime, rightDataSourceInRuntime]);
  const mockData = useMemo(() => {
    const leftSeriesField = data.seriesField[0];
    const rightSeriesField = data.seriesField[1];
    return [
      leftSeriesField ? MockData['more'][0] : MockData['default'][0],
      rightSeriesField ? MockData['more'][1] : MockData['default'][1]
    ];
  }, [data.seriesField[0], data.seriesField[1]]);

  return (
    <EmptyWrap
      isEmpty={
        data.useEmpty &&
        env.runtime &&
        leftDataSourceInRuntime.length === 0 &&
        rightDataSourceInRuntime.length === 0
      }
      emptyText={data.emptyText}
    >
      <DualAxes
        {...style}
        {...data.config}
        data={env.edit ? mockData : dataSourceInRuntime}
        key={env.edit ? JSON.stringify(data.config) : undefined}
      />
    </EmptyWrap>
  );
}
