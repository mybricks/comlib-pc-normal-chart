import { ChartConfigProps } from '../utils/constants';

export interface Data {
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
