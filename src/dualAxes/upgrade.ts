import { Data, InputId, OutputId } from './constants';
import { addMultipleInitInputOutputsAndRels, addOutputAndRel } from '../utils';

export default function ({ data, output, input }: RuntimeParams<Data>): boolean {
  if (!data.tempAnnotations) {
    data.tempAnnotations = [];
  }
  if (!data.config.padding) {
    data.config.padding = 'auto';
  }
  if (!data.useEmpty) {
    data.useEmpty = true;
  }
  if (!data.emptyText) {
    data.emptyText = '暂无数据';
  }

  if (!input.get(InputId.GeometryOptions)) {
    input.add({
      id: InputId.GeometryOptions,
      title: '轴配置',
      schema: {
        title: '配置',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            color: {
              title: '颜色',
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }
        }
      }
    });
  }

  addOutputAndRel({
    input,
    output,
    outputKey: OutputId.Data0,
    title: '完成',
    inputKey: InputId.Data0
  });

  addOutputAndRel({
    input,
    output,
    outputKey: OutputId.Data1,
    title: '完成',
    inputKey: InputId.Data1
  });

  addOutputAndRel({
    input,
    output,
    outputKey: 'geometryOptions',
    title: '完成',
    inputKey: 'geometryOptions'
  });

  addMultipleInitInputOutputsAndRels(input, output);

  return true;
}
