import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function NameGetter() {
  const [imageUrl, setImageUrl] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://example.com/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageUrl }),
      });
      const data = await response.json();
      setResult(data);
      setError(null);
    } catch (error) {
      setResult(null);
      setError(error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Enter the URL of an image</Form.Label>
        <Form.Control type="text" value={imageUrl} onChange={handleUrlChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

      {result && (
        <div>
          <h3>Result:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}
    </Form>
  );
}

export default NameGetter;
