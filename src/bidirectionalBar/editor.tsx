import { initInput, Data, schemaBidirectionalBar } from '../utils';

export default {
  '@init'({ style, input, data }) {
    style.height = 400;
    style.width = '100%';
    initInput(data).forEach(({ id, title, schema = { type: 'any' } }) => {
      if (!input.get(id)) {
        input.add(id, title, schema);
      }
    });
  },
  '@resize': {
    options: ['height', 'width']
  },
  ':root': ({ data, input }: EditorResult<any>, cate0: any, cate1: any) => {
    initInput(data).forEach(({ id, title, schema = { type: 'any' } }) => {
      if (!input.get(id)) {
        input.add(id, title, schema);
      }
    });

    cate0.title = '常规';
    cate0.items = [
      {
        title: '类型',
        type: 'Select',
        options: [
          { label: '水平对称条形图', value: 'horizontal' },
          { label: '垂直对称条形图', value: 'vertical' }
        ],
        value: {
          get({ data }: EditorResult<Data>) {
            return data.config.layout;
          },
          set({ data }: EditorResult<Data>, value: string) {
            data.config.layout = value;
          }
        }
      },
      {
        title: '数据映射',
        items: [
          {
            title: 'x横轴字段名',
            type: 'Text',
            description: '横轴映射对应的数据字段名',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.xField || 'xField0';
              },
              set({ data, input }: EditorResult<Data>, value: string) {
                data.config.xField = value;
                setSchema(data, input);
              }
            }
          },
          {
            title: 'y纵轴字段名',
            type: 'Text',
            description: '纵轴映射对应的数据字段名',
            value: {
              get({ data }: EditorResult<Data>) {
                if (Array.isArray(data.config.yField)) return data.config.yField.join(',');
                return data.config.yField || 'value';
              },
              set({ data, input }: EditorResult<Data>, value: string) {
                if (Array.isArray(data.config.yField)) {
                  data.config.yField = value.split(',').map((v) => v.trim());
                } else {
                  data.config.yField = value;
                }
                setSchema(data, input);
              }
            }
          }
        ]
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
              }
            }
          },
          {
            title: '单击图例复制名称',
            type: 'Switch',
            ifVisible({ data }: EditorResult<Data>) {
              return !!data.config.legend;
            },
            value: {
              get({ data }: EditorResult<Data>) {
                return data.copyLegendTextonClick;
              },
              set({ data }: EditorResult<Data>, value: boolean) {
                data.copyLegendTextOnClick = value;
              }
            }
          },
          {
            title: '位置',
            type: 'Select',
            ifVisible({ data }: EditorResult<Data>) {
              return !!data.config.legend;
            },
            options: [
              { label: '左上', value: 'top-left' },
              { label: '顶部', value: 'top' },
              { label: '右上', value: 'top-right' },
              { label: '底部', value: 'bottom' },
              { label: '左下', value: 'bottom-left' },
              { label: '左侧', value: 'left' },
              { label: '右下', value: 'bottom-right' },
              { label: '右侧', value: 'right' }
            ],
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
              }
            }
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
              }
            }
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
              }
            }
          }
        ]
      },
      {
        title: '自动内间距',
        type: 'switch',
        value: {
          get({ data }: EditorResult<Data>) {
            return data.config.padding === 'auto';
          },
          set({ data }: EditorResult<Data>, value: boolean) {
            data.config = {
              ...data.config,
              padding: value ? 'auto' : [0, 0, 0, 0]
            };
          }
        }
      },
      {
        title: '内间距',
        type: 'inputNumber',
        description: '默认自动计算, 当边界存在遮挡时可手动设置内边距',
        options: [{ title: '上' }, { title: '右' }, { title: '下' }, { title: '左' }],
        ifVisible({ data }: EditorResult<Data>) {
          return data.config.padding !== 'auto';
        },
        value: {
          get({ data }: EditorResult<Data>) {
            return data.config.padding;
          },
          set({ data }: EditorResult<Data>, value: number[]) {
            data.config = {
              ...data.config,
              padding: value
            };
          }
        }
      }
    ];
  }
};

const setSchema = (data: Data, input: any) => {
  input.get('data').setSchema(schemaBidirectionalBar(data));
};
