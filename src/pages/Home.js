// pages/Home.js
import React from 'react';
import ShowList from '../components/ShowList';

const Home = () => {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>TV Shows</h1>
      <ShowList />
    </div>
  );
};

export default Home;
