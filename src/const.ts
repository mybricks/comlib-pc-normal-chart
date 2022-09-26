import { Annotation } from '@antv/g2plot';

export const colors10 = [
  '#5B8FF9',
  '#5AD8A6',
  '#5D7092',
  '#F6BD16',
  '#6F5EF9',
  '#6DC8EC',
  '#945FB9',
  '#FF9845',
  '#1E9493',
  '#FF99C3',
];

export const colors20 = [
  '#5B8FF9',
  '#CDDDFD',
  '#5AD8A6',
  '#CDF3E4',
  '#5D7092',
  '#CED4DE',
  '#F6BD16',
  '#FCEBB9',
  '#6F5EF9',
  '#D3CEFD',
  '#6DC8EC',
  '#D3EEF9',
  '#945FB9',
  '#DECFEA',
  '#FF9845',
  '#FFE0C7',
  '#1E9493',
  '#BBDEDE',
  '#FF99C3',
  '#FFE0ED',
];

export enum ChartType {
  'Area' = 'Area',
  'Bar' = 'Bar',
  'Line' = 'Line',
  'Pie' = 'Pie',
  'Column' = 'Column',
  'Liquid' = 'Liquid',
  'Radar' = 'Radar',
  'Funnel' = 'Funnel',
  'BidirectionalBar' = 'BidirectionalBar',
  'Heatmap' = 'Heatmap',
  'TinyColumn' = 'TinyColumn',
  'TinyArea' = 'TinyArea',
  'RingProgress' = 'RingProgress',
  'DualAxes' = 'DualAxes',
  'OrganizationGraph' = 'OrganizationGraph'
}

/**
 * @param label 标注的名称
 * @param yFieldIndex 图表为双轴图时，标注的y轴字段索引
 * @param positionField 文本/数据点动态设置坐标的字段
 * @param textColor 文本颜色
 * @param mainColor 标注的主体颜色, 如辅助线的线段颜色
 * @param useDash 辅助线标注是否使用虚线
 * @param autoRotate 文本是否自动旋转
 */
export declare type AnnotationItem = {
  label?: string;
  yFieldIndex?: 0 | 1;
  positionField?: string;
  textColor?: string;
  mainColor?: string;
  useDash?: boolean;
  autoRotate?: boolean;
} & Annotation;

export const InputIds = {
  DataSource: 'data',
}
export interface Data {
  [key: string]: any;
}
