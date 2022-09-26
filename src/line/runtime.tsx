import React from 'react';
import { Line }from '@ant-design/charts';
import BaseChart from '../components/chart';
import { Line as MockData } from '../mock';

export default function(args) {
  
  return <BaseChart {...args} Chart={Line} MockData={MockData}/>
}