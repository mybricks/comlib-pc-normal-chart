import { initInput, initEvents, setSchema } from '../utils/constants';
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
    cate0.items = [
      {
        title: '类型',
        type: 'Select',
        options: [
          { label: '基础饼图', value: 'default' },
          { label: '环状饼图', value: 'circel' }
        ],
        value: {
          get({ data }: EditorResult<Data>) {
            return data.subType;
          },
          set({ data }: EditorResult<Data>, value: string) {
            data.subType = value;
            if (value === 'circel') {
              data.config.innerRadius =
                data.config.innerRadius === void 0 ? 0.6 : data.config.innerRadius;
            } else {
              data.config.innerRadius = void 0;
            }
          }
        }
      },
      {
        title: '数据映射',
        items: [
          {
            title: '数据字段名',
            type: 'Text',
            description: '扇形切片大小（弧度）所对应的数据字段名。',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.angleField;
              },
              set({ data, input }: EditorResult<Data>, value: string) {
                data.config.angleField = value;
                setSchema(data, input);
              }
            }
          },
          {
            title: '分类字段名',
            type: 'text',
            description: '扇形颜色映射对应的数据字段名',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.colorField;
              },
              set({ data, input }: EditorResult<Data>, value: string) {
                data.config.colorField = value;
                setSchema(data, input);
              }
            }
          },
          {
            title: '外半径',
            type: 'text',
            ifVisible({ data }) {
              return data.subType === 'circel';
            },
            description: '饼图的内半径，原点为画布中心。配置值域为 (0,1]。',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.radius || 1;
              },
              set({ data }: EditorResult<Data>, value: string) {
                data.config.radius = value;
              }
            }
          },
          {
            title: '内半径',
            type: 'text',
            ifVisible({ data }) {
              return data.subType === 'circel';
            },
            description: '饼图的内半径，原点为画布中心。配置值域为 (0,1]。',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.config.innerRadius || 0.6;
              },
              set({ data }: EditorResult<Data>, value: string) {
                data.config.innerRadius = Number(value);
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
    ];
  }
};