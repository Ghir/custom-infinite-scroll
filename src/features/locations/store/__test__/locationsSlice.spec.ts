import { locationMock } from './../../mocks/location.mock';

import locationsReducer, {
  loadLocationsAsync,
  LocationsState,
} from '../locationsSlice';

describe('locations reducer', () => {
  const initialState: LocationsState = {
    data: [],
    status: 'idle',
  };

  it('should handle initial state', () => {
    expect(locationsReducer(undefined, { type: 'unknown' })).toEqual({
      data: [],
      status: 'idle',
    });
  });

  it('sets loading status', () => {
    const action = { type: loadLocationsAsync.pending.type };
    const state = locationsReducer(initialState, action);

    expect(state).toEqual({ data: [], status: 'loading' });
  });

  it('sets idle status', () => {
    const action = {
      type: loadLocationsAsync.fulfilled.type,
      payload: [locationMock],
    };
    const state = locationsReducer(initialState, action);

    expect(state).toEqual({ data: [locationMock], status: 'idle' });
  });

  it('sets failed status', () => {
    const action = {
      type: loadLocationsAsync.rejected.type,
      payload: { error: 'test error' },
    };
    const state = locationsReducer(initialState, action);

    expect(state).toEqual({ data: [], status: 'failed' });
  });
});
