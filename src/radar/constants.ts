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

export const MockData = {
  default: [
    {
      xField: 'G2',
      yField: 1
    },
    {
      xField: 'G6',
      yField: 2
    },
    {
      xField: 'F2',
      yField: 3
    },
    {
      xField: 'L7',
      yField: 4
    },
    {
      xField: 'X6',
      yField: 5
    }
  ],
  group: [
    {
      xField: 'G2',
      yField: 1,
      seriesField: '类型1'
    },
    {
      xField: 'G6',
      yField: 2,
      seriesField: '类型1'
    },
    {
      xField: 'F2',
      yField: 3,
      seriesField: '类型1'
    },
    {
      xField: 'L7',
      yField: 4,
      seriesField: '类型1'
    },
    {
      xField: 'X6',
      yField: 5,
      seriesField: '类型1'
    },
    {
      xField: 'G2',
      yField: 5,
      seriesField: '类型2'
    },
    {
      xField: 'G6',
      yField: 4,
      seriesField: '类型2'
    },
    {
      xField: 'F2',
      yField: 3,
      seriesField: '类型2'
    },
    {
      xField: 'L7',
      yField: 2,
      seriesField: '类型2'
    },
    {
      xField: 'X6',
      yField: 1,
      seriesField: '类型2'
    }
  ]
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
