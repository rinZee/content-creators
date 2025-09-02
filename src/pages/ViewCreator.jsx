import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCreator } from '../services/api';
import './ViewCreator.css'; // Assuming you want to add styles specific to this component

function ViewCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCreator = async () => {
      try {
        const data = await fetchCreator(id);
        setCreator(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getCreator();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="view-creator">
      <h2>{creator.name}</h2>
      <img src={creator.imageUrl} alt={creator.name} />
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">Visit Creator's Page</a>
    </div>
  );
}

export default ViewCreator;