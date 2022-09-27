import { Data, InputIds, Schemas, TypeEnum } from '../constants';

const BaseEditor = (index: number) => [
  {
    title: '图形类型',
    type: 'Select',
    options: [
      { label: '折线图', value: 'line' },
      { label: '柱状图', value: 'column' },
    ],
    value: {
      get({ data }: EditorResult<Data>) {
        return data.config.geometryOptions[index].geometry;
      },
      set({ data }: EditorResult<Data>, value: TypeEnum) {
        data.config.geometryOptions[index]['geometry'] = value;
      },
    }
  },
  {
    title: '开启分组',
    type: 'Switch',
    value: {
      get({ data }: EditorResult<Data>) {
        return data.seriesField[index];
      },
      set({ data, input }: EditorResult<Data>, value: boolean) {
        data.seriesField[index] = value;
        const dsInput = index === 0
          ? input.get(InputIds.SetLeftData)
          : input.get(InputIds.SetRightData);
        if (value) {
          data.config.geometryOptions[index]['seriesField'] = 'seriesField';
          dsInput.setSchema(Schemas.MoreDataSource);
        } else {
          data.config.geometryOptions[index]['seriesField'] = '';
          dsInput.setSchema(Schemas.DefaultDataSource);
        }
      },
    }
  },
  {
    title: '是否平滑',
    type: 'Switch',
    ifVisible({ data }: EditorResult<Data>) {
      return data.config.geometryOptions[index].geometry !== 'column';
    },
    value: {
      get({ data }: EditorResult<Data>) {
        return data.config.geometryOptions[index].smooth;
      },
      set({ data }: EditorResult<Data>, value: boolean) {
        data.config.geometryOptions[index]['smooth'] = value;
      },
    }
  }
];

export default BaseEditor;
