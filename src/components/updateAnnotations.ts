import { ChartType } from "../const";

export function updateAnnotations(data, dataSourceInRuntime) {
    const isDualAxes = data.type === ChartType.DualAxes;
    const annotations = data.config.annotations;

    data.tempAnnotations?.forEach((item: any) => {
        const { content, type, yFieldIndex, positionField, textColor, mainColor } = item;
        if (!positionField) return;
        const staticPosition = item.position?.split(',');
        const copyItem: any = { ...item };
        delete (copyItem._id);
        delete (copyItem.label);
        delete (copyItem.yFieldIndex);
        delete (copyItem.positionField);
        delete (copyItem.textColor);
        delete (copyItem.mainColor);
        delete (copyItem.useDash);
        if (content && ['dataMarker'].includes(type)) {
            copyItem.text = { content, style: { fill: textColor } };
        }
        if (content && ['text'].includes(type)) {
            copyItem.style = { fill: textColor };
        }
        if (mainColor && ['dataMarker'].includes(type)) {
            copyItem.point = { style: { stroke: mainColor } };
        }

        const ds = dataSourceInRuntime && (isDualAxes ? dataSourceInRuntime[yFieldIndex] : dataSourceInRuntime),
            xField = data.config.xField,
            yField = (isDualAxes ? data.config.yField[yFieldIndex] : data.config.yField);
        // 生成一组标注
        Array.isArray(ds) && ds.filter(item => item[positionField]).map(item => {
            const position = [staticPosition[0] || item[xField], staticPosition[1] || item[yField]];
            isDualAxes ? annotations[yField].push({ ...copyItem, position }) : annotations.push({ ...copyItem, position });
        });
    });
    return annotations;
}