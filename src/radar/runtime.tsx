import React from 'react';
import { Radar }from '@ant-design/charts';
import BaseChart from '../components/chart';
import { Radar as MockData } from '../mock';

export default function(args) {
  return <BaseChart {...args} Chart={Radar} MockData={MockData}/>
}