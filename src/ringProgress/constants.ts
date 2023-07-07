/**
 * 数据源
 * @param percent 百分比
 * @param color 颜色数组
 * @param innerRadius 内环半径
 * @param radius 外环半径
 * @param statistic 内容
 */
export interface Data {
  percent: number;
  color: [string, string];
  innerRadius: number;
  radius: number;
  statistic: {
      title: {
          content: string;
          [key: string]: any;
      };
      content: boolean;
  }
}

export const MockData: any = {
    percent: 0.6,
    color: [
      '#58f',
      '#ddd'
    ],
    innerRadius: 0.8,
    radius: 1,
}