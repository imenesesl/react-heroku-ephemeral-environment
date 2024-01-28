import { getSearchParams } from './get-search-params';

describe('getSearchParams', () => {
  beforeAll(() => {
    jest.spyOn(window, 'location', 'get').mockReturnValue({
      search: '?param1=value1&param2=value2'
    } as Location);
  });

  it('return the correct value for a given query parameter', () => {
    const { get } = getSearchParams();
    expect(get('param1')).toBe('value1');
  });

  it('return null for a non-existent query parameter', () => {
    const { get } = getSearchParams();
    expect(get('nonExistentParam')).toBeNull();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
});
