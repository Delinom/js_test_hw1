import getHealth from '../index.js';

test('health > 50', () => {
  const result = getHealth({ name: 'маг', health: 75 });
  expect(result).toBe('healthy');
});

test('health = 50', () => {
  const result = getHealth({ name: 'мечник', health: 50 });
  expect(result).toBe('wounded');
});

test('15 < health < 50', () => {
  const result = getHealth({ name: 'лучник', health: 35 });
  expect(result).toBe('wounded');
});

test('health = 15', () => {
  const result = getHealth({ name: 'маг', health: 15 });
  expect(result).toBe('wounded');
});

test('health < 15', () => {
  const result = getHealth({ name: 'мечник', health: 10 });
  expect(result).toBe('critical');
});