import React from 'react';

function CreatorCard({ creator, onDelete }) {
  const { id, name, url, description, image } = creator;

  return (
    <div className="creator-card">
      {image && <img src={image} alt={`${name}'s profile`} />}
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">Visit Profile</a>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default CreatorCard;