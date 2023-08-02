export default function destructuring(obj) {
  const result = [];
  const { special } = obj;
  // Проверяем есть ли вообще special
  if (!special) {
    return result;
  }
  for (let i = 0; i < special.length; i += 1) {
    // Если нет описания - так и пишем о нем
    if (!special[i].description) {
      special[i].description = 'Описание недоступно';
    }
    result.push({
      id: special[i].id,
      name: special[i].name,
      icon: special[i].icon,
      description: special[i].description,
    });
  }
  return result;
}
