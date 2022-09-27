import { Data, SubTypeEnum } from '../constants';

const BaseEditor = [
  {
    title: '类型',
    type: 'Select',
    options: [
      { label: '基础条形图', value: SubTypeEnum.Default },
      { label: '堆叠条形图', value: SubTypeEnum.Stack },
      { label: '分组条形图', value: SubTypeEnum.Group }
    ],
    value: {
      get({ data }: EditorResult<Data>) {
        return data.subType;
      },
      set({ data }: EditorResult<Data>, value: SubTypeEnum) {
        data.subType = value;
        switch (value) {
          case SubTypeEnum.Stack:
            data.config.isStack = true;
            data.config.isGroup = false;
            break;
          case SubTypeEnum.Group:
            data.config.isStack = false;
            data.config.isGroup = true;
            break;
          default:
            data.config.isStack = false;
            data.config.isGroup = false;
            break;
        }
      }
    }
  }
];
export default BaseEditor;
