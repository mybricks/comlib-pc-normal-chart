import { ChartProps, eventNameOptions, componentNameOptions } from '../constants';
type Data = ChartProps;

export default ({ data, output }: EditorResult<Data>) => [
  {
    title: '图表事件',
    items: [
      {
        type: 'array',
        options: {
          getTitle: ({ title, componentName, eventName, }) => {
            return `${title}(${componentName}:${eventName})`;
          },
          onAdd: (_id) => {
            const defaultEvent = {
              title: '事件名',
              id: _id,
              componentName: 'plot',
              eventName: 'click'
            };
            output.add(
              {
                id: defaultEvent.id,
                title: defaultEvent.title,
                schema: {
                  "type": "object",
                  "properties": {
                    "data": {
                      "type": "object"
                    }
                  }
                }
              }
            );

            return defaultEvent;
          },
          onRemove: (_id) => {
            output.remove(_id);
          },
          items: [
            {
              title: '事件名称',
              type: 'text',
              value: 'title'
            },
            {
              title: '组件',
              type: 'select',
              value: 'componentName',
              options: componentNameOptions
            },
            {
              title: '事件',
              type: 'select',
              value: 'eventName',
              options: eventNameOptions
            },
            // {
            //   type: '_Event',
            //   options: (...arg) => {
            //     console.log(arg, '_evnet')
            //   }
            // }
          ]
        },
        value: {
          get({ data }: EditorResult<Data>) {
            return data.events;
          },
          set({ data, output }: EditorResult<Data>, events: any[]) {
            data.events = events;
            data.events.forEach(ev => {
              if (ev.title)
                output.get(ev.id).setTitle(ev.title);
            })
          }
        }
      },
      // 因为array不支持事件类型编辑项，所以放到外面
      // 但是有响应问题, 最好能在array中支持
      ...(data.events || []).map(ev => {
        return {
          title: ev.title,
          type: '_Event',
          options: {
            outputId: ev.id
          }
        }
      })
    ]
  }
];
