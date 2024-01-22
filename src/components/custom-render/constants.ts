export const getParamsType = (propsTypeName: string = 'any') => `
declare interface Params = {
  props: ${propsTypeName};
  inject: {
    React: typeof React;
    antd: Record<string, any>;
    icons: Record<string, any>;
  };
  events: Record<string, Function>
}
`;
