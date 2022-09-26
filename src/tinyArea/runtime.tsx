import React, { useEffect, useState } from 'react';
import { TinyArea } from '@ant-design/charts';
import { tinyArea as MockData } from '../mock';

export default function ({ data, inputs, env }) {
  let dataSourceInEdit = MockData['default'];

  const [dataSourceInRuntime, setRuntimeDataSource] = useState<number[]>();
  const [config, setConfig] = useState(data);

  useEffect(() => {
    if (env.runtime) {
      inputs.data((ds: any) => {
        if (Array.isArray(ds)) {
          setRuntimeDataSource(ds);
        } else {
          setRuntimeDataSource([]);
          console.error('迷你面积图输入数据必须是数字数组');
        }
      });
      inputs.style((ds: any) => {
        setConfig({ ...config, ...ds });
      });
      const ids = ['xAxis', 'yAxis', 'tooltip'];
      ids.forEach(id => {
        inputs[id]((ds: Object) => {
          setConfig({ ...config, [id]: { ...ds } });
        });
      })
    }
  }, []);

  if (env.edit) {
    return (
      <TinyArea {...config} data={dataSourceInEdit} />
    );
  }

  dataSourceInEdit = null;

  return <>
    {
      dataSourceInRuntime ? (
        <TinyArea {...config} data={dataSourceInRuntime} />
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center' }}>暂无数据</div>
      )
    }
  </>
}