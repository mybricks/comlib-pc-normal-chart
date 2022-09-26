import React from 'react';
import { TinyColumn }from '@ant-design/charts';
import BaseChart from '../components/chart';
import { tinyColumn as MockData } from '../mock';

export default function(args) {
  return <BaseChart {...args} Chart={TinyColumn} MockData={MockData}/>
}