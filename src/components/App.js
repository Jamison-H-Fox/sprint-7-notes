import React from "react";

function App() {
  return (
    <div className="App">
      <form>
        <label>
          first name: <input id="fName" type="text"/>
        </label>

        <label>
          fav vehicle: <select id='favVehicle'>
            <option />
            <option>Cars</option>
            <option>Trucks</option>
            <option>Airplanes</option>
          </select>
        </label>

        <label>
          happy: <input id='isHappy' type='checkbox' />
        </label>

      </form>
    </div>
  );
}

export default App;
