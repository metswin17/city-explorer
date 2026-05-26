import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Explorer from './Explorer';

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {

const [searchQuery, setSearchQuery] = useState('');
const [location, setLocation] = useState({});

async function getLocation() {
  const API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`;  
  const response = await axios.get(API);
  
}

return (
  <> 

    <input
    onChange={(e) => setSearchQuery(e.target.value)}
    value={searchQuery}
    placeholder='Enter a city name' />
    <button onClick={getLocation}>Explore!</button> 
    setLocation(response.data[0]);
  {location.place_id && (

     <div>
    
       <h2>{location.display_name}</h2>
    
     
    
       <p>Latitude: {location.lat}</p>
    
     
    
       <p>Longitude: {location.lon}</p>
    
     </div>
  ) }

  <div> className='App'
    <Header />
    <Explorer />
    <Footer />
   
    </div> 
  </>
) } 
export default App;
