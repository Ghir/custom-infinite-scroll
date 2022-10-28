import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { locationMock } from '../../mocks/location.mock';

import LocationCard from '../LocationCard';

let container: any = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders location data', () => {
  act(() => {
    render(<LocationCard item={locationMock} />, container);
  });
  expect(container.textContent).toContain(locationMock.address.addressLine1);
});
