import { Data, SubTypeEnum } from '../constants';

const BaseEditor = [
  {
    title: '类型',
    type: 'Select',
    options: [
      { label: '基础饼图', value: SubTypeEnum.Default },
      { label: '环状饼图', value: SubTypeEnum.Circel }
    ],
    value: {
      get({ data }: EditorResult<Data>) {
        return data.subType;
      },
      set({ data }: EditorResult<Data>, value: SubTypeEnum) {
        data.subType = value;
        if (value === SubTypeEnum.Circel) {
          data.config.innerRadius = 0.6;
        } else {
          data.config.innerRadius = undefined;
        }
      }
    }
  },
  {
    title: '内半径',
    type: 'Text',
    description: '饼图的内半径，原点为画布中心。配置值域为 (0,1]。',
    options: {
      type: 'Number',
      max: 1,
      min: 0
    },
    ifVisible({ data }: EditorResult<Data>) {
      return data.subType === SubTypeEnum.Circel;
    },
    value: {
      get({ data }: EditorResult<Data>) {
        return data.config.innerRadius;
      },
      set({ data }: EditorResult<Data>, value: string) {
        data.config.innerRadius = Number(value);
      }
    }
  }
];
export default BaseEditor;
