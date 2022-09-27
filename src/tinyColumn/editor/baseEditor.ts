import { Data } from '../constants';

const BaseEditor = [
  {
    title: '颜色',
    type: 'ColorPicker',
    value: {
      get({ data }: EditorResult<Data>) {
        return data.config.color;
      },
      set({ data }: EditorResult<Data>, value: string) {
        data.config.color = value;
      }
    }
  }
];
export default BaseEditor;
