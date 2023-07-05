import { ChartConfigProps, ChartProps } from '../utils/constants';

export interface Data extends ChartProps {
  config: ChartConfigProps & {
    color?: string;
  };
}

export const InputIds = {
  SetData: 'data'
};

export const MockData: any = {
  default: [274, 337, 81, 497, 666, 219, 269]
}
