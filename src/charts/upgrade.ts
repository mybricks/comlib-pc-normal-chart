import { Data } from './constants';
import { addOutputAndRel, InputIds, OutputIds } from '../utils';

export default function ({ data, input, output }: UpgradeParams<Data>) {
  // 1.0.8 -> 1.0.9
  if (data.type === 'line') {
    input.get('data').setSchema({
      type: 'array',
      items: {
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
    });
  }

  if (typeof data?.showType === 'undefined') {
    data.showType = 'group';
  }

  if (typeof data?.emptyText === 'undefined') {
    data.emptyText = '暂无数据';
  }

  if (typeof data?.useEmpty === 'undefined') {
    data.useEmpty = true;
  }

  addOutputAndRel({
    input,
    output,
    outputKey: OutputIds.DataSource,
    title: '完成',
    inputKey: InputIds.DataSource
  });

  addOutputAndRel({
    input,
    output,
    outputKey: 'config',
    title: '完成',
    inputKey: 'config'
  });

  return true;
}
