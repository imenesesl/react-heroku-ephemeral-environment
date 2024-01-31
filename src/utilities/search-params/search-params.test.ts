import { SearchParams } from './search-params';

describe('SearchParams', () => {
  beforeAll(() => {
    jest.spyOn(window, 'location', 'get').mockReturnValue({
      search: '?param1=value1&param2=value2'
    } as Location);
  });

  it('return the correct value for a given query parameter', () => {
    expect(SearchParams.get('param1')).toBe('value1');
  });

  it('return null for a non-existent query parameter', () => {
    expect(SearchParams.get('nonExistentParam')).toBeNull();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
});
