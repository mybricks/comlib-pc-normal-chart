import { Datum } from "@antv/g2plot";

/**
 * 
 * @param template 模板字符串解析
 * @param datum 一条数据
 * @returns 解析后的字符串
 */
const decodeTemplate = function (template: string, datum: Datum): string {
  return template.replace(/\{(\S+?)\}/g, (big, small) => {
    return typeof datum === 'string' ? datum : datum[small] || big;
  });
}

function runJs(fnStr: string) {
  return eval(`(${decodeURIComponent(fnStr).replace(/export.*default.*function.*\(/g, 'function _RT_(')})`)
}

function setConfig(data, key, value) {
  if (!data.config[key]) {
    data.config[key] = value
    data.config = { ...data.config }
  } else {
    data.config[key] = value
  }
}

export {
  decodeTemplate,
  runJs,
  setConfig
}