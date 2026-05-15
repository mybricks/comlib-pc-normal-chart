import { addMultipleInitInputOutputsAndRels, addOutputAndRel, InputIds, OutputIds } from '../utils';
import { Data } from './constants';

const customSchema = {
  "description": "自定义配置 ",
  "type": "object",
  "properties": {
    "nodeCfg": {
      "type": "object",
      "description": "节点配置",
      "properties": { }
    },
    "edgeCfg": {
      "type": "object",
      "description": "边配置",
      "properties": { }
    },
    "layout": {
      "type": "object",
      "description": "布局配置",
      "properties": { }
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
      "properties": {
       
      }
    },
    "behaviors": {
      "type": "array",
      "description": "交互行为配置",
      "items": {
        
      }
    },
  }
}

export default function ({ data, input, output }: UpgradeParams<Data>): boolean {
  if (!data.tempAnnotations) {
    data.tempAnnotations = [];
  }
  if (!data.config.padding) {
    data.config.padding = 'auto';
  }
  if (!data.useEmpty) {
    data.useEmpty = true;
  }
  if (!data.emptyText) {
    data.emptyText = '暂无数据';
  }

  addOutputAndRel({
    input,
    output,
    outputKey: OutputIds.DataSource,
    title: '完成',
    inputKey: InputIds.DataSource
  });

  if (!input.get(InputIds.ExpandConfig)) {
    input.add({
      id: InputIds.ExpandConfig,
      title: '组织图展开/收齐配置',
      schema: {
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
            default: true
          },

          trigger: {
            type: 'string',
            enum: ['click', 'hover'],
            default: 'click'
          }
        }
      }
    });
  }

  if (!input.get(InputIds.EdgeConfig)) {
    input.add({
      id: InputIds.EdgeConfig,
      title: '线条配置',
      schema: {
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
      }
    });
  }

  if (!input.get(InputIds.CustomConfig)) {
    input.add({
      id: InputIds.CustomConfig,
      title: '自定义图标配置',
      schema: customSchema,
    });  }

  addMultipleInitInputOutputsAndRels(input, output);

  return true;
}
