import { initInput, initEvents, reRender } from '../utils/constants';
import { Data } from '../utils/const';

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
    (cate0.items = [
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
    ]),
      (cate1.title = '图表配置'),
      (cate1.items = [
        {
          title: '贴图样式',
          type: 'select',
          options: [
            { label: '基础', value: '' },
            { label: '点状', value: 'dot' },
            { label: '线状', value: 'line' },
            { label: '块状', value: 'square' }
          ],
          value: {
            get({ data }: EditorResult<Data>) {
              return data.config.pattern.type;
            },
            set({ data }: EditorResult<Data>, value: '' | 'dot' | 'line' | 'square') {
              data.config.pattern.type = value;
              reRender(data);
            }
          }
        },
        {
          title: '颜色配置',
          type: 'colorPicker',
          value: {
            get({ data }: EditorResult<Data>) {
              return data.config.color;
            },
            set({ data }: EditorResult<Data>, value: string) {
              data.config.color = value;
            }
          }
        }
      ]);
  }
};