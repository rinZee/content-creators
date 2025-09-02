import { useState } from 'react';

export function CreatorForm({ initialData, onSubmit }) {
  const [name, setName] = useState(initialData ? initialData.name : '');
  const [url, setUrl] = useState(initialData ? initialData.url : '');
  const [description, setDescription] = useState(initialData ? initialData.description : '');
  const [image, setImage] = useState(initialData ? initialData.image : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const creatorData = { name, url, description, image };
    onSubmit(creatorData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>URL:</label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}