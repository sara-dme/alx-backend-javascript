export default function createIteratorObject(report) {
  const res = [];
  Object.keys(report).forEach((key) => {
    const val = report[key];
    Object.keys(val).forEach((k) => {
      const v = val[k];
      for (const i of v) {
        res.push(i)
      }
    });
  });
  return res;
}