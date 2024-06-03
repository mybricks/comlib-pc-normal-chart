import { ChartConfigProps, ChartProps } from '../utils/constants';

export interface Data extends ChartProps {
  config: ChartConfigProps & {
    // area?: boolean;
    seriesField?: string;
  };
}

export const MockData: any = [
    {
      year: 'G2',
      value: 10371,
      category: "Test"
    },
    {
      year: 'G6',
      value: 7380,
      category: "Test"
    },
    {
      year: 'F2',
      value: 7414,
      category: "Test"
    },
    {
      year: 'L7',
      value: 2140,
      category: "Test"
    },
    {
      year: 'X6',
      value: 660,
      category: "Test"
    },
    {
      year: 'AVA',
      value: 885,
      category: "Test"
    },
    {
      year: 'G2Plot',
      value: 1626,
      category: "Test"
    },
]
