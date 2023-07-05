import React, { useEffect, useState } from 'react';
import { Liquid } from '@ant-design/charts';
import { Data, InputIds, MockData } from './constants';
import EmptyWrap from '../components/emptyWrap';

export default function ({ data, env, inputs, style }: RuntimeParams<Data>) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (env.runtime) {
      inputs[InputIds.SetData]((val: React.SetStateAction<any>) => {
        data.config = {
          ...data.config,
          percent: val.percent
        };
      });
    }
  }, []);

  return (
    <EmptyWrap isEmpty={data.useEmpty && env.runtime && !!percent} emptyText={data.emptyText}>
      <Liquid
        {...style}
        {...data.config}
        {...MockData['default']}
        key={env.edit ? JSON.stringify(data.config) : undefined}
      />
    </EmptyWrap>
  );
}
