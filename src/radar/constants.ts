import { ChartConfigProps, ChartProps } from '../utils/constants';

export enum SubTypeEnum {
  Default = 'default',
  Group = 'group'
}
export interface Data extends ChartProps {
  config: ChartConfigProps & {
    area?: boolean;
    seriesField?: string;
  };
  subType?: SubTypeEnum;
}

export const InputIds = {
  SetData: 'data'
};

export const MockData: any = {
  default: [
    {
      year: 'G2',
      value: 10371,
    },
    {
      year: 'G6',
      value: 7380,
    },
    {
      year: 'F2',
      value: 7414,
    },
    {
      year: 'L7',
      value: 2140,
    },
    {
      year: 'X6',
      value: 660,
    },
    {
      year: 'AVA',
      value: 885,
    },
    {
      year: 'G2Plot',
      value: 1626,
    },
  ],
};

export const Schemas = {
  DefaultDataSource: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        xField: {
          title: 'x轴字段名',
          type: 'string'
        },
        yField: {
          title: 'y轴字段名',
          type: 'number'
        }
      }
    }
  },
  GroupDataSource: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        xField: {
          title: 'x轴字段名',
          type: 'string'
        },
        yField: {
          title: 'y轴字段名',
          type: 'number'
        },
        seriesField: {
          title: '分组字段名',
          type: 'string'
        }
      }
    }
  }
};
