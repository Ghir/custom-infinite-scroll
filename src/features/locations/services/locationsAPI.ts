// Models
import { Location } from '../models/location.model';

// Constants
import { LOCATIONS_API, USERNAME } from '../constants/locations-env';

export const getLocations = async (
  start = 0,
  limit = 12,
): Promise<Location[]> => {
  const body = JSON.stringify({
    start,
    limit,
  });

  const response = await fetch(LOCATIONS_API, {
    method: 'POST',
    headers: {
      username: USERNAME,
      'Content-Type': 'application/json',
    },
    body,
  });

  const data = await response.json();

  return data.locations;
};
