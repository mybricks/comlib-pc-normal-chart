import { ChartType, Data } from '../const';

import { dataMapEditor, chartConfigEditor, normalEditor } from '../editor';
import { initInput } from './inputs';
import { initEvents } from './outputs';

const setDataSchema = ({ data, input, inputId }) => {
  const schema = getDataSourceSchema(data.type);
  input.get(inputId)?.setSchema(schema);
};
const getDataSourceSchema = (type) => {
  switch (type) {
    case ChartType.OrganizationGraph:
      return {
        type: 'object',
        properties: {
          id: { type: 'string' },
          value: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              title: { type: 'string' },
            },
          },
          children: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                value: {
                  type: 'object',
                  properties: {
                    name: { type: 'string' },
                    title: { type: 'string' },
                  },
                },
                children: { type: 'array' },
              },
            },
          },
        },
      };
    default:
      return {
        type: 'array',
      };
  }
};

const getStyleSchema = (type) => {
  switch (type) {
    case ChartType.OrganizationGraph:
      return {
        type: 'object',
        properties: {
          nodeCfg: {
            type: 'object',
            properties: {
              style: {
                type: 'object',
                properties: {
                  stroke: { type: 'string' },
                },
              },
              label: {
                type: 'object',
                properties: {
                  stroke: { type: 'string' },
                  fill: { type: 'string' },
                },
              },
              padding: { type: 'number' }
            }
          },
          behaviors: {
            type: 'array',
            items: {
              type: 'string'
            }
          }
        },
      };
    default:
      return {
        type: 'object',
        properties: {}
      }
  }
};
const setStyleSchema = ({ data, input, inputId}) => {
  const schema = getStyleSchema(data.type);
  input.get(inputId)?.setSchema(schema);
}

const useSpecialConfig = (data: any, cate: any) => {
  if (ChartType.OrganizationGraph === data.type) {
    cate.title = '常规',
    cate.items = [
      {
        title: '事件',
        items: [
          {
            title: '点击节点',
            type: '_event',
            options: {
              outputId: 'nodeClick'
            }
          }
        ]
      },
    ]
    return true;
  }
  return false;
}

export default {
  '@init'({ style, input, output, data }) {
    style.height = 400;
    style.width = '100%';
    initInput(data).forEach(({ id, title, schema = { type: 'any' } }) => {
      if (!input.get(id)) {
        input.add(id, title, schema);
      }
    });
    initEvents({ data, input, output });
  },
  '@inputConnected'({ data, input }) {
    setDataSchema({ data, input, inputId: 'data' });
    setStyleSchema({ data, input, inputId: 'style' });
  },
  '@resize': {
    options: ['height', 'width'],
  },
  ':root': (
    { data, input }: EditorResult<any>,
    cate0: any,
    cate1: any
  ) => {
    initInput(data).forEach(({ id, title, schema = { type: 'any' } }) => {
      if (!input.get(id)) {
        input.add(id, title, schema);
      }
    });

    if (useSpecialConfig(data, cate0)) return;

    cate0.title = '常规';
    cate0.items = [
      ...normalEditor(data),
      {
        title: '数据映射',
        items: dataMapEditor(data),
      },
      {
        title: '图例',
        items: [
          {
            title: '图例',
            type: 'Switch',
            value: {
              get({ data }: EditorResult<Data>) {
                if (typeof data.config.legend === 'boolean') {
                  return data.config.legend;
                } else {
                  return true;
                }
              },
              set({ data }: EditorResult<Data>, value: boolean) {
                if (!value) {
                  data.config.legend = false;
                } else {
                  data.config.legend = { position: 'right' };
                }
              },
            },
          },
          {
            title: '位置',
            type: 'Select',
            options: [
              { label: '左上', value: 'top-left' },
              { label: '顶部', value: 'top' },
              { label: '右上', value: 'top-right' },
              { label: '底部', value: 'bottom' },
              { label: '左下', value: 'bottom-left' },
              { label: '左侧', value: 'left' },
              { label: '右下', value: 'bottom-right' },
              { label: '右侧', value: 'right' },
            ],
            ifVisible({ data }: EditorResult<Data>) {
              return !!data.config.legend;
            },
            value: {
              get({ data }: EditorResult<Data>) {
                if (typeof data.config.legend === 'boolean') {
                  return data.config.legend;
                }

                return data.config.legend?.position;
              },
              set({ data }: EditorResult<Data>, value: any) {
                if (typeof data.config.legend !== 'boolean') {
                  data.config.legend.position = value;
                  data.config.legend = { ...data.config.legend };
                }
              },
            },
          },
          {
            title: 'x轴方向偏移',
            type: 'text',
            ifVisible({ data }: EditorResult<Data>) {
              return !!data.config.legend;
            },
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.legend.offsetX;
              },
              set({ data }: EditorResult<Data>, value: string) {
                data.config.legend.offsetX = Number(value);
                data.config.legend = { ...data.config.legend };
              },
            },
          },
          {
            title: 'y轴方向偏移',
            type: 'text',
            ifVisible({ data }: EditorResult<Data>) {
              return !!data.config.legend;
            },
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.legend.offsetY;
              },
              set({ data }: EditorResult<Data>, value: string) {
                data.config.legend.offsetY = Number(value);
                data.config.legend = { ...data.config.legend };
              },
            },
          },
        ],
      },
      {
        title: '内间距',
        type: 'inputNumber',
        description: '默认自动计算, 当边界存在遮挡时可手动设置内边距',
        options: [
          { title: '上' },
          { title: '右' },
          { title: '下' },
          { title: '左' },
        ],
        value: {
          get({ data }: EditorResult<Data>) {
            if (!data.config.padding) {
              data.config.padding = 'auto';
            }
            return data.config.padding;
          },
          set({ data }: EditorResult<Data>, value: number[]) {
            data.config = {
              ...data.config,
              padding: value,
            };
          },
        },
      },
    ];

    cate1.title = '图表配置';
    cate1.items = chartConfigEditor(data);
  },
};
