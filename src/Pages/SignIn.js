import React, {useContext} from 'react';
import "./signin.css"
import Nav from '../components/nav';
import "./home.css"
import { NameContext } from '../App';

function SignIn() {
  const { name } = useContext(NameContext);

  return (
    <div>
        <Nav/>
        <div className='signin'>
          <p>Signed in as, {name}</p>
        </div>
    </div>
  );
}

export default SignIn
