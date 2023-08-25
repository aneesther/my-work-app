import React, {useContext, useState} from 'react';
import Nav from "../components/nav";
import { NameContext } from '../App';
import "./signin.css"
import { useNavigate } from 'react-router-dom';
import "./home.css";


function SignUp() {
  const router = useNavigate();
  const { setName } = useContext(NameContext);
  const [ input, setInput ] = useState("");
  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setName(input);
    router("/");
  }
  
  return (
    <div>
        <Nav/>
        <form onSubmit={handleSubmit}>
          <div className='form-sec'>
            <label>Input a username:</label>
            <input
              name="name"
              value={input}
              placeholder='Username'
              onChange={handleChange} 
            />
            <button>Click Submit</button>
          </div>
        </form>
    </div>
  );
}

export default SignUp
