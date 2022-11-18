import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({ user: '', ageRange: '', state: '' });
  
  function handleChange(event) { 
    const { name, type, value, checked } = event.target;
    const updatedInfo = type === 'checkbox' ? checked : value;
    setForm({ ...form, [name]: updatedInfo });
  };

  return (
    <div className="App">
      <form>
        <label>User Name:
          <input value={form.user} name='user' type='text' onChange={handleChange} />
        </label>

        <label>13-18
          <input
            name="ageRange" type="radio" value="a"
            checked={form.ageRange === "a"} onChange={handleChange}
            />
        </label>

        <label>19-24
          <input
            name="ageRange" type="radio" value="b"
            checked={form.ageRange === "b"} onChange={handleChange}
            />
        </label>

        <label>25+
          <input name="ageRange" type="radio" value="c"
          checked={form.ageRange === "c"} onChange={handleChange}
          />
        </label>

        <label>State:
          <select value={form.state} name="state" onChange={handleChange}>
            <option value="">--select a state--</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default App;


