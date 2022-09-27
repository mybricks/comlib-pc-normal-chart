import { ChartConfigProps, ChartProps } from '../utils/constants';

export interface Data extends ChartProps {
  config: ChartConfigProps & {
    smooth?: boolean;
    line?: {
      color?: string;
    };
    areaStyle?: {
      fill: string;
    };
  };
}

export const InputIds = {
  SetData: 'data'
};

export const MockData = [1, 3, 2, 5, 4];
