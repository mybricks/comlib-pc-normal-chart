import React from 'react';
import CustomLegend from '../legend';
import css from './index.less';

interface IProps {
  data: any;
  chart: any;
  config: any;
}
export default function({ data, chart: Chart, config }: IProps) {
  if (!data.useLegend) {
    return <Chart {...config} />
  }
  const { position = 'top' } = data.legend || {};
  const coms = [
    <CustomLegend
      // @ts-ignore
      position={position}
      colors={data.colors}
      categorys={data.categorys}
    />,
    <Chart {...config} style={{ flex: 1, height: '100%' }} />,
  ];

  return (
    <div
      className={`${css.ct} ${
        ['top', 'bottom'].includes(position) && css.column
      }`}
    >
      {['top', 'left'].includes(position) ? coms : [coms[1], coms[0]]}
    </div>
  );
}