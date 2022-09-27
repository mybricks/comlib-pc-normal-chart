import { Data } from '../constants';

const BaseEditor = [
  {
    title: '内环半径',
    type: 'Text',
    options: {
      type: 'Number',
      max: 1,
      min: 0,
      step: 0.1
    },
    value: {
      get({ data }: EditorResult<Data>) {
        return data.config.innerRadius;
      },
      set({ data }: EditorResult<Data>, value: number) {
        data.config.innerRadius = Number(value) || 0;
      }
    }
  },
  {
    title: '区域配置',
    items: [
      {
        title: '有效区域颜色',
        type: 'colorPicker',
        value: {
          get({ data }: EditorResult<Data>) {
            return data.config.color[0];
          },
          set({ data }: EditorResult<Data>, value: string) {
            data.config.color[0] = value;
          }
        }
      },
      {
        title: '无效区域颜色',
        type: 'colorPicker',
        value: {
          get({ data }: EditorResult<Data>) {
            return data.config.color[1];
          },
          set({ data }: EditorResult<Data>, value: string) {
            data.config.color[1] = value;
          }
        }
      },
      {
        title: '静态内容配置',
        items: [
          {
            title: '标题',
            type: 'Text',
            options: {
              placeholder: '标题'
            },
            value: {
              get({ data }: EditorResult<Data>) {
                if (typeof data.config.statistic?.title === 'boolean') {
                  return undefined;
                }
                return data.config.statistic?.title?.content;
              },
              set({ data }: EditorResult<Data>, value: string) {
                if (value) {
                  data.config.statistic.title = { content: value };
                } else {
                  data.config.statistic.title = false;
                }
              }
            }
          },
          {
            title: '显示百分比',
            type: 'Switch',
            value: {
              get({ data }: EditorResult<Data>) {
                return !!data.config.statistic.content;
              },
              set({ data }: EditorResult<Data>, value: boolean) {
                data.config.statistic.content = value;
              }
            }
          }
        ]
      }
    ]
  }
];
export default BaseEditor;
