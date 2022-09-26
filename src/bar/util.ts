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

export {
    decodeTemplate
}