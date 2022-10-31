import { render } from '@testing-library/react';

import { locationMock } from '../../mocks/location.mock';

import LocationCard from '../LocationCard';

it('renders location data', () => {
  const { container } = render(<LocationCard item={locationMock} />);

  expect(container.textContent).toContain(locationMock.address.addressLine1);
});
