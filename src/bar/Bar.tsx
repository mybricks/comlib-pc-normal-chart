import React, { useEffect, useState } from 'react'
import { Bar } from '@ant-design/charts'
import { decodeTemplate } from './util'
import { Data, DEFAULT_DATA, GROUP_DATA } from './constants'
import { Datum } from '@antv/g2plot'


export default function ({ data, env, inputs }: RuntimeParams<Data>) {
  const { runtime, edit } = env;
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (edit || runtime) {
      const mockData = DEFAULT_DATA.map(item => {
        return {
          ...item,
          [data.xField]: item.value,
          [data.yField]: item.label,
        }
      });
      setChartData(mockData);
    }
    if (runtime) {
      inputs['data'] && inputs['data'](v => {
        setChartData(v);
      });
    }
  }, [data.xField, data.yField]);

  const {
    xField,
    yField,
    xAxis,
    yAxis,
    type,
    labelContent,
    legend,
    showTooltip
  } = data;
  const config = {
    data: chartData,
    xField,
    yField,
    seriesField: type === 'default' ? yField : 'type',
    legend,
    animation: !!runtime,
    isGroup: type === 'group',
    isStack: type === 'stack',
    isRange: type === 'range',
    meta: {
      [data.yField]: {
        formatter: (datum: Datum, index: number) => {
          // 临时做实验
          return decodeTemplate(labelContent, datum);
        }
      }
    },
    xAxis: {
      title: {
        position: `${xAxis.position}`,
        text: `${xAxis.title}`,
        autoRotate: false
      },
      label: {
        formatter: (name: string, item, index: number) => {
          return `${xAxis.value}${name}`;
        }
      },
    },
    yAxis: {
      title: {
        position: `${yAxis.position}`,
        text: `${yAxis.title}`,
        autoRotate: false
      },
      label: {
        formatter: (name: string, item, index: number) => {
          return `${yAxis.value}${name}`;
        }
      },
    },
    label: {
      content: (datum: Datum) => {
        return decodeTemplate(labelContent, datum);
      },
      layout: [
        // 数据标签防遮挡
        {
          type: 'interval-hide-overlap',
        },
        // 数据标签文颜色自动调整
        {
          type: 'adjust-color',
        }
      ]
    },
    tooltip: {
      showTitle: true, //设置customContent后无效
      showContent: showTooltip,
      title: yField,
      fields: [xField, yField],
      formatter: (datum: Datum) => {
        return { name: datum[yField], value: datum[xField] };
      },
      // customContent: (title, datum: Datum) => {
      //   return `<div>${title}</div>`;
      // }
    },
    interactions: [{ type: 'element-active' }],
  };

  return (
    <>
      {
        chartData.length > 0 ?
          <Bar
            {...config}
          />
          : <div style={{ display: 'flex', justifyContent: 'center' }}>暂无数据</div>
      }
    </>
  )
}
