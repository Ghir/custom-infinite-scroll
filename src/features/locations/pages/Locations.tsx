import { useState, useEffect } from 'react';

// Style
import './Locations.css';

// Models
import { Location } from '../models/location.model';

// Components
import LocationCard from '../components/LocationCard';
import { observeIntersection } from '../helpers/observe-intersection';

// Store
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { loadLocationsAsync } from '../store/locationsSlice';

function Locations(): JSX.Element {
  const dispatch = useAppDispatch();
  let loader: HTMLElement | null;

  // state
  const locations = useAppSelector((state) => state.locations.data);
  const loadingStatus = useAppSelector((state) => state.locations.status);
  const [previousY, setPreviousY] = useState<number>(0);

  // effects
  useEffect(() => {
    dispatch(loadLocationsAsync(0));
  }, []);
  useEffect(() => {
    const observer = observeIntersection(
      loader as HTMLElement,
      handleIntersect,
    );

    return () => observer.disconnect();
  });

  // load locations when user scrolls down
  function handleIntersect(entries: IntersectionObserverEntry[]): void {
    const { y } = entries[0].boundingClientRect;

    if (previousY > y && loadingStatus !== 'loading') {
      dispatch(loadLocationsAsync(locations.length));
    }
    setPreviousY(y);
  }

  const loaderStyle = {
    height: '50px',
    margin: '20px',
  };
  const loaderInnerStyle = {
    display: loadingStatus === 'loading' ? 'block' : 'none',
  };

  return (
    <div className="container">
      {locations.map((item: Location) => (
        <LocationCard key={item.locationId} item={item}></LocationCard>
      ))}

      <div ref={(el: HTMLElement | null) => (loader = el)} style={loaderStyle}>
        <span style={loaderInnerStyle}>Loading...</span>
      </div>
    </div>
  );
}

export default Locations;
