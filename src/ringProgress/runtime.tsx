import React, { useEffect, useState } from 'react';
import { RingProgress } from '@ant-design/charts';
import { Data, MockData } from './constants';
import { Spin } from 'antd';

export default function ({ data, inputs, style, env, title }) {
  const [config, setConfig] = useState<Data | {}>({ ...data });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (env.runtime) {
      setLoading(true);
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
      setLoading(false);
    }
  }, []);

  return (
    <Spin spinning={loading}>
      <RingProgress
        style={{ width: style.width, height: style.height }}
        {...(env.edit ? { ...MockData, ...data } : config)}
        key={env.edit ? JSON.stringify(data.config) : undefined}
      />
    </Spin>
  );
}
