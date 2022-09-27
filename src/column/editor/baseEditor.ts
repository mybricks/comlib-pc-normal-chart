import { Data, InputIds, Schemas, SubTypeEnum } from '../constants';

const BaseEditor = [
  {
    title: '类型',
    type: 'Select',
    options: [
      { label: '基础柱状图', value: SubTypeEnum.Default },
      { label: '堆叠柱状图', value: SubTypeEnum.Stack },
      { label: '分组柱状图', value: SubTypeEnum.Group }
    ],
    value: {
      get({ data }: EditorResult<Data>) {
        return data.subType;
      },
      set({ data, input }: EditorResult<Data>, value: SubTypeEnum) {
        data.subType = value;
        switch (value) {
          case SubTypeEnum.Stack:
            data.config.isStack = true;
            data.config.isGroup = false;
            data.config.seriesField = 'seriesField';
            input.get(InputIds.SetData).setSchema(Schemas.GroupDataSource);
            break;
          case SubTypeEnum.Group:
            data.config.isStack = false;
            data.config.isGroup = true;
            data.config.seriesField = 'seriesField';
            input.get(InputIds.SetData).setSchema(Schemas.GroupDataSource);
            break;
          default:
            data.config.isStack = false;
            data.config.isGroup = false;
            data.config.seriesField = '';
            input.get(InputIds.SetData).setSchema(Schemas.DefaultDataSource);
            break;
        }
      }
    }
  }
];
export default BaseEditor;
