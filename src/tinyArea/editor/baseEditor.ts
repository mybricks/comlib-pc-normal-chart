import { Data } from '../constants';

const BaseEditor = [
  {
    title: '平滑',
    type: 'Switch',
    value: {
      get({ data }: EditorResult<Data>) {
        return data.config.smooth;
      },
      set({ data }: EditorResult<Data>, value: boolean) {
        data.config.smooth = value;
      }
    }
  },
  {
    title: '区域配置',
    items: [
      {
        title: '区域颜色',
        type: 'ColorPicker',
        value: {
          get({ data }: EditorResult<Data>) {
            return data.config.areaStyle.fill;
          },
          set({ data }: EditorResult<Data>, value: string) {
            data.config.areaStyle.fill = value;
          }
        }
      }
    ]
  },
  {
    title: '折线配置',
    items: [
      {
        title: '折线颜色',
        type: 'ColorPicker',
        value: {
          get({ data }: EditorResult<Data>) {
            return data.config.line.color;
          },
          set({ data }: EditorResult<Data>, value: string) {
            data.config.line.color = value;
          }
        }
      }
    ]
  }
];
export default BaseEditor;
