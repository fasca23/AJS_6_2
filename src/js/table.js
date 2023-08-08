export default function destructuring(obj) {
  const result = [];
  const { special } = obj;
  if (!special) {
    return result;
  }
  return special.map((el) => ({
    ...el,
    description: el.description || 'Описание недоступно',
  }));
}
