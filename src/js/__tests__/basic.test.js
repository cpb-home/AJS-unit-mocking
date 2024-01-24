import { getLevel } from '../basic';
//import fetchData from '../http';
/*
jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('mocks testing', () => {
  fetchData.mockReturnValue(JSON.stringify({status: 'ok', level: 1}));

  expect(fetchData).toHaveBeenCalledWith('https://server/user/1');
});
*/

test.each([
  [1, 'Ваш текущий уровень: 1'],
  ['', 'Информация об уровне временно недоступна']
])(
  ('Health %i has result %s'),
  (id, res) => {
    const result = getLevel(id);
    expect(result).toBe(res);
  }
)