import { Data, InputIds, Schemas, SubTypeEnum } from '../constants';

const BaseEditor = [
  {
    title: '类型',
    type: 'Select',
    options: [
      { label: '基础面积图', value: 'default' },
      { label: '堆叠面积图', value: 'stack' },
    ],
    value: {
      get({ data }: EditorResult<Data>) {
        return data.subType;
      },
      set({ data, input }: EditorResult<Data>, value: SubTypeEnum) {
        data.subType = value;
        const dsInput = input.get(InputIds.SetData);
        switch (value) {
          case SubTypeEnum.Stack:
            data.config.seriesField = 'seriesField';
            dsInput.setSchema(Schemas.StackDataSource);
            break;
          default:
            data.config.seriesField = '';
            dsInput.setSchema(Schemas.DefaultDataSource);
        }
      },
    },
  }
];
export default BaseEditor;
