/**
 * 数据源
 * @param smooth 是否平滑
 * @param areaStyle 填充区域样式
 * @param line 折线样式
 */
export interface Data {
    smooth: boolean;
    areaStyle: {
        fill: string;
        [key: string]: any
    };
    line: {
        color: string;
        [key: string]: any
    };
}