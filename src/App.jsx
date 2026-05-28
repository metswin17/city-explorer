import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
 
const API_KEY = import.meta.env.VITE_API_KEY;
 
function App() {
 
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState({});
 
  async function getLocation() {
 
    const API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`;
 
    const response = await axios.get(API);
 
    setLocation(response.data[0]);
  }

  const mapURL = `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${location.lat},${location.lon}&zoom=10`;
 
  return (
    <div className="container mt-5">
 
      <input
        className="form-control"
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a city"
      />
 
      <button
        className="btn btn-primary mt-3"
        onClick={getLocation}
      >
        Explore!
      </button>
 
      {location.place_id && (
        <div className="card p-3 mt-3">
 
          <h2>{location.display_name}</h2>
 
          <p>Latitude: {location.lat}</p>
 
          <p>Longitude: {location.lon}</p>

          <img
  className="img-fluid rounded"
  src={mapURL}
  alt="Map of searched city"
/>
 
        </div>
      )}
 
    </div>
  );
}
 
export default App;
 
 