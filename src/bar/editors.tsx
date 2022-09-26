import { Data } from './constants'

const setDataSchema = (data: Data, input: any, inputId: string) => {
  input.get(inputId)?.setSchema({
    type: 'array',
    items: {
      type: 'object',
      properties: {
        [data.xField]: {
          type: 'number'
        },
        [data.yField]: {
          type: 'any'
        }
      }
    }
  });
}

export default {
  '@init'({ style }) {
    style.height = 400;
    style.width = 800;
  },
  '@resize': {
    options: ['height', 'width']
  },
  ':root': ({ }: EditorResult<Data>, cate1, cate2) => {
    cate1.title = '常规';
    cate1.items = [
      // label
      {
        title: '标签',
        type: 'Text',
        description: '图形上的标签,字段名用{}包围引用',
        value: {
          get({ data }: EditorResult<Data>) {
            return data.labelContent;
          },
          set({ data }: EditorResult<Data>, value: string) {
            data.labelContent = value;
          },
        },
      },
      // legend
      {
        title: '图例',
        type: 'Select',
        options: [
          { label: '不使用', value: false },
          { label: '左上', value: 'top-left' },
          { label: '顶部', value: 'top' },
          { label: '右上', value: 'top-right' },
          { label: '底部', value: 'bottom' },
          { label: '左下', value: 'bottom-left' },
          { label: '左侧', value: 'left' },
          { label: '右下', value: 'bottom-right' },
          { label: '右侧', value: 'right' }
        ],
        value: {
          get({ data }: EditorResult<Data>) {
            return data.legend ? data.legend.position : false;
          },
          set({ data }: EditorResult<Data>, value: any) {
            if (!value) {
              data.legend = value;
            } else {
              data.legend = {
                position: value
              };
            }
          },
        },
      },
      // tooltip
      {
        title: '提示信息',
        type: 'Switch',
        value: {
          get({ data }: EditorResult<Data>) {
            return data.showTooltip;
          },
          set({ data }: EditorResult<Data>, value: boolean) {
            data.showTooltip = value;//158 5816 0303
          }
        }
      },
      // type
      {
        title: '类型',
        type: 'Select',
        options: [
          { label: '基础条形图', value: 'default' },
          { label: '分组条形图', value: 'group' },
          { label: '堆叠条形图', value: 'stack' },
          { label: '区间条形图', value: 'range' },
        ],
        value: {
          get({ data }: EditorResult<Data>) {
            return data.type;
          },
          set({ data }: EditorResult<Data>, value: string) {
            data.type = value;
          },
        },
      },
    ];
    cate2.title = '坐标轴';
    cate2.items = [
      // 横轴
      {
        title: '横轴配置',
        items: [
          {
            title: '字段名',
            type: 'Text',
            description: '横轴映射对应的数据字段名',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.yField;
              },
              set({ data, input }: EditorResult<Data>, value: string) {
                data.yField = value;
                // setDataSchema(data, input, 'data');
              }
            }
          },
          {
            title: '标题',
            type: 'Text',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.yAxis.title;
              },
              set({ data }: EditorResult<Data>, value: string) {
                data.yAxis.title = value;
              }
            }
          },
          {
            title: '标题位置',
            type: 'Select',
            options: [
              { label: '起点', value: 'start' },
              { label: '居中', value: 'center' },
              { label: '终点', value: 'end' },
            ],
            value: {
              get({ data }: EditorResult<Data>) {
                return data.yAxis.position;
              },
              set({ data }: EditorResult<Data>, value: 'start' | 'center' | 'end') {
                data.yAxis.position = value;
              }
            }
          },
          {
            title: '刻度值',
            type: 'Text',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.yAxis.value;
              },
              set({ data }: EditorResult<Data>, value: string) {
                data.yAxis.value = value;
              }
            }
          }
        ]
      },
      // 纵轴
      {
        title: '纵轴配置',
        items: [
          {
            title: '字段名',
            type: 'Text',
            description: '纵轴映射对应的数据字段名',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.xField;
              },
              set({ data, input }: EditorResult<Data>, value: string) {
                data.xField = value;
                // setDataSchema(data, input, 'data');
              }
            }
          },
          {
            title: '标题',
            type: 'Text',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.xAxis.title;
              },
              set({ data }: EditorResult<Data>, value: string) {
                data.xAxis.title = value;
              }
            }
          },
          {
            title: '标题位置',
            type: 'Select',
            options: [
              { label: '起点', value: 'start' },
              { label: '居中', value: 'center' },
              { label: '终点', value: 'end' },
            ],
            value: {
              get({ data }: EditorResult<Data>) {
                return data.xAxis.position;
              },
              set({ data }: EditorResult<Data>, value: 'start' | 'center' | 'end') {
                data.xAxis.position = value;
              }
            }
          },
          {
            title: '刻度值',
            type: 'Text',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.xAxis.value;
              },
              set({ data }: EditorResult<Data>, value: string) {
                data.xAxis.value = value;
              }
            }
          }
        ]
      }
    ];
  }
}