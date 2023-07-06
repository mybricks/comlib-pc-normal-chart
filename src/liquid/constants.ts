import { ChartConfigProps, ChartProps } from '../utils/constants';

export enum SubTypeEnum {
  Default = 'default',
  Stack = 'stack',
  Group = 'group'
}
export interface Data extends ChartProps {
  config: ChartConfigProps & {
    isStack?: boolean;
    isGroup?: boolean;
    seriesField?: string;
    percent: number;
    radius: number;
  };
  subType?: SubTypeEnum;
}

export const InputIds = {
  SetData: 'data'
};

export const MockData: any = {
  default: {
    percent: 0.25,
    radius: 1,
    liquidStyle: {
      fill: 'blue',
      stroke: 'blue'
    }
  },
};
