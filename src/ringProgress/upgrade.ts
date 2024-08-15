import { addMultipleOutputsAndRels } from '../utils';
import { Data } from './constants';

export default function ({ data, input, output }: UpgradeParams<Data>): boolean {
  if (!data.useEmpty) {
    data.useEmpty = true;
  }
  if (!data.emptyText) {
    data.emptyText = '暂无数据';
  }

  const configs = ['percent', 'style', 'statistic', 'tooltip'];

  addMultipleOutputsAndRels(configs, input, output);

  return true;
}
