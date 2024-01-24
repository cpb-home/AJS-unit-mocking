import { getLevel } from '../basic';
import { httpGet } from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('mocks testing', () => {
  httpGet.mockReturnValue(JSON.stringify({status: 'ok', level: 1}));

  const response = getLevel(1);
  expect(response).toEqual('Ваш текущий уровень: 1');
  expect(httpGet).toHaveBeenCalledWith('https://server/user/1');
});
