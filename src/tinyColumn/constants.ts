import { ChartConfigProps, ChartProps } from '../utils/constants';

export interface Data extends ChartProps {
  config: ChartConfigProps & {
    color?: string;
  };
}

export const InputIds = {
  SetData: 'data'
};

export const MockData = [1, 2, 3, 4, 5];
