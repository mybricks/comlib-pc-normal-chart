import React from 'react';
import { Bar }from '@ant-design/charts';
import BaseChart from '../components/chart';
import { Bar as MockData } from '../mock';

export default function(args) {
  return <BaseChart {...args} Chart={Bar} MockData={MockData}/>
}