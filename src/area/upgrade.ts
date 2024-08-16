import { Data } from './constants';
import { addOutputAndRel, addMultipleInitInputOutputsAndRels, InputIds, OutputIds } from '../utils';

export default function ({ data, input, output }: UpgradeParams<Data>): boolean {
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

  if (data?.config?.label === undefined) {
    data.config.label = false;
  }

  addOutputAndRel({
    input,
    output,
    outputKey: OutputIds.DataSource,
    title: '完成',
    inputKey: InputIds.DataSource
  });

  addMultipleInitInputOutputsAndRels(input, output);

  return true;
}
