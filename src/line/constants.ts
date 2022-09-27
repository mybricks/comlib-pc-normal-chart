import { ChartConfigProps, ChartProps } from '../utils/constants';

export enum SubTypeEnum {
  Default = 'default',
  More = 'more',
  Step = 'step'
}
export interface Data extends ChartProps {
  config: ChartConfigProps & {
    stepType?: string;
    seriesField?: string;
    smooth?: boolean;
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
    },
    {
      xField: '1993',
      yField: 3
    }
  ],
  more: [
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
      xField: '1993',
      yField: 3,
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
    },
    {
      xField: '1993',
      yField: 4,
      seriesField: 's2'
    }
  ],
  step: [
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
      yField: 3
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
  MoreDataSource: {
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
