import { Data } from '../constants';
import BaseEditor from './baseEditor';
import { getEmptyEditor, getLegendEditor, getPaddingEditor } from '../../utils/editor';

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
      ...BaseEditor,
      {
        ...getLegendEditor()
      },
      ...getPaddingEditor(),
      ...getEmptyEditor()
    ];

    return { title: '饼图' };
  }
};
