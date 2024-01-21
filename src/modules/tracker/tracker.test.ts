import { Tracker } from './';
import * as constants from './constants';
import { ITracker } from './types';

jest.mock('./constants', () => ({
  ...jest.requireActual('./constants'),
  logger: {
    log: jest.fn()
  }
}));

describe('Tracker', () => {
  const mockWriteKey = 'mockWriteKey';
  let tracker: ITracker;
  const mockEvent = 'testEvent';
  const mockUserId = 'testUser';
  const mockProperties = { key: 'value' };
  const mockResponse = { status: 'success' };
  const mockError = new Error('mock error');

  beforeEach(() => {
    jest.resetAllMocks();
    fetchMock.resetMocks();
    tracker = new Tracker(mockWriteKey);
  });

  it('send a track request successfully', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    await tracker.track({
      event: mockEvent,
      userId: mockUserId,
      properties: mockProperties,
      type: 'track'
    });

    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.segment.io/v1/track',
      expect.objectContaining({
        method: 'POST',
        headers: expect.any(Object),
        body: JSON.stringify({
          event: mockEvent,
          userId: mockUserId,
          properties: mockProperties
        })
      })
    );

    expect(constants.logger.log).toHaveBeenCalledWith('success', mockResponse);
  });

  it('handle an error in track request', async () => {
    fetchMock.mockReject(mockError);

    await tracker.track({
      event: mockEvent,
      userId: mockUserId,
      properties: mockProperties,
      type: 'track'
    });

    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.segment.io/v1/track',
      expect.objectContaining({
        method: 'POST',
        headers: expect.any(Object),
        body: JSON.stringify({
          event: mockEvent,
          userId: mockUserId,
          properties: mockProperties
        })
      })
    );

    expect(constants.logger.log).toHaveBeenCalledWith('error', mockError);
  });
});
