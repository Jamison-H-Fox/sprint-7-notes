import React, { useState } from "react";

function App() {
  const [fname, setFname] = useState('');
  const [favVehicle, setFavVehicle] = useState('');
  const [isHappy, setIsHappy] = useState('');

  return (
    <div className="App">
      <h3>The user's name is {fname || 'unknown'}</h3>
      <h3>{fname}'s favorite vehicle is a {favVehicle.toLowerCase() || 'unknown'}</h3>
      <h3>{fname} is {isHappy ? 'happy' : 'not happy'}</h3>

      <form>
        <label>
          first name: <input onChange={evt => {
            setFname(evt.target.value);
          }} id="fName" type="text"/>
        </label>

        <label>
          fav vehicle: <select onChange={evt => {
            setFavVehicle(evt.target.value);
          }} id='favVehicle'>
            <option />
            <option>Car</option>
            <option>Truck</option>
            <option>Airplane</option>
          </select>
        </label>

        <label>
          happy: <input onChange={evt => {
            setIsHappy(evt.target.checked);
          }} id='isHappy' type='checkbox' />
        </label>

      </form>
    </div>
  );
}

export default App;