import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { storage } from "../services/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

function NameGetter() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      setError("Please select a file.");
      return;
    }

    const storageRef = ref(storage, `NameGetter/${file.name}`);
    await uploadBytes(storageRef, file);
    const downloadUrl = await getDownloadURL(storageRef);
    setImageUrl(downloadUrl);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageUrl) {
      setError("Please upload an image.");
      return;
    }

    try {
      const headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
      };

      const bodyContent = JSON.stringify({
        image_url: imageUrl,
      });

      const apiResponse = await fetch(
        "https://lemondrop-classifier.up.railway.app/classify",
        {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        }
      );

      const data = await apiResponse.json();

      setResult(data.predictions[0].class);
      setError(null);
    } catch (error) {
      setResult(null);
      setImageUrl("");
      setError(error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Upload an image</Form.Label>
        <Form.Control type="file" onChange={handleFileChange} />
      </Form.Group>
      <Button variant="primary" onClick={handleUpload}>
        Upload
      </Button>
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
