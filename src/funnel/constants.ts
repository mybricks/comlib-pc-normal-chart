import { ChartConfigProps } from '../utils/constants';

export interface Data {
  config: ChartConfigProps;
}

export const InputIds = {
  SetData: 'data'
};

export const MockData = [
  {
    xField: '1991',
    yField: 3
  },
  {
    xField: '1992',
    yField: 4
  },
  {
    xField: '1993',
    yField: 5
  },
  {
    xField: '1994',
    yField: 6
  },
  {
    xField: '1995',
    yField: 7
  }
];
