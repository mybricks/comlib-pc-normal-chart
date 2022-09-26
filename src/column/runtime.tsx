import React from 'react';
import { Column }from '@ant-design/charts';
import BaseChart from '../components/chart';
import { Column as MockData } from '../mock';

export default function(args) {
  return <BaseChart {...args} Chart={Column} MockData={MockData}/>
}