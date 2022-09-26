import React from 'react';
import { Liquid }from '@ant-design/charts';
import BaseChart from '../components/chart';
import { Liquid as MockData } from '../mock';

export default function(args) {
  return <BaseChart {...args} Chart={Liquid} MockData={MockData}/>
}