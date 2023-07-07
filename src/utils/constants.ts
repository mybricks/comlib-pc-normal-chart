import { Data } from "./const";

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


export const reRender = (data: Data) => (data.config = { ...data.config });