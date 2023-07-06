export default {
  '@init'({ style }) {
    style.height = 400;
    style.width = '100%';
  },
  '@resize': {
    options: ['height', 'width']
  },
  ':root': ({ output }: EditorResult<any>, cate: any) => {
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
