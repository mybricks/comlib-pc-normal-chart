import { Data } from '../constants';
import BaseEditor from './baseEditor';
import {
  getLegendEditor,
  getPaddingEditor,
  getAxisEditor,
  getEmptyEditor
} from '../../utils/editor';
import { AxisPositionEnum } from '../../utils/constants';

const getYAxisEditor = (index: number) => {
  return {
    title: `y纵轴(${index === 0 ? '左' : '右'})`,
    items: [
      {
        title: '标题',
        type: 'Text',
        options: {
          placeholder: `y纵轴标题(${index === 0 ? '左' : '右'})`
        },
        value: {
          get({ data }: EditorResult<Data>) {
            return data.config.yAxis[`yField${index}`]?.title?.text;
          },
          set({ data }: EditorResult<Data>, value: string) {
            data.config.yAxis[`yField${index}`].title.text = value;
          }
        }
      },
      {
        title: '标题位置',
        type: 'Select',
        options: [
          { label: '上侧', value: AxisPositionEnum.Start },
          { label: '中间', value: AxisPositionEnum.Center },
          { label: '下侧', value: AxisPositionEnum.End }
        ],
        value: {
          get({ data }: EditorResult<Data>) {
            return data.config.yAxis[`yField${index}`]?.title?.position || AxisPositionEnum.Center;
          },
          set({ data }: EditorResult<Data>, value: AxisPositionEnum) {
            data.config.yAxis[`yField${index}`].title.position = value;
          }
        }
      }
    ]
  };
};

export default {
  '@init'({ style }: EditorResult<Data>) {
    style.height = 400;
    style.width = '100%';
  },
  '@resize': {
    options: ['height', 'width']
  },
  ':root': ({}: EditorResult<Data>, cate0: any) => {
    cate0.title = '常规';
    cate0.items = [
      {
        title: '左轴图形样式',
        items: [...BaseEditor(0)]
      },
      {
        title: '右轴图形样式',
        items: [...BaseEditor(1)]
      },
      getAxisEditor()[0],
      getYAxisEditor(0),
      getYAxisEditor(1),
      {
        ...getLegendEditor()
      },
      ...getPaddingEditor(),
      ...getEmptyEditor()
    ];

    return { title: '双轴图' };
  }
};
