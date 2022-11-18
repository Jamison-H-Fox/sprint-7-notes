import React, { useState } from "react";
import '../index.css'

function App() {
  const [form, setForm] = useState({ user: '', favShow: '', giveData: false, language: '' });

  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    const updatedInfo = type === 'checkbox' ? checked : value;
    setForm({ ...form, [name]: updatedInfo});
  };

  return (
    <div className="App">
      <form>
        <label>User
          <input value={form.user} type='text' name='user' onChange={handleChange}/>
        </label>

        <label>Star Trek
          <input 
            value='starTrek' 
            type='radio' 
            name='favShow' 
            onChange={handleChange}
            checked={form.favShow ==='starTrek'}
          />
        </label>

        <label>Star Wars
          <input 
            value='starWars' 
            type='radio' 
            name='favShow' 
            onChange={handleChange}
            checked={form.favShow ==='starWars'}
          />
        </label>

        <label>Give away your data?
          <input type='checkbox' name='giveData' onChange={handleChange}/>
        </label>

        <label>Language
          <select name='language' onChange={handleChange}>
            <option>--Select One--</option>
            <option>JavaScript</option>
            <option>Python</option>
            <option>Java</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default App;