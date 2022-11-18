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

// import React, { useState } from "react";
// import '../index.css'

// function App() {
//   const [form, setForm] = useState({ user: '', favShow: '', giveData: false, language: '' });

//   function handleChange(event) {
//     const { name, type, value, checked } = event.target;
//     const updatedInfo = type === 'checkbox' ? checked : value;
//     setForm({ ...form, [name]: updatedInfo});
//   };

//   return (
//     <div className="App">
//       <form>
//         <label>User:
//           <input value={form.user} type='text' name='user' onChange={handleChange}/>
//         </label>

//         <label>Star Trek
//           <input 
//             value='starTrek' 
//             type='radio' 
//             name='favShow' 
//             onChange={handleChange}
//             checked={form.favShow ==='starTrek'}
//           />
//         </label>

//         <label>Star Wars
//           <input 
//             value='starWars' 
//             type='radio' 
//             name='favShow' 
//             onChange={handleChange}
//             checked={form.favShow ==='starWars'}
//           />
//         </label>

//         <label>Give away your data?
//           <input type='checkbox' name='giveData' onChange={handleChange}/>
//         </label>

//         <label>Language:
//           <select name='language' onChange={handleChange} value={form.language}>
//             <option value="">--Select One--</option>
//             <option value="1">JavaScript</option>
//             <option value="2">Python</option>
//             <option value="3">Java</option>
//           </select>
//         </label>
//       </form>
//     </div>
//   );
// }

// export default App;
