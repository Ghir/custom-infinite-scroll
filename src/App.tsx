import { Routes, Route } from 'react-router-dom';

import Locations from './features/locations/pages/Locations';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Locations />} />
    </Routes>
  );
}

export default App;
