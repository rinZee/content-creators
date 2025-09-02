import React, { useEffect, useState } from 'react';
import { fetchCreators } from '../services/api';
import CreatorCard from './CreatorCard';

function CreatorList() {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCreators = async () => {
      try {
        const data = await fetchCreators();
        setCreators(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getCreators();
  }, []);

  if (loading) return <p>Loading creators...</p>;
  if (error) return <p>Error fetching creators: {error}</p>;

  return (
    <div className="creator-list">
      {creators.map((creator) => (
        <CreatorCard key={creator.id} creator={creator} />
      ))}
    </div>
  );
}

export default CreatorList;