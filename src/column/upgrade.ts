import { Data } from "../utils";

export default function ({ data, output }: RuntimeParams<Data>) {
  // 1.0.1 -> 1.0.2
  if (!data.config.xField) {
    data.config.xField = 'year';
  }
  if (!data.config.yField) {
    data.config.yField = 'value';
  }

  /** 1.0.2->1.0.3 */
  if (!data.tempAnnotations)
    data.tempAnnotations = [];

  /** 1.0.4->1.0.5 */
  if (!data.config.padding) {
    data.config.padding = 'auto';
  }

  if (!data.useEmpty) {
    data.useEmpty = true;
  }
  if (!data.emptyText) {
    data.emptyText = '暂无数据';
  }

  if (data?.config?.label === undefined) {
    data.config.label = false;
  }

  /**
    * @description v1.0.6 增加事件配置项
    */
  if (!data.events) {
    data.events = [
      {
        id: 'eleClick',
        title: '元素点击',
        componentName: 'element',
        eventName: 'click'
      }
    ];
    output.add({
      id: 'eleClick',
      title: '元素点击',
      schema: {
        "type": "object",
        "properties": {
          "data": {
            "type": "object"
          }
        }
      }
    })
  }
  //=========== v1.0.6 end ===============

  return true;
}