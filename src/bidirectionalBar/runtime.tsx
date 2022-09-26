import React from 'react';
import { BidirectionalBar }from '@ant-design/charts';
import BaseChart from '../components/chart';
import { BidirectionalBar as MockData } from '../mock';

export default function(args) {
  return <BaseChart {...args} Chart={BidirectionalBar} MockData={MockData}/>
}