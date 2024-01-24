import { getLevel } from '../basic';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('mocks testing', () => {
  fetchData.mockReturnValue(JSON.stringify({status: 'ok', level: 1}));
  getLevel(1);

  expect(fetchData).toHaveBeenCalledWith('https://server/user/1');
});

test('mocks testing2', () => {
  fetchData.mockReturnValue(JSON.stringify({status: 'bad'}));
  getLevel();

  expect(fetchData).toHaveBeenCalledWith('https://server/user/undefined');
});

test('getLevel testing', () => {
  fetchData.mockReturnValue(JSON.stringify({status: 'ok', level: 1}));
  const result = getLevel(1);

  expect(result).toBe('Ваш текущий уровень: 1');
});

test('getLevel testing2', () => {
  fetchData.mockReturnValue(JSON.stringify({status: 'bad'}));
  const result = getLevel();

  expect(result).toBe('Информация об уровне временно недоступна');
});