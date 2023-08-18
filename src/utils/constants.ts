import { Data } from "./const";
import { Label } from '@antv/g2plot/lib/types/label';

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

export interface Axis {
  position: 'start' | 'center' | 'end',
  title: string | Object,
  value: string | Object
}

export interface ChartConfigProps {
  yAxis?: any;
  xAxis?: any;
  padding?: any;
  label?: Label;
  legend?: any;
  xField: string;
  yField: string;
}
export interface ChartProps {
  config: ChartConfigProps;
  [key: string]: any;
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