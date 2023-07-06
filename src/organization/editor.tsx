import { initInput, reRender, Data, AnnotationItem, setSchema } from '../utils';
import { set } from 'lodash-es';

export default {
  '@init'({ style, input, data }) {
    style.height = 400;
    style.width = '100%';
    initInput(data).forEach(({ id, title, schema = { type: 'any' } }) => {
      if (!input.get(id)) {
        input.add(id, title, schema);
      }
    });
  },
  '@resize': {
    options: ['height', 'width']
  },
  ':root': ({ data, input, output }: EditorResult<any>, cate: any) => {
    initInput(data).forEach(({ id, title, schema = { type: 'any' } }) => {
      if (!input.get(id)) {
        input.add(id, title, schema);
      }
    });
    output.add('nodeClick', '节点点击', { type: 'any' });
    (cate.title = '常规'),
      (cate.items = [
        {
          title: '事件',
          items: [
            {
              title: '点击节点',
              type: '_event',
              options: {
                outputId: 'nodeClick'
              }
            }
          ]
        }
      ]);
  }
};

let addAnnotation: (option: AnnotationItem) => void, delAnnotation: (index: number) => void;

const initParams = (data: Data) => {
  if (!data.tempAnnotations) data.tempAnnotations = [];
  addAnnotation = (option: AnnotationItem) => {
    data.tempAnnotations.push(option);
  };
  delAnnotation = (index: number) => {
    data.tempAnnotations.splice(index, 1);
  };
};
