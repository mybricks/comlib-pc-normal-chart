import { Data } from '../constants';
import BaseEditor from './baseEditor';

export default {
  '@init'({ style }: EditorResult<Data>) {
    style.height = 100;
    style.width = '100%';
  },
  '@resize': {
    options: ['height', 'width']
  },
  ':root': ({}: EditorResult<Data>, cate0: any) => {
    cate0.title = '常规';
    cate0.items = [...BaseEditor];

    return { title: '迷你面积图' };
  }
};
