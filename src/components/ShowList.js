// components/ShowList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ShowList.css';


const ShowList = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
      setShows(response.data);
    };

    fetchData();
  }, []);
    
  const handleViewDetails = (showId) => {
    // Redirect or perform any action when the "View Details" button is clicked
    navigate(`/show/${showId}`);
    console.log(`View Details clicked for show with ID: ${showId}`);
  };

  return (
    <div>
      <h1>Show List</h1>
      <ul>
        {shows.map((show) => (
            <li key={show.show.id}>
                <img src={show.show.image.medium} alt="" />
                <h2>{show.show.name}</h2>
                <p>{show.show.summary}</p>
               
                
            <button onClick={ () => handleViewDetails(show.show.id)}>View Details</button></li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
