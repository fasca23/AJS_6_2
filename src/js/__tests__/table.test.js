import destructuring from '../table';

test('Destructuring - description', () => {
  const obj = {
    name: 'Лучник',
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  };
  const expectedResult = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ];
  expect(destructuring(obj)).toEqual(expectedResult);
});
// Если вообще нет special
test('Destructuring - no special', () => {
  const obj = {
    name: 'Лучник',
    age: 12,
  };
  expect(destructuring(obj)).toEqual([]);
});
