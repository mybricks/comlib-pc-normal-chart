import { ChartConfigProps, ChartProps } from '../utils/constants';

export enum TypeEnum {
  Line = 'line',
  Column = 'column'
}

export interface GeometryOptions {
  seriesField?: string;
  geometry?: TypeEnum;
  smooth?: boolean;
}

export interface Data extends ChartProps {
  config: ChartConfigProps & {
    geometryOptions?: GeometryOptions[];
  };
  seriesField?: boolean[];
}

export const InputIds = {
  SetLeftData: 'data0',
  SetRightData: 'data1'
};

export const MockData = {
  default: [
    [
      {
        xField: '2019-03',
        yField0: 220
      },
      {
        xField: '2019-04',
        yField0: 300
      },
      {
        xField: '2019-05',
        yField0: 250
      }
    ],
    [
      {
        xField: '2019-03',
        yField1: 900
      },
      {
        xField: '2019-04',
        yField1: 600
      },
      {
        xField: '2019-05',
        yField1: 450
      }
    ]
  ],
  more: [
    [
      {
        xField: '2019-03',
        yField0: 350,
        seriesField: 'uv'
      },
      {
        xField: '2019-04',
        yField0: 900,
        seriesField: 'uv'
      },
      {
        xField: '2019-05',
        yField0: 300,
        seriesField: 'uv'
      },
      {
        xField: '2019-03',
        yField0: 220,
        seriesField: 'bill'
      },
      {
        xField: '2019-04',
        yField0: 300,
        seriesField: 'bill'
      },
      {
        xField: '2019-05',
        yField0: 250,
        seriesField: 'bill'
      }
    ],
    [
      {
        xField: '2019-03',
        yField1: 800,
        seriesField: 'a'
      },
      {
        xField: '2019-04',
        yField1: 600,
        seriesField: 'a'
      },
      {
        xField: '2019-05',
        yField1: 400,
        seriesField: 'a'
      },
      {
        xField: '2019-03',
        yField1: 750,
        seriesField: 'b'
      },
      {
        xField: '2019-04',
        yField1: 650,
        seriesField: 'b'
      },
      {
        xField: '2019-05',
        yField1: 450,
        seriesField: 'b'
      }
    ]
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
        yField0: {
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
        yField0: {
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
