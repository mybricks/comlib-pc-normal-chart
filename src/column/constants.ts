import { ChartConfigProps, ChartProps } from '../utils/constants';

export enum SubTypeEnum {
  Default = 'default',
  Stack = 'stack',
  Group = 'group'
}
export interface Data extends ChartProps {
  config: ChartConfigProps & {
    isStack?: boolean;
    isGroup?: boolean;
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
      xField: '1991',
      yField: 3
    },
    {
      xField: '1992',
      yField: 4
    }
  ],
  stack: [
    {
      xField: '1991',
      yField: 3,
      seriesField: 's1'
    },
    {
      xField: '1992',
      yField: 4,
      seriesField: 's1'
    },
    {
      xField: '1991',
      yField: 4,
      seriesField: 's2'
    },
    {
      xField: '1992',
      yField: 5,
      seriesField: 's2'
    }
  ],
  group: [
    {
      xField: '1991',
      yField: 3,
      seriesField: 's1'
    },
    {
      xField: '1992',
      yField: 4,
      seriesField: 's1'
    },
    {
      xField: '1991',
      yField: 4,
      seriesField: 's2'
    },
    {
      xField: '1992',
      yField: 5,
      seriesField: 's2'
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
