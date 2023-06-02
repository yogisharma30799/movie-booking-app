import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { searchShows } from '../services/api';

const ShowDetail = () => {
  const { showId } = useParams();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const shows = await searchShows('all');
        const show = shows.find(({ show }) => show.id === parseInt(showId));
        setShow(show);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchShow();
  }, [showId]);

  const handleBookTicket = () => {
    // Redirect to the BookingFormPage with the showId parameter
    navigate(`/booking/${showId}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!show) {
    return <div>Show not found</div>;
  }

  return (
    <div className="show-details">
      <img src={show.show.image.medium} alt="" />
      <h2>{show.show.name}</h2>
      <p>{show.show.summary}</p>
      <h5>Movie Time:<p>{show.show.schedule.time}</p></h5>
      <h5>Movie Day:<p>{show.show.schedule.days}</p></h5>
      <h5>Movie Type:<p>{show.show.genres}</p></h5>
      <h5>IMDB Rating:<p>{show.show.rating.average}</p></h5>
      <button onClick={handleBookTicket}>Book Ticket</button>
    </div>
  );
};

export default ShowDetail;
