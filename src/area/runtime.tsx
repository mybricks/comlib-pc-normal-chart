import React from 'react';
import { Area } from '@ant-design/charts';
import BaseChart from '../components/chart';
import { Area as MockData } from '../mock';

export default function(args) {

  return <BaseChart {...args} Chart={Area} MockData={MockData}/>
}