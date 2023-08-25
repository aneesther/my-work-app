// import React from 'react';
import React, {useContext} from 'react';
import Nav from "../components/nav";
import { NameContext } from '../App';
import "./home.css";

function Home() {
  const { name } = useContext(NameContext);
  return (
    <div>
      <Nav/>
      <div className='home'>
        <p>Welcome to home page</p>
        <p>Welcome {name}</p>
      </div>
    </div>
  );
}

export default Home
