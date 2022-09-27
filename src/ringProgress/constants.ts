import { ChartConfigProps } from '../utils/constants';

type StatisticText =
  | boolean
  | {
      content?: string;
    };

export interface Data {
  config: ChartConfigProps & {
    percent?: number;
    color?: [string, string];
    innerRadius?: number;
    radius?: number;
    statistic?: {
      title?: StatisticText;
      content?: StatisticText;
    };
  };
}

export const InputIds = {
  SetData: 'data'
};

export const MockData = 0.4;
