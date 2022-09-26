import { AnnotationItem, ChartType, Data } from './const';
import { set } from 'lodash-es';

const reRender = (data) => (data.config = { ...data.config });

let addAnnotation,
  delAnnotation;

const initParams = (data: Data) => {
  if (!data.tempAnnotations)
    data.tempAnnotations = [];
  addAnnotation = (option: AnnotationItem) => {
    data.tempAnnotations.push(option);
  };
  delAnnotation = (index: number) => {
    data.tempAnnotations.splice(index, 1);
  };
};

const setGeometryOptions = (data: Data, key, value, index) => {
  data.config.geometryOptions[index] = {
    ...data.config.geometryOptions[index],
    [key]: value
  };
  reRender(data);
}

export const normalEditor = (data) => {
  switch (data.type) {
    case ChartType.Line:
      return [
        {
          title: '类型',
          type: 'Select',
          options: [
            { label: '基础折线图', value: 'default' },
            { label: '多折线图', value: 'more' },
            { label: '阶梯折线图', value: 'step' },
          ],
          value: {
            get({ data }: EditorResult<Data>) {
              return data.subType;
            },
            set({ data }: EditorResult<Data>, value: string) {
              data.subType = value;
              if (value === 'step') {
                data.config = {
                  ...data.config,
                  stepType: 'vh',
                  seriesField: '',
                };
              } else if (value === 'more') {
                data.config = {
                  ...data.config,
                  stepType: '',
                  seriesField: data.config.seriesField || 'category',
                };
              } else {
                data.config = {
                  ...data.config,
                  stepType: '',
                  seriesField: '',
                };
              }
            },
          },
        },
        {
          title: '平滑曲线',
          ifVisible({ data }) {
            return data.subType !== 'step';
          },
          type: 'switch',
          value: {
            get({ data }: EditorResult<Data>) {
              return data.config.smooth;
            },
            set({ data }: EditorResult<Data>, value: boolean) {
              return (data.config.smooth = value);
            },
          },
        },
      ];

    case ChartType.Bar:
      return [
        {
          title: '类型',
          type: 'Select',
          options: [
            { label: '基础条形图', value: 'default' },
            { label: '堆叠条形图', value: 'stack' },
            { label: '分组条形图', value: 'group' },
          ],
          value: {
            get({ data }: EditorResult<Data>) {
              return data.subType;
            },
            set({ data }: EditorResult<Data>, value: string) {
              data.subType = value;
              if (value === 'stack') {
                data.config = {
                  ...data.config,
                  isStack: true,
                  isGroup: false,
                  seriesField: data.config.seriesField || 'type',
                };
              } else if (value === 'group') {
                data.config = {
                  ...data.config,
                  isStack: false,
                  isGroup: true,
                  seriesField: data.config.seriesField || 'type',
                };
              } else {
                data.config = {
                  ...data.config,
                  isStack: false,
                  isGroup: false,
                  seriesField: '',
                };
              }
            },
          },
        },
      ];

    case ChartType.Column:
      return [
        {
          title: '类型',
          type: 'Select',
          options: [
            { label: '基础柱状图', value: 'default' },
            { label: '堆叠柱状图', value: 'stack' },
            { label: '分组柱状图', value: 'group' },
          ],
          value: {
            get({ data }: EditorResult<Data>) {
              return data.subType;
            },
            set({ data }: EditorResult<Data>, value: string) {
              data.subType = value;
              data.config.seriesField = '';
              if (value === 'stack') {
                data.config = {
                  ...data.config,
                  isStack: true,
                  seriesField: data.config.seriesField || 'type',
                };
              } else if (value === 'group') {
                data.config = {
                  ...data.config,
                  isStack: false,
                  isGroup: true,
                  seriesField: data.config.seriesField || 'name',
                };
              } else {
                data.config = {
                  ...data.config,
                  isStack: false,
                  isGroup: false,
                  seriesField: '',
                };
              }
            },
          },
        },
      ];
    case ChartType.BidirectionalBar:
      return [
        {
          title: '类型',
          type: 'Select',
          options: [
            { label: '水平对称条形图', value: 'horizontal' },
            { label: '垂直对称条形图', value: 'vertical' },
          ],
          value: {
            get({ data }: EditorResult<Data>) {
              return data.config.layout;
            },
            set({ data }: EditorResult<Data>, value: string) {
              data.config.layout = value;
            },
          },
        },
      ];

    case ChartType.Pie:
      return [
        {
          title: '类型',
          type: 'Select',
          options: [
            { label: '基础饼图', value: 'default' },
            { label: '环状饼图', value: 'circel' },
          ],
          value: {
            get({ data }: EditorResult<Data>) {
              return data.subType;
            },
            set({ data }: EditorResult<Data>, value: string) {
              data.subType = value;
              if (value === 'circel') {
                data.config.innerRadius =
                  data.config.innerRadius === void 0
                    ? 0.6
                    : data.config.innerRadius;
              } else {
                data.config.innerRadius = void 0;
              }
            },
          },
        },
      ];

    case ChartType.Area:
      return [
        {
          title: '类型',
          type: 'Select',
          options: [
            { label: '基础面积图', value: 'default' },
            { label: '堆叠面积图', value: 'stack' },
          ],
          value: {
            get({ data }: EditorResult<Data>) {
              return data.subType;
            },
            set({ data }: EditorResult<Data>, value: string) {
              data.subType = value;
              if (value === 'stack') {
                data.config.seriesField = data.config.seriesField || 'type';
              } else {
                data.config.seriesField = '';
              }
            },
          },
        },
      ];
    case ChartType.DualAxes:
      const geometryItem = (index: number) => [
        {
          title: '图形类型',
          type: 'Select',
          options: [
            { label: '折线图', value: 'line' },
            { label: '柱状图', value: 'column' },
          ],
          value: {
            get({ data }: EditorResult<Data>) {
              if (!data.config.geometryOptions) {
                data.config = {
                  ...data.config,
                  geometryOptions: [{}, {}]
                }
              }
              return data.config.geometryOptions[index].geometry || 'line';
            },
            set({ data }: EditorResult<Data>, value: string) {
              setGeometryOptions(data, 'geometry', value, index);
            },
          }
        },
        {
          title: '颜色',
          type: 'colorPicker',
          value: {
            get({ data }: EditorResult<Data>) {
              return data.config.geometryOptions[index].color;
            },
            set({ data }: EditorResult<Data>, value: string) {
              setGeometryOptions(data, 'color', value, index);
            },
          }
        },
        {
          title: '是否平滑',
          type: 'Switch',
          ifVisible({ data }: EditorResult<Data>) {
            return data.config.geometryOptions[index].geometry !== 'column';
          },
          value: {
            get({ data }: EditorResult<Data>) {
              return data.config.geometryOptions[index].smooth;
            },
            set({ data }: EditorResult<Data>, value: string) {
              setGeometryOptions(data, 'smooth', value, index);
            },
          }
        },
        {
          title: '分组字段名',
          type: 'Text',
          description: '图形为多折线图/分组柱状图/堆积柱状图时，数据源的拆分字段',
          value: {
            get({ data }: EditorResult<Data>) {
              return data.config.geometryOptions[index].seriesField;
            },
            set({ data }: EditorResult<Data>, value: string) {
              setGeometryOptions(data, 'seriesField', value, index);
            },
          },
        },
      ];
      return [
        {
          title: '左轴图形样式',
          items: [...geometryItem(0)]
        },
        {
          title: '右轴图形样式',
          items: [...geometryItem(1)]
        },
      ];
    default:
      return [{}];
  }
};

const basicDataMapEditor = [
  {
    title: 'x横轴字段名',
    type: 'Text',
    description: '横轴映射对应的数据字段名',
    value: {
      get({ data }: EditorResult<Data>) {
        return data.config.xField || 'year';
      },
      set({ data, input }: EditorResult<Data>, value: string) {
        data.config.xField = value;
      },
    },
  },
  {
    title: 'y纵轴字段名',
    type: 'Text',
    description: '纵轴映射对应的数据字段名',
    value: {
      get({ data }: EditorResult<Data>) {
        return data.config.yField || 'value';
      },
      set({ data, input }: EditorResult<Data>, value: string) {
        data.config.yField = value;
      },
    },
  },
];

export const dataMapEditor = (data: any) => {
  switch (data.type) {
    case ChartType.Liquid:
      return [
        {
          title: '百分比',
          type: 'Text',
          description: '指标比例数据 [0-1]',
          value: {
            get({ data }: EditorResult<Data>) {
              return data.config.percent;
            },
            set({ data }: EditorResult<Data>, value: string) {
              data.config.percent = value;
            },
          },
        },
        {
          title: '半径',
          type: 'Text',
          description: '外环的半径 [0-1]，相对于画布宽高的最小值来计算的。',
          value: {
            get({ data }: EditorResult<Data>) {
              return data.config.radius;
            },
            set({ data }: EditorResult<Data>, value: string) {
              data.config.radius = value;
            },
          },
        },
      ];

    case ChartType.Pie:
      return [
        {
          title: '数据字段名',
          type: 'Text',
          description: '扇形切片大小（弧度）所对应的数据字段名。',
          value: {
            get({ data }: EditorResult<Data>) {
              return data.config.angleField;
            },
            set({ data, input }: EditorResult<Data>, value: string) {
              data.config.angleField = value;
            },
          },
        },
        {
          title: '分类字段名',
          type: 'text',
          description: '扇形颜色映射对应的数据字段名',
          value: {
            get({ data }: EditorResult<Data>) {
              return data.config.colorField;
            },
            set({ data }: EditorResult<Data>, value: string) {
              data.config.colorField = value;
            },
          },
        },
        {
          title: '外半径',
          type: 'text',
          ifVisible({ data }) {
            return data.subType === 'circel';
          },
          description: '饼图的内半径，原点为画布中心。配置值域为 (0,1]。',
          value: {
            get({ data }: EditorResult<Data>) {
              return data.config.radius || 1;
            },
            set({ data }: EditorResult<Data>, value: string) {
              data.config.radius = value;
            },
          },
        },
        {
          title: '内半径',
          type: 'text',
          ifVisible({ data }) {
            return data.subType === 'circel';
          },
          description: '饼图的内半径，原点为画布中心。配置值域为 (0,1]。',
          value: {
            get({ data }: EditorResult<Data>) {
              return data.config.innerRadius || 0.6;
            },
            set({ data }: EditorResult<Data>, value: string) {
              data.config.innerRadius = Number(value);
            },
          },
        },
      ];

    case ChartType.Bar:
    case ChartType.Line:
    case ChartType.Area:
    case ChartType.Column:
      return [
        ...basicDataMapEditor,
        {
          title: '分组字段名',
          type: 'Text',
          description: '聚合维度对应的数据字段名',
          ifVisible({ data }) {
            return ['more', 'stack', 'group'].includes(data.subType);
          },
          value: {
            get({ data }: EditorResult<Data>) {
              return data.config.seriesField || 'type';
            },
            set({ data }: EditorResult<Data>, value: string) {
              data.config.seriesField = value;
            },
          },
        },
      ];
    case ChartType.Heatmap:
      return [
        ...basicDataMapEditor,
        {
          title: '颜色映射字段名',
          type: 'text',
          value: {
            get({ data }) {
              return data.config.colorField;
            },
            set({ data }, value: string) {
              data.config.colorField = value;
            },
          },
        },
      ];
    case ChartType.BidirectionalBar:
      return [
        basicDataMapEditor[0],
        {
          title: 'y纵轴字段名',
          type: 'Text',
          description: '纵轴映射对应的数据字段名',
          value: {
            get({ data }: EditorResult<Data>) {
              if (Array.isArray(data.config.yField))
                return data.config.yField.join(',');
              return data.config.yField || 'value';
            },
            set({ data }: EditorResult<Data>, value: string) {
              if (Array.isArray(data.config.yField)) {
                data.config.yField = value.split(',').map((v) => v.trim());
              }
              else {
                data.config.yField = value;
              }
            },
          },
        },
      ];
    case ChartType.TinyColumn:
      return [];
    default:
      return basicDataMapEditor;
  }
};

// 图表配置
const basicChartConfigEditor = (data: any) => [
  {
    title: 'x横轴',
    items: [
      {
        title: '标题',
        type: 'Text',

        value: {
          get({ data }: EditorResult<Data>) {
            return data.config.xAxis.title?.text;
          },
          set({ data }: EditorResult<Data>, value: string) {
            set(data.config.xAxis, ['title', 'text'], value);
            reRender(data);
          },
        },
      },
      {
        title: '标题位置',
        type: 'Select',
        options: [
          { label: '左侧', value: 'start' },
          { label: '中间', value: 'center' },
          { label: '右侧', value: 'end' },
        ],
        value: {
          get({ data }: EditorResult<Data>) {
            return data.config.xAxis.title?.position || 'center';
          },
          set({ data }: EditorResult<Data>, value: 'start' | 'center' | 'end') {
            set(data.config.xAxis, ['title', 'position'], value);
            reRender(data);
          },
        },
      },
    ],
  },
  {
    title: 'y纵轴',
    items: [
      {
        title: '标题',
        type: 'Text',
        value: {
          get({ data }: EditorResult<Data>) {
            return data.config.yAxis.title?.text;
          },
          set({ data }: EditorResult<Data>, value: string) {
            set(data.config.yAxis, ['title', 'text'], value);
            reRender(data);
          },
        },
      },
      {
        title: '标题位置',
        type: 'Select',
        options: [
          { label: '上侧', value: 'end' },
          { label: '中间', value: 'center' },
          { label: '下侧', value: 'start' },
        ],
        value: {
          get({ data }: EditorResult<Data>) {
            return data.config.yAxis.title?.position || 'center';
          },
          set({ data }: EditorResult<Data>, value: 'start' | 'center' | 'end') {
            set(data.config.yAxis, ['title', 'position'], value);
            reRender(data);
          },
        },
      },
    ],
  },
  {
    title: '标注',
    items: [
      {
        type: 'array',
        options: {
          getTitle: ({ label }) => {
            return label;
          },
          onRemove: (index: number) => {
            delAnnotation(index);
          },
          onAdd: () => {
            const defaultAnnotation: AnnotationItem = {
              label: `标注${data.tempAnnotations.length}`,
              type: 'text',
              position: ['min', 'min'],
              start: ['min', 'min'],
              end: ['max', 'max'],
              content: `标注${data.tempAnnotations.length}`,
              // line: null,
              yFieldIndex: 0,
              positionField: '',
              textColor: 'blue',
              mainColor: 'blue',
              useDash: true,
              autoRotate: true,
            };
            addAnnotation(defaultAnnotation);
            return defaultAnnotation;
          },
          items: [
            {
              title: '标注名称',
              type: 'text',
              value: 'label'
            },
            {
              title: '类型',
              type: 'Select',
              options: [
                { label: '辅助文本', value: 'text' },
                { label: '辅助线(可带文本)', value: 'line' },
                { label: '辅助框', value: 'region' },
                { label: '数据点', value: 'dataMarker' },
              ],
              value: 'type'
            },
            {
              title: '区域颜色',
              type: 'colorPicker',
              ifVisible(datum, index) {
                return ['region'].includes(datum.type);
              },
              value: 'mainColor'
            },
            {
              title: '数据点颜色',
              type: 'colorPicker',
              ifVisible(datum, index) {
                return ['dataMarker'].includes(datum.type);
              },
              value: 'mainColor'
            },
            {
              title: '虚线',
              type: 'switch',
              ifVisible(datum, index) {
                return ['line'].includes(datum.type);
              },
              value: 'useDash'
            },
            {
              title: '线段颜色',
              type: 'colorPicker',
              ifVisible(datum, index) {
                return ['line'].includes(datum.type);
              },
              value: 'mainColor'
            },
            {
              title: 'y轴字段',
              type: 'Select',
              options: [
                { label: '左轴', value: 0 },
                { label: '右轴', value: 1 },
              ],
              ifVisible() {
                return data.type === ChartType.DualAxes;
              },
              value: 'yFieldIndex'
            },
            {
              title: '坐标',
              type: 'text',
              ifVisible(datum, index) {
                return ['text', 'dataMarker'].includes(datum.type);
              },
              value: 'position'
            },
            {
              title: '动态坐标字段',
              type: 'text',
              ifVisible(datum, index) {
                return ['text', 'dataMarker'].includes(datum.type);
              },
              value: 'positionField'
            },
            {
              title: '起始坐标',
              type: 'text',
              ifVisible(datum, index) {
                return ['line', 'region'].includes(datum.type);
              },
              value: 'start'
            },
            {
              title: '结束坐标',
              type: 'text',
              ifVisible(datum, index) {
                return ['line', 'region'].includes(datum.type);
              },
              value: 'end'
            },
            {
              title: '文本内容',
              type: 'textarea',
              ifVisible(datum, index) {
                return ['text', 'line', 'dataMarker'].includes(datum.type);
              },
              value: 'content'
            },
            {
              title: '文本与线段平行',
              type: 'switch',
              ifVisible(datum, index) {
                return ['line'].includes(datum.type);
              },
              value: 'autoRotate'
            },
            {
              title: '文本颜色',
              type: 'colorPicker',
              ifVisible(datum, index) {
                return ['text', 'line', 'dataMarker'].includes(datum.type);
              },
              value: 'textColor'
            },
          ]
        },
        value: {
          get({ data }: EditorResult<Data>) {
            initParams(data);
            return data.tempAnnotations;
          },
          set({ data }: EditorResult<Data>, value: AnnotationItem[]) {
            data.tempAnnotations = value;

            let annotations;
            value.forEach((item: any) => {
              const copyItem: any = { ...item };
              const { position, start, end, content, type, positionField, textColor, mainColor, useDash, autoRotate } = item;
              if (position && !Array.isArray(position)) {
                copyItem.position = position.split(',');
              }
              if (start && !Array.isArray(start)) {
                copyItem.start = start.split(',');
              }
              if (end && !Array.isArray(end)) {
                copyItem.end = end.split(',');
              }
              if (content && ['line', 'dataMarker'].includes(type)) {
                copyItem.text = { content, autoRotate, style: { fill: textColor } };
              }
              if (content && ['text'].includes(type)) {
                copyItem.style = { fill: textColor };
              }
              if (mainColor && ['dataMarker'].includes(type)) {
                copyItem.point = { style: { stroke: mainColor } };
              }
              if (mainColor && ['region'].includes(type)) {
                copyItem.style = { fill: mainColor };
              }
              if (mainColor && ['line'].includes(type)) {
                copyItem.style = { stroke: mainColor, lineDash: useDash ? [4, 4] : [0, 0] };
              }
              delete (copyItem._id);
              delete (copyItem.label);
              delete (copyItem.yFieldIndex);
              delete (copyItem.positionField);
              delete (copyItem.textColor);
              delete (copyItem.mainColor);
              delete (copyItem.useDash);
              if (data.type === ChartType.DualAxes) {
                if (!annotations) annotations = {};
                const { yFieldIndex } = item;
                const yField = data.config.yField[yFieldIndex];
                if (!annotations[yField]) {
                  annotations[yField] = [];
                }
                !positionField && annotations[yField].push(copyItem);
              } else {
                if (!annotations) annotations = [];
                !positionField && annotations.push(copyItem);
              }
            });

            data.config.annotations = annotations;
            reRender(data);
          }
        }
      }
    ]
  },
];

const sliderConfig = {
  title: '缩略轴',
  items: [
    {
      title: '显示',
      type: 'switch',
      value: {
        get({ data }: EditorResult<Data>) {
          return data.config.slider;
        },
        set({ data }: EditorResult<Data>, use: boolean) {
          data.config.slider = use ? { start: 0.1, end: 0.9 } : void 0;
          reRender(data);
        },
      },
    },
  ],
};

export const chartConfigEditor = (data: any) => {
  switch (data.type) {
    case ChartType.BidirectionalBar:
    case ChartType.Funnel:
    case ChartType.Pie:
      return [];
    case ChartType.TinyColumn:
      return [
        {
          title: '贴图样式',
          type: 'select',
          options: [
            { label: '基础', value: '' },
            { label: '点状', value: 'dot' },
            { label: '线状', value: 'line' },
            { label: '块状', value: 'square' }
          ],
          value: {
            get({ data }: EditorResult<Data>) {
              return data.config.pattern.type;
            },
            set({ data }: EditorResult<Data>, value: '' | 'dot' | 'line' | 'square') {
              data.config.pattern.type = value;
              reRender(data);
            }
          }
        },
        {
          title: '颜色配置',
          type: 'colorPicker',
          value: {
            get({ data }: EditorResult<Data>) {
              return data.config.color;
            },
            set({ data }: EditorResult<Data>, value: string) {
              data.config.color = value;
            }
          }
        }
      ]

    case ChartType.Liquid:
      return [
        {
          title: '边框颜色',
          type: 'colorpicker',
          value: {
            get({ data }) {
              return data.config.liquidStyle.stroke;
            },
            set({ data }, value: string) {
              data.config.liquidStyle.stroke = value;
              reRender(data);
            },
          },
        },
        {
          title: '水波颜色',
          type: 'colorpicker',
          value: {
            get({ data }) {
              return data.config.liquidStyle.fill;
            },
            set({ data }, value: string) {
              data.config.liquidStyle.fill = value;
              reRender(data);
            },
          },
        },
      ];

    case ChartType.Heatmap:
      return [
        {
          title: '背景图',
          type: 'imageSelector',
          value: {
            get({ data }) {
              return data.config.annotations[0].src;
            },
            set({ data }, url: string) {
              data.config.annotations[0].src = url;
            },
          },
        },
      ];

    case ChartType.Line:
    case ChartType.Area:
      return [...basicChartConfigEditor(data), { ...sliderConfig }];
    default:
      return basicChartConfigEditor(data);
  }
};
