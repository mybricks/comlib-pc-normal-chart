import { Data, inputIdMap, chartTypes } from './constants';

const setDataSchema = (data: Data, input: any, output?: any) => {
  const dataInputPin = input.get(inputIdMap.DATA);
  let schema: Record<string, any> = {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        [data.config.angleField]: {
          type: 'number'
        },
        [data.config.colorField]: {
          type: 'string'
        }
      }
    }
  };
  if (data.type === chartTypes.PIE) {
    schema = {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          [data.config.angleField]: {
            type: 'number'
          },
          [data.config.colorField]: {
            type: 'string'
          }
        }
      }
    };
  } else if (data.type === chartTypes.LIQUID) {
    schema = { type: 'number' };
  } else {
    if (Array.isArray(data.config.yField)) {
      schema = {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            [data.config.xField]: {
              type: 'number'
            },
            [data.config.yField[0]]: {
              type: 'string'
            },
            [data.config.yField[1]]: {
              type: 'string'
            }
          }
        }
      };
    } else {
      schema = {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            [data.config.xField]: {
              type: 'number'
            },
            [data.config.yField]: {
              type: 'string'
            },
            [data.config.seriesField]: {
              type: 'string'
            }
          }
        }
      };
    }
  }
  dataInputPin?.setSchema(schema);
  output && output.get(inputIdMap.DATA)?.setSchema(schema);
};

export { setDataSchema };
