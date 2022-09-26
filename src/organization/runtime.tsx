import React from 'react';
import { OrganizationGraph }from '@ant-design/graphs';
import BaseChart from '../components/chart';
import { Organization as MockData } from '../mock';

export default function(args) {
  return <BaseChart {...args} Chart={OrganizationGraph} MockData={MockData}/>
}