import React, { useState } from "react";
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const onSubmit = evt => {
    evt.preventDefault();
    axios.post('/', { name, age });
  }
  const onNameChange = evt => setName(evt.target.value);
  const onAgeChange = evt => setAge(evt.target.value);

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <label>
          name: <input 
            onChange={onNameChange} 
            id='nameInput' 
            type='text' 
          />
        </label>
        <label>
          age: <input 
            onChange={onAgeChange}
            id='ageInput' 
            type='number' 
          />
        </label>
        <button>send</button>
      </form>

      <h3>The name is {name} and the age is {age}</h3>
    </div>
  );
}


export default App;
