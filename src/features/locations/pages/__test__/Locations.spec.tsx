import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { Provider } from 'react-redux';

import { store } from '../../../../app/store';

import { locationMock } from '../../mocks/location.mock';

import Locations from '../../pages/Locations';

beforeEach(() => {
  const mockResponse = {
    json: () => Promise.resolve({ locations: [locationMock] }),
  } as Response;

  jest
    .spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve(mockResponse));
});

it('should display cards', async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <Locations />{' '}
      </Provider>,
    );
  });

  const cards = document.querySelectorAll('.MuiPaper-root');

  expect(cards.length).toBe(1);
  expect(cards[0].textContent).toContain(locationMock.locationType);
});
