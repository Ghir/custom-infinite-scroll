// Models
import { Location } from '../models/location.model';

export const getLocations = async (
  start = 0,
  limit = 12,
): Promise<Location[]> => {
  const response = await fetch('v2/confidence/locations', {
    method: 'POST',
    headers: {
      username: 'amitphatak$r5labs.com',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      start,
      limit,
    }),
  });

  const data = await response.json();

  return data.locations;
};
