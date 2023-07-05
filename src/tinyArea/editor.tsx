import { Data } from '../utils/const';

export default {
  '@init'({ style }) {
    style.height = 200;
    style.width = 300;
  },
  '@resize': {
    options: ['height', 'width']
  },
  ':root'({}, cate0: any) {
    cate0.title = '迷你面积图';
    cate0.items = [
      {
        title: '平滑',
        type: 'switch',
        value: {
          get({ data }: EditorResult<Data>) {
            return data.smooth;
          },
          set({ data }: EditorResult<Data>, value: boolean) {
            data.smooth = value;
          }
        }
      },
      {
        title: '区域配置',
        items: [
          {
            title: '填充颜色',
            type: 'colorPicker',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.areaStyle.fill;
              },
              set({ data }: EditorResult<Data>, value: string) {
                data.areaStyle = {
                  ...data.areaStyle,
                  fill: value
                };
              }
            }
          }
        ]
      },
      {
        title: '折线配置',
        items: [
          {
            title: '填充颜色',
            type: 'colorPicker',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.line.color;
              },
              set({ data }: EditorResult<Data>, value: string) {
                data.line = {
                  ...data.line,
                  color: value
                };
              }
            }
          }
        ]
      }
    ];
  }
};
