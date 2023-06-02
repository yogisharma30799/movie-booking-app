// pages/ShowDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ShowDetails from '../components/ShowDetail';

const ShowDetailsPage = () => {
  const { showId } = useParams();

  return (
    <div>
      <h1>Show Details</h1>
      <ShowDetails showId={showId} />
    </div>
  );
};

export default ShowDetailsPage;
