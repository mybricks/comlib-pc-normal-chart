import { ChartConfigProps } from '../utils/constants';

export enum SubTypeEnum {
  Default = 'default',
  Stack = 'stack',
  Group = 'group'
}
export interface Data {
  config: ChartConfigProps & {
    isStack?: boolean;
    isGroup?: boolean;
    seriesField?: string;
  };
  subType?: SubTypeEnum;
}

export const InputIds = {
  SetData: 'data'
};

export const MockData = [
  {
    yField: '1991',
    xField: 3,
    seriesField: 's1'
  },
  {
    yField: '1992',
    xField: 4,
    seriesField: 's1'
  },
  {
    yField: '1991',
    xField: 4,
    seriesField: 's2'
  },
  {
    yField: '1992',
    xField: 5,
    seriesField: 's2'
  }
];
