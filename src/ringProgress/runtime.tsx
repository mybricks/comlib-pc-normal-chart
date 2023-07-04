import React, { useEffect, useState } from 'react';
import { RingProgress } from '@ant-design/charts';
import { Data } from './constants';

export default function ({ data, inputs, env, title }) {
  const [config, setConfig] = useState<Data>(data);

  useEffect(() => {
    if (env.runtime) {
      inputs.style((ds: any) => {
        setConfig({ ...config, ...ds });
      });

      inputs.percent((ds: number) => {
        const dsNum = Number(ds);
        if (isNaN(dsNum)) {
          console.error(`${title}输入数据不合法！`);
        } else {
          setConfig({ ...config, percent: dsNum });
        }
      });

      const ids = ['statistic', 'tooltip'];
      ids.forEach((id) => {
        inputs[id]((ds: Object) => {
          setConfig({ ...config, [id]: { ...ds } });
        });
      });
    }
  }, []);
  return (
    <>
      {typeof config.percent === 'number' ? (
        <RingProgress {...config} />
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center' }}>暂无数据</div>
      )}
    </>
  );
}
