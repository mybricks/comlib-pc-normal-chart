import { ChartConfigProps, ChartProps } from '../utils/constants';

export interface Data extends ChartProps {
  config: ChartConfigProps & {
    isStack?: boolean;
    isGroup?: boolean;
    seriesField?: string;
    xField: [string, string];
    yField: [string, string];
  };
}

export const MockData: any = [
  {
    xField: '乌拉圭',
    yField0: 13.4,
    yField1: 12.3
  },
  {
    xField: '巴拉圭',
    yField0: 14.4,
    yField1: 6.3
  },
  {
    xField: '南非',
    yField0: 18.4,
    yField1: 8.3
  },
  {
    xField: '巴基斯坦',
    yField0: 34.4,
    yField1: 13.8
  },
  {
    xField: '阿根廷',
    yField0: 44.4,
    yField1: 19.5
  },
  {
    xField: '巴西',
    yField0: 24.4,
    yField1: 18.8
  },
  {
    xField: '加拿大',
    yField0: 54.4,
    yField1: 24.7
  },
  {
    xField: '中国',
    yField0: 104.4,
    yField1: 5.3
  },
  {
    xField: '美国',
    yField0: 165.2,
    yField1: 72.9
  }
];

export const transformData = (fieldMap) => {
  // 遍历数据数组
  return MockData.map((item: any) => {
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
};
