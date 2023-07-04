import { ChartType, Data } from './const';

export enum AxisPositionEnum {
  Start = 'start',
  Center = 'center',
  End = 'end'
}

export enum LegendPositionEnum {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',

  TopLeft = 'top-left',
  TopRight = 'top-right',

  BottomLeft = 'bottom-left',
  BottomRight = 'bottom-right'
}

interface AxisProps {
  title: {
    text?: string;
    position?: AxisPositionEnum;
  };
}
interface LegendProps {
  position?: LegendPositionEnum;
  offsetX?: number;
  offsetY?: number;
}

export interface ChartConfigProps {
  yAxis?: AxisProps;
  xAxis?: AxisProps;
  padding?: string | number[];
  legend?: LegendProps | boolean;
}
export interface ChartProps {
  config: ChartConfigProps;
  useEmpty?: boolean;
  emptyText?: string;
}

export const initInput = (type: string) => {
  switch (type) {
    default:
      return [
        {
          id: 'style',
          title: '设置图形样式',
        },
        { id: 'axis', title: '设置横轴' },
        { id: 'yaxis', title: '设置纵轴' },
        { id: 'label', title: '设置label' },
        { id: 'tooltip', title: '设置提示信息' },
        { id: 'legend', title: '设置图例' },
        { id: 'loading', title: '设置加载态', schema: { type: 'boolean' } },
      ];
  }
};

export const initEvents = ({ data, input, output }) => {
  if (data.type === ChartType.OrganizationGraph) {
    output.add('nodeClick', '节点点击', { type: 'any' });
  }
}

export const schemaDiff = (data: Data) => {
  return {
    title: '输入数据',
    type: 'array',
    items:{
    type: 'object',
      properties: {
        [data.config.xField]: {
          title: 'x轴字段名',
          type: 'string'
        },
        [data.config.yField]: {
          title: 'y轴字段名',
          type: 'number'
        },
        [data.config.seriesField]: {
          title: '分组字段名',
          type: 'string'
        }
      }
    }
  }
}

export const reRender = (data) => (data.config = { ...data.config });

export const inputIdMap = {
  DATA: 'data', // 数据源
  CONFIG: 'config', // 图表配置
  X_FIELD: 'xField', // x轴配置
  Y_FIELD: 'yField', // y轴配置
  COLOR_FIELD: 'colorField', // 维度字段名
  ANGLE_FIELD: 'angleField', // 数据字段名
  SERIES_FIELD: 'seriesField', // 分组字段名
  LEGEND: 'legend',
  LEGEND_SELECTED: 'legend.selected',
  LEGEND_POSITION: 'legend.position',
  SMOOTH: 'smooth', // 是否平滑
  // TOOLTIP_FORMATTER: 'tooltip.formatter',
  LABEL: 'label', // 数据标签
  TOOLTIP: 'tooltip' // 悬浮提示
}