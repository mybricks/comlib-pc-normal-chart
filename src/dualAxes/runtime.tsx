import React, { useEffect, useMemo, useState } from 'react';
import { DualAxes } from '@ant-design/charts';
import { Data, InputIds, MockData } from './constants';

export default function ({ data, env, inputs, style }: RuntimeParams<Data>) {
  const [leftDataSourceInRuntime, setRuntimeLeftDataSource] = useState([]);
  const [rightDataSourceInRuntime, setRuntimeRightDataSource] = useState([]);

  useEffect(() => {
    if (env.runtime) {
      inputs[InputIds.SetLeftData]((ds: any) => {
        setRuntimeLeftDataSource(ds);
      });
      inputs[InputIds.SetRightData]((ds: any) => {
        setRuntimeRightDataSource(ds);
      });
    }
  }, []);

  const dataSourceInRuntime = useMemo(() => {
    return [leftDataSourceInRuntime, rightDataSourceInRuntime];
  }, [leftDataSourceInRuntime, rightDataSourceInRuntime]);
  const mockData = useMemo(() => {
    const leftSeriesField = data.seriesField[0];
    const rightSeriesField = data.seriesField[1];
    return [leftSeriesField ? MockData['more'][0] : MockData['default'][0],
    rightSeriesField ? MockData['more'][1] : MockData['default'][1]
    ]
  }, [data.seriesField[0], data.seriesField[1]]);

  return (
    <DualAxes
      {...style}
      {...data.config}
      data={env.edit ? mockData : dataSourceInRuntime}
      key={env.edit ? JSON.stringify(data.config) : undefined}
    />
  );
}