import { Data } from '../constants';

const BaseEditor = [
  {
    title: '区域配置',
    items: [
      {
        title: '有效区域颜色',
        type: 'ColorPicker',
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
        type: 'ColorPicker',
        value: {
          get({ data }: EditorResult<Data>) {
            return data.config.color[1];
          },
          set({ data }: EditorResult<Data>, value: string) {
            data.config.color[1] = value;
          }
        }
      }
    ]
  }
];
export default BaseEditor;
