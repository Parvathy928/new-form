import React, { useState } from 'react';
import "../Component/Styles/FormTask.css"
function FormTask() {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
 

  const handleChange = (e) => {
    setCity(e.target.value);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const City = city.trim()

  
    setCities([...cities, City]);
    setCity('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} class="form-input">
        <input
          type="text"
          value={city}
          onChange={handleChange}
          placeholder="Enter city name"
       className='input-btn' />
        <button type="submit" class="btn-button">Add City</button>
      </form>
    
      <ul>
        {cities.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default FormTask;
