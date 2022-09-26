import { ChartType } from "../const";

export const initEvents = ({ data, input, output }) => {
  if (data.type === ChartType.OrganizationGraph) {
    output.add('nodeClick', '节点点击', { type: 'any' });
  }
}