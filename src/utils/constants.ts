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

// TODO: 后续可拓展更多图表组件
export const componentNameOptions = [
  {
    label: '画布',
    value: 'plot'
  },
  {
    label: '元素',
    value: 'element'
  },
  {
    label: '图例',
    value: 'legend'
  },
  {
    label: '悬浮提示',
    value: 'tooltip'
  },
  {
    label: '数据标签',
    value: 'label'
  }
];

// TODO: 后续可拓展更多图表事件
export const eventNameOptions = [
  {
    label: '点击',
    value: 'click'
  },
  {
    label: '双击',
    value: 'dblclick'
  },
  {
    label: '右键',
    value: 'contextmenu'
  },
  {
    label: '悬浮',
    value: 'hover'
  },
  {
    label: '显示',
    value: 'show'
  },
  {
    label: '隐藏',
    value: 'hide'
  },
  {
    label: '更新',
    value: 'change'
  }
];

export interface ChartConfigProps {
  yAxis?: any;
  xAxis?: any;
  padding?: any;
  label?: Label;
  legend?: any;
  xField: string;
  yField: string;
  [key: string]: any;
}
export interface ChartProps {
  config: ChartConfigProps;
  events: {
    title: string;
    id: string;
    componentName: string;
    eventName: string;
  }[];
  [key: string]: any;
}

export const dataSchema = {
  title: '数据',
  type: 'array',
  items: {
    type: 'object',
    properties: {
      xField: {
        title: 'x轴字段名',
        type: 'string'
      },
      yField: {
        title: 'y轴字段名',
        type: 'number'
      }
    }
  }
};

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
              }
            }
          },

          content: {
            type: 'object',
            properties: {
              content: {
                type: 'string'
              }
            }
          }
        }
      },

      /** 图形样式 */
      style: {
        type: 'object',

        properties: {
          fill: {
            type: 'string'
          },

          stroke: {
            type: 'string'
          },

          lineWidth: {
            type: 'number'
          },

          radius: {
            type: 'number'
          },

          shadowColor: {
            type: 'string'
          },

          shadowBlur: {
            type: 'number'
          }
        }
      },

      /** label文字样式 */
      label: {
        type: 'object',

        properties: {
          fill: {
            type: 'string'
          },

          fontSize: {
            type: 'number'
          },

          fontWeight: {
            type: 'number'
          }
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
      }
    }
  };
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
      },
      grid: {
        type: 'object',
        desc: '坐标轴网格线的配置项，null 表示不展示。',
        properties: {
          line: {
            type: 'object'
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
      itemWidth: {
        type: 'number',
        desc: '图例项的宽度, 默认为 null，自动计算，设置具体值后溢出省略，hover展示tooltip提示'
      },
      itemHeight: {
        type: 'number',
        desc: '图例项的高度, 默认为 null，自动计算'
      },
      itemName: {
        type: 'object',
        properties: {
          style: {
            type: 'any'
          },
          spacing: {
            type: 'number'
          },
          // (text: string, item: ListItem, index: number) => any;
          formatter: {
            type: 'any'
          }
        }
      },
      itemValue: {
        type: 'object',
        properties: {
          style: {
            type: 'any'
          },
          spacing: {
            type: 'number'
          },
          // (text: string, item: ListItem, index: number) => any;
          formatter: {
            type: 'any'
          }
        }
      }
    }
  };
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
  const edgeSchema = {
    type: 'object',

    properties: {
      /** 线条类型 */
      type: {
        type: 'string',
        enum: ['line', 'polyline', 'cubic-horizontal'],
        default: 'polyline'
      },

      /** 线条样式 */
      style: {
        type: 'object',

        properties: {
          stroke: {
            type: 'string',
            default: '#d9d9d9'
          },

          lineWidth: {
            type: 'number',
            default: 1
          },

          lineDash: {
            type: 'array'
          },

          opacity: {
            type: 'number',
            default: 1
          }
        }
      },

      /** 线条文字 */
      label: {
        type: 'object',

        properties: {
          show: {
            type: 'boolean',
            default: true
          },

          field: {
            type: 'string',
            default: 'relation'
          },

          fontSize: {
            type: 'number',
            default: 12
          },

          color: {
            type: 'string',
            default: '#666'
          },

          background: {
            type: 'string',
            default: '#fff'
          }
        }
      }
    }
  };
  const expandSchema = {
    type: 'object',

    properties: {
      enable: {
        type: 'boolean',
        default: true
      },

      defaultExpandLevel: {
        type: 'number',
        default: 2
      },

      position: {
        type: 'string',
        enum: ['left', 'right', 'bottom'],
        default: 'right'
      },

      showCount: {
        type: 'boolean',
        default: false
      },
    }
  };
  const customSchema =  {
  "description": "自定义配置 ",
  "type": "object",
  "properties": {
    "nodeCfg": {
      "type": "object",
      "description": "节点配置",
      "properties": {}
    },
    "edgeCfg": {
      "type": "object",
      "description": "边配置",
      "properties": {}
    },
    "layout": {
      "type": "object",
      "description": "布局配置",
      "properties": {}
    },
    "autoFit": {
      "type": "boolean",
      "description": "是否自动适应画布大小"
    },
    "fitCenter": {
      "type": "boolean",
      "description": "是否将图适配到画布中心"
    },
    "fitView": {
      "type": "boolean",
      "description": "是否将图适配到画布大小"
    },
    "animate": {
      "type": "boolean",
      "description": "是否开启动画"
    },
    "animateCfg": {
      "type": "object",
      "description": "动画配置",
      "properties": {}
    },
    "behaviors": {
      "type": "array",
      "description": "交互行为配置",
      "items": {}
    },
  }
}
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
        { id: 'loading', title: '设置加载态', schema: { type: 'boolean' } },
        { id: 'edge', title: '设置线条', schema: edgeSchema },
        { id: 'expand', title: '设置展开/收齐', schema: expandSchema },
        {id:"custom", title: "设置自定义配置", schema: customSchema}
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

export const elementClickSchema = {
  type: 'object',
  properties: {
    data: {
      type: 'object'
    },
    element: {
      type: 'object',
      properties: {
        states: {
          type: 'array',
          items: {
            type: 'enum',
            items: [
              {
                type: 'string',
                value: 'active'
              },
              {
                type: 'string',
                value: 'selected'
              },
              {
                type: 'string',
                value: 'inactive'
              }
            ]
          }
        }
      }
    }
  }
};
