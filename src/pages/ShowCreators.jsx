import React, { useEffect, useState } from 'react';
import CreatorList from '../components/CreatorList';
import { fetchCreators } from '../services/api';

function ShowCreators() {
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
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Content Creators</h1>
      <CreatorList creators={creators} />
    </div>
  );
}

export default ShowCreators;