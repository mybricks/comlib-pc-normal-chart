import { ChartConfigProps } from '../utils/constants';

export interface Data {
  config: ChartConfigProps & {
    color?: string;
  };
}

export const InputIds = {
  SetData: 'data'
};

export const MockData = [1, 2, 3, 4, 5];
