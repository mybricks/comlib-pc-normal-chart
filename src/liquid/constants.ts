import { ChartConfigProps, ChartProps } from '../utils/constants';

export interface Data extends ChartProps {
  config: ChartConfigProps & {
    percent: number;
    radius: number;
  };
}

export const MockData: any = {
    percent: 0.25,
    radius: 1,
    liquidStyle: {
      fill: 'blue',
      stroke: 'blue'
    }
};
