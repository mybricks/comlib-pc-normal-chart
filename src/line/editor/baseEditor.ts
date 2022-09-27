import { Data, InputIds, Schemas, SubTypeEnum } from '../constants';

const BaseEditor = [
  {
    title: '类型',
    type: 'Select',
    options: [
      { label: '基础折线图', value: SubTypeEnum.Default },
      { label: '多折线图', value: SubTypeEnum.More },
      { label: '阶梯折线图', value: SubTypeEnum.Step }
    ],
    value: {
      get({ data }: EditorResult<Data>) {
        return data.subType;
      },
      set({ data, input }: EditorResult<Data>, value: SubTypeEnum) {
        data.subType = value;
        const dsInput = input.get(InputIds.SetData);
        switch (value) {
          case SubTypeEnum.Step:
            data.config.stepType = 'vh';
            data.config.seriesField = '';
            dsInput.setSchema(Schemas.DefaultDataSource);
            break;
          case SubTypeEnum.More:
            data.config.stepType = '';
            data.config.seriesField = 'seriesField';
            dsInput.setSchema(Schemas.MoreDataSource);
            break;
          default:
            data.config.stepType = '';
            data.config.seriesField = '';
            dsInput.setSchema(Schemas.DefaultDataSource);
        }
      }
    }
  },
  {
    title: '平滑曲线',
    ifVisible({ data }) {
      return data.subType !== SubTypeEnum.Step;
    },
    type: 'switch',
    value: {
      get({ data }: EditorResult<Data>) {
        return data.config.smooth;
      },
      set({ data }: EditorResult<Data>, value: boolean) {
        data.config.smooth = value;
      }
    }
  }
];
export default BaseEditor;
