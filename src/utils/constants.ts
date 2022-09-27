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
