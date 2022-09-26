import React from 'react';
import { Pie }from '@ant-design/charts';
import BaseChart from '../components/chart';
import { Pie as MockData } from '../mock';

export default function(args) {
  return <BaseChart {...args} Chart={Pie} MockData={MockData}/>
}