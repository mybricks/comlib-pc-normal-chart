import { Legend } from '@antv/g2plot/lib/types/legend'

export interface Axis {
    position: 'start' | 'center' | 'end',
    title: string | Object,
    value: string | Object
}

export interface Data {
    height: number,
    xField: string,
    yField: string,
    xAxis: Axis,
    yAxis: Axis,
    type: string,
    labelContent: string,
    legend: Legend,
    showTooltip: boolean
}

export const DEFAULT_DATA = [
    {
        label: '1951 年',
        value: 38,
    },
    {
        label: '1952 年',
        value: 52,
    },
    {
        label: '1956 年',
        value: 61,
    },
    {
        label: '1957 年',
        value: 145,
    },
    {
        label: '1958 年',
        value: 48,
    },
];
export const GROUP_DATA = [
    {
        label: 'Mon.',
        type: 'series1',
        value: 2800,
    },
    {
        label: 'Mon.',
        type: 'series2',
        value: 2260,
    },
    {
        label: 'Tues.',
        type: 'series1',
        value: 1800,
    },
    {
        label: 'Tues.',
        type: 'series2',
        value: 1300,
    },
    {
        label: 'Wed.',
        type: 'series1',
        value: 950,
    },
    {
        label: 'Wed.',
        type: 'series2',
        value: 900,
    },
    {
        label: 'Thur.',
        type: 'series1',
        value: 500,
    },
    {
        label: 'Thur.',
        type: 'series2',
        value: 390,
    },
    {
        label: 'Fri.',
        type: 'series1',
        value: 170,
    },
    {
        label: 'Fri.',
        type: 'series2',
        value: 100,
    },
];