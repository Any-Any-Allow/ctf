import React from 'react';
import Button from './Button';
import Header from './Header';


const Home = () => {

  const homeContainer = {
    width: '100%',
    height: '93vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  };
  
  return (
    <>
      <Header>A.A.A</Header>
      <div style={homeContainer}>
        <Button name='Login'/>
        <Button name='Register'/>
      </div>
    </>
  );
}


export default Home;