import { ChartConfigProps, ChartProps } from '../utils/constants';

export enum TypeEnum {
  Line = 'line',
  Column = 'column'
}

export interface GeometryOptions {
  seriesField?: string;
  geometry?: TypeEnum;
  smooth?: boolean;
  color?: string | string[];
}

export const InputId = {
  GeometryOptions: 'geometryOptions',
  Data0: 'data0',
  Data1: 'data1'
};

export const OutputId = {
  GeometryOptions: 'geometryOptions',
  Data0: 'data0',
  Data1: 'data1'
};

export interface Data extends ChartProps {
  config: ChartConfigProps & {
    geometryOptions?: GeometryOptions[];
    xField: string[];
    yField: string[];
  };
  seriesField?: boolean[];
}

export const MockData: any = [
  [
    {
      year: '1991',
      value: 3,
      count: 10
    },
    {
      year: '1992',
      value: 4,
      count: 4,
      flag: true
    },
    {
      year: '1993',
      value: 3.5,
      count: 5
    },
    {
      year: '1994',
      value: 5,
      count: 5
    },
    {
      year: '1995',
      value: 4.9,
      count: 4.9
    },
    {
      year: '1996',
      value: 6,
      count: 35
    },
    {
      year: '1997',
      value: 7,
      count: 7,
      flag: true
    },
    {
      year: '1998',
      value: 9,
      count: 1
    },
    {
      year: '1999',
      value: 13,
      count: 20
    }
  ],
  [
    {
      year: '1991',
      value: 3,
      count: 10
    },
    {
      year: '1992',
      value: 4,
      count: 4,
      flag: true
    },
    {
      year: '1993',
      value: 3.5,
      count: 5
    },
    {
      year: '1994',
      value: 5,
      count: 5
    },
    {
      year: '1995',
      value: 4.9,
      count: 4.9
    },
    {
      year: '1996',
      value: 6,
      count: 35
    },
    {
      year: '1997',
      value: 7,
      count: 7,
      flag: true
    },
    {
      year: '1998',
      value: 9,
      count: 1
    },
    {
      year: '1999',
      value: 13,
      count: 20
    }
  ]
];

export const transformData = (fieldMap) => {
  // 遍历数据数组
  return MockData.map((series: any[]) => {
    // 遍历每个数据点
    return series.map((item) => {
      // 创建一个新的对象来存储转换后的数据
      let newItem = {};
      // 遍历字段映射对象
      for (let key in fieldMap) {
        // 如果原始数据中有对应的字段，则使用映射后的字段名和值
        if (item.hasOwnProperty(key)) {
          newItem[fieldMap[key]] = item[key];
        }
      }
      return newItem;
    });
  });
};
