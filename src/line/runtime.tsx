import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Line } from '@ant-design/charts';
import { Data, MockData } from './constants';
import copy from 'copy-to-clipboard';
import { Spin, message } from 'antd';
import EmptyWrap from '../components/emptyWrap';
import { callInputs } from '../utils';
import { chartTypes } from '../charts/constants';
import { OutputIds } from './constants';

export default function (props: RuntimeParams<Data>) {
  const { data, env, inputs, outputs, style } = props;

  const [dataSourceInRuntime, setRuntimeDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tip, setTip] = useState('');
  const tooltipData = useRef<Array<Record<string, any>>>([]);

  useEffect(() => {
    if (env.runtime) {
      setLoading(true);
      inputs.data((val: React.SetStateAction<any[]>) => {
        if (Array.isArray(val)) {
          setRuntimeDataSource(val);
        }
      });
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    callInputs(chartTypes.LINE, props, {
      setLoading,
      setTip
    });
  }, []);

  const onReady = useCallback((graph: any) => {
    graph.on('legend-item-name:click', ({ target }) => {
      if (data.copyLegendTextOnClick) {
        const legendTitle = target?.attrs?.text;
        try {
          copy(legendTitle);
          message.success('复制成功 !');
        } catch {
          message.error('复制失败! 请稍后重试');
        }
      }
    });

    graph.on('tooltip:change', ({ data }) => {
      // 存储 plot:click 需要的数据
      tooltipData.current = data.items?.map((item: Record<string, any>) => item?.data || {});
      if (data?.showTooltipChange) {
        outputs[OutputIds.TooltipChange] && outputs[OutputIds.TooltipChange](data.items);
      }
    });

    graph.on('label:click', ({ data }) => {
      outputs[OutputIds.LabelClick] && outputs[OutputIds.LabelClick](data.data);
    });

    graph.on('plot:click', () => {
      if (data?.showPlotClick) {
        outputs[OutputIds.PlotClick] && outputs[OutputIds.PlotClick](tooltipData.current);
      }
    });
  }, []);

  return (
    <Spin spinning={loading} tip={tip}>
      {!env.runtime || dataSourceInRuntime.length !== 0 ? (
        <Line
          style={{ width: style.width, height: style.height }}
          onReady={onReady}
          {...data.config}
          data={env.edit ? MockData[data.subType] : dataSourceInRuntime}
          key={env.edit ? JSON.stringify(data.config) : undefined}
        />
      ) : (
        <EmptyWrap
          style={{ width: style.width, height: style.height }}
          emptyText={data.emptyText}
          useEmpty={data.useEmpty}
        />
      )}
    </Spin>
  );
}
