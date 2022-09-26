
export default function ({ input }: any): boolean {
  // 1.0.10->1.0.11
  if (!input.get('loading')) {
    const params = {
      type: 'boolean'
    };
    input.add('loading', '设置加载态', params);
  }
  return true;
}
