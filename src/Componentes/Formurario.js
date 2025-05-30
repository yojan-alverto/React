import React, { useState } from 'react';

const Formurario = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setMessage('');
  };

  return (
    <form className="recommendation-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name (Optional)</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name (Optional)"
      />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Message"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Formurario;