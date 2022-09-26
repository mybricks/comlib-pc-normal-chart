
export default function({ data }) {
  // 1.0.0 -> 1.0.1
  if (!data.config.color) {
    data.config.color = '#5588FF';
  }
  return true;
}