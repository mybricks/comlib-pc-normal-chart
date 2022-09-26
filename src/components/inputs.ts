import { ChartType } from '../const';

export const initInput = (type: string) => {
  switch (type) {
    // case ChartType.Funnel:
    //   return []
    default:
      return [
        {
          id: 'style',
          title: '设置图形样式',
        },
        { id: 'axis', title: '设置横轴' },
        { id: 'yaxis', title: '设置纵轴' },
        { id: 'label', title: '设置label' },
        { id: 'tooltip', title: '设置提示信息' },
        { id: 'legend', title: '设置图例' },
        { id: 'loading', title: '设置加载态', schema: { type: 'boolean' } },
      ];
  }
};
