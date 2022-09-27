import { Data, InputIds, Schemas, SubTypeEnum } from '../constants';

const BaseEditor = [
  {
    title: '类型',
    type: 'Select',
    options: [
      { label: '基础雷达图', value: SubTypeEnum.Default },
      { label: '分组雷达图', value: SubTypeEnum.Group }
    ],
    value: {
      get({ data }: EditorResult<Data>) {
        return data.subType;
      },
      set({ data, input }: EditorResult<Data>, value: SubTypeEnum) {
        data.subType = value;
        switch (value) {
          case SubTypeEnum.Group:
            data.config.seriesField = 'seriesField';
            input.get(InputIds.SetData).setSchema(Schemas.GroupDataSource);
            break;
          default:
            data.config.seriesField = '';
            input.get(InputIds.SetData).setSchema(Schemas.DefaultDataSource);
            break;
        }
      }
    }
  }
];
export default BaseEditor;
