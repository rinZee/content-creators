import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CreatorForm from '../components/CreatorForm';
import { fetchCreator, updateCreator } from '../services/api';

function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCreator = async () => {
      try {
        const data = await fetchCreator(id);
        setCreator(data);
      } catch (err) {
        setError('Failed to fetch creator data');
      } finally {
        setLoading(false);
      }
    };

    getCreator();
  }, [id]);

  const handleUpdate = async (updatedCreator) => {
    try {
      await updateCreator(id, updatedCreator);
      navigate('/show-creators');
    } catch (err) {
      setError('Failed to update creator');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Edit Creator</h1>
      {creator && (
        <CreatorForm initialData={creator} onSubmit={handleUpdate} />
      )}
    </div>
  );
}

export default EditCreator;