import { ChartConfigProps, ChartProps } from '../utils/constants';

export enum SubTypeEnum {
  Default = 'default',
  Circel = 'circel'
}
export interface Data extends ChartProps {
  config: ChartConfigProps & {
    angleField?: string;
    colorField?: string;
    radius?: number;
    innerRadius?: number;
  };
  subType?: SubTypeEnum;
}

export const InputIds = {
  SetData: 'data'
};

export const MockData = [
  {
    seriesField: '分类一',
    value: 27
  },
  {
    seriesField: '分类二',
    value: 25
  },
  {
    seriesField: '其他',
    value: 5
  }
];
