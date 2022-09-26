import React from 'react';
import { DualAxes } from '@ant-design/charts';
import BaseChart from '../components/chart';
import { dualAxes as MockData } from '../mock';

export default function (args) {
  return <BaseChart {...args} Chart={DualAxes} MockData={MockData} />
}