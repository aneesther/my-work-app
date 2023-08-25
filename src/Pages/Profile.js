// import React from 'react';
import React, {useContext} from "react";
import "./home.css";
import Nav from '../components/nav';
import { NameContext } from "../App";



function Profile() {
  const { name } = useContext(NameContext);

  return (
    <div>
      <Nav/>
      <div className='home'>
        <p>kindly update your profile, {name}</p>
      </div>
    </div>
  );
}

export default Profile
