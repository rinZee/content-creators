import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreatorForm from '../components/CreatorForm';
import { addCreator } from '../services/api';

function AddCreator() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (creatorData) => {
    try {
      await addCreator(creatorData);
      navigate('/show-creators');
    } catch (err) {
      setError('Failed to add creator. Please try again.');
    }
  };

  return (
    <div>
      <h1>Add New Creator</h1>
      {error && <p className="error">{error}</p>}
      <CreatorForm onSubmit={handleSubmit} />
    </div>
  );
}

export default AddCreator;