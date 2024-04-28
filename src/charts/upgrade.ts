import {
  Data,
} from './constants';

export default function ({ data, input }: UpgradeParams<Data>) {
  // 1.0.8 -> 1.0.9
  if (data.type === 'line') {
    input.get('data').setSchema({
      type: 'array',
      items:{
      type: 'object',
        properties: {
          [data.config.xField]: {
            title: 'x横轴字段名',
            type: 'string'
          },
          [data.config.yField as string]: {
            title: 'y纵轴字段名',
            type: 'number'
          },
          [data.config.seriesField]: {
            title: '分组字段名',
            type: 'string'
          }
        }
      }
    })
  }

  if (typeof data?.showType === 'undefined') {
    data.showType = "group"
  }

  if (typeof data?.emptyText === 'undefined') {
    data.emptyText = "暂无数据"
  }

  if (typeof data?.useEmpty === 'undefined') {
    data.useEmpty = true
  }

  return true;
}