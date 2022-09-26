import React from 'react';
import { Funnel }from '@ant-design/charts';
import BaseChart from '../components/chart';
import { Funnel as MockData } from '../mock';

export default function(args) {
  return <BaseChart {...args} Chart={Funnel} MockData={MockData}/>
}