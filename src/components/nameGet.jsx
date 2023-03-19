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
    const storageRef = ref(storage, `imagesearch/${file.name}`);
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
      let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json"
       }

      let bodyContent = JSON.stringify({
        image_url: imageUrl,
      });
      console.log(bodyContent);
      let apiResponse = await fetch("https://ab56-117-216-126-78.in.ngrok.io/classify", { 
        method: "POST",
        body: bodyContent,
        headers: headersList
      });

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

      {imageUrl && (
        <div>
          <h5>Uploaded Successfully! </h5>
          
        </div>
      )}

      {result && (
        <div>
          <h2>Result:</h2>
          <h5>{JSON.stringify(result, null, 2)}</h5>
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}
    </Form>
  );
}

export default NameGetter;
