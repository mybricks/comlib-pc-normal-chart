import { Data } from './const';
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
  position: 'start' | 'center' | 'end';
  title: string | Object;
  value: string | Object;
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
  const styleSchema = {
    type: 'object',
    properties: {
      /** 统计数据 */
      statistic: {
        type: 'object',
        properties: {
          title: {
            type: 'object',
            properties: {
              content: {
                type: 'string'
              },
            }
          },
          content: {
            type: 'object',
            properties: {
              content: {
                type: 'string'
              },
            }
          },
        }
      },
      /** 交互配置 */
      interactions: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            type: {
              type: 'string'
            }
          }
        }
      },
    }
  }
  const labelSchema = {
    type: 'object',
    properties: {
      formatter: {
        type: 'any'
      },
      style: {
        type: 'object',
        properties: {
          fontSize: {
            type: 'number'
          },
          fill: {
            type: 'string'
          }
        }
      }
    }
  };
  const axisSchema = {
    type: 'object',
    properties: {
      title: {
        type: 'object',
        properties: {
          style: {
            type: 'object',
            properties: {
              fontSize: {
                type: 'number'
              },
              fill: {
                type: 'string'
              }
            }
          }
        }
      },
      label: {
        type: 'object',
        properties: {
          autoRotate: {
            type: 'boolean'
          },
          style: {
            type: 'object',
            properties: {
              fontSize: {
                type: 'number'
              },
              fill: {
                type: 'string'
              }
            }
          }
        }
      }
    }
  };
  const legendSchema = {
    type: 'object',
    properties: {
      title: {
        type: 'object',
        properties: {
          text: {
            type: 'string'
          },
          fill: {
            type: 'string'
          }
        }
      },
      itemName: {
        type: 'object',
        properties: {
          style: {
            type: 'any'
          }
        }
      },
      itemValue: {
        type: 'object',
        properties: {
          style: {
            type: 'any'
          }
        }
      },
    }
  }
  const tooltipSchema = {
    type: 'object',
    properties: {
      fields: {
        type: 'array',
        items: {
          type: 'string'
        }
      },
      title: {
        type: 'string'
      },
      showTitle: {
        type: 'boolean'
      },
      formatter: {
        type: 'any'
      },
      domStyles: {
        type: 'object'
      }
    }
  };
  switch (type) {
    default:
      return [
        {
          id: 'style',
          title: '设置图形样式',
          schema: styleSchema
        },
        { id: 'axis', title: '设置横轴', schema: axisSchema },
        { id: 'yaxis', title: '设置纵轴', schema: axisSchema },
        { id: 'label', title: '设置label', schema: labelSchema },
        { id: 'tooltip', title: '设置提示信息', schema: tooltipSchema },
        { id: 'legend', title: '设置图例', schema: legendSchema },
        { id: 'loading', title: '设置加载态', schema: { type: 'boolean' } }
      ];
  }
};

export const reRender = (data: Data) => (data.config = { ...data.config });

/**
 *
 * @param arr 原数据
 * @param Field 新key 按 x,y,分类
 * @param defaultKey 原数据key 按 x,y,分类
 * @returns
 */
export const changeMockDataField = (
  arr: Array<Record<string, any>>,
  Field: { xField: string; yField: string; seriesField?: string },
  defaultKey?: { x?: string; y?: string; category?: string }
): Array<Record<string, any>> => {
  const { xField, yField, seriesField } = Field;
  const { x = 'year', y = 'value', category = 'category' } = defaultKey || {};

  return arr.map((item) => ({
    [xField]: item[x],
    [yField]: item[y],
    [seriesField]: item?.[category]
  }));
};
