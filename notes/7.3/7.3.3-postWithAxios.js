import React, { useState, useEffect } from "react";
import '../index.css';
import * as yup from 'yup';
import axios from "axios";

const schema = yup.object().shape({
  user: yup.string().required('user is required').min(6, 'user needs to be 6 chars min'),
  favShow: yup.string().oneOf(['starTrek', 'starWars'], 'bruh, you gotta pick a favorite franchise'),
  language: yup.string().oneOf(['1','2','3'], 'please pick a language'),
  giveData: yup.boolean().oneOf([true], 'you must give away all your data')
});

function App() {
  const [form, setForm] = useState({ user: '', favShow: '', giveData: false, language: '' });
  const [errors, setErrors] = useState({ user: '', favShow: '', giveData: '', language: '' });
  const [disabled, setDisabled] = useState(true);

  const setFormErrors = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setErrors({ ...errors, [name]: '' }))
      .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
  }

  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    const updatedInfo = type === 'checkbox' ? checked : value;
    setFormErrors(name, updatedInfo)
    setForm({ ...form, [name]: updatedInfo});
  };

  const submit = event => {
    event.preventDefault();
    const newUser = { user: form.user.trim(), favShow: form.favShow, giveData: form.giveData, language: form.language };
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setForm({ user: '', favShow: '', giveData: false, language: '' })
      })
      .catch(err => {
        // console.error(err);
        debugger
      })
  }

  useEffect(() => {
    schema.isValid(form).then(valid => setDisabled(!valid))
  }, [form])

  return (
    <div className="App">
      <div style={{ color: 'red' }}>
        <div>{errors.user}</div><div>{errors.favShow}</div><div>{errors.giveData}</div><div>{errors.language}</div>
      </div>
      <form onSubmit={submit}>
        <label>User:
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
          <input type='checkbox' name='giveData' onChange={handleChange} />
        </label>

        <label>Language:
          <select name='language' onChange={handleChange} value={form.language}>
            <option value="">--Select One--</option>
            <option value="1">JavaScript</option>
            <option value="2">Python</option>
            <option value="3">Java</option>
          </select>
        </label>
        <button disabled={disabled}>submit</button>
      </form>
    </div>
  );
}

export default App;