import { useState } from "react";
import withAuth from "../services/auth/authCheck";
import { storage, db, auth } from "../services/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { Form, Button, Carousel } from "react-bootstrap";
import Popup from "../components/popUp";
import NameGetter from "../components/nameGet";

const CreatePost = () => {
  const [name, setName] = useState("");
  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("");
  const [images, setImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleImageChange = (event) => {
    const selectedImages = Array.from(event.target.files);
    setImages(selectedImages);

    const urls = selectedImages.map((image) => URL.createObjectURL(image));
    setPreviewUrls(urls);
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    const newUrls = [...previewUrls];
    newImages.splice(index, 1);
    newUrls.splice(index, 1);
    setImages(newImages);
    setPreviewUrls(newUrls);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const imageUrls = await Promise.all(
      images.map((image) => {
        const storageRef = ref(storage, `images/${image.name}`);
        return uploadBytes(storageRef, image).then(() =>
          getDownloadURL(storageRef)
        );
      })
    );

    const postRef = await addDoc(collection(db, "posts"), {
      name: name,
      user: auth.currentUser.uid,
      username: auth.currentUser.displayName,
      caption: caption,
      location: location,
      images: imageUrls,
      timestamp: new Date().toISOString(),
    });

    const userRef = doc(db, "users", auth.currentUser.uid);

    await updateDoc(userRef, {
      posts: arrayUnion(postRef.id),
    });

    setName("");
    setCaption("");
    setLocation("");
    setImages([]);
    setPreviewUrls([]);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
          Get the name{" "}
          <Button onClick={() => setButtonPopup(true)}>here</Button>.
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <NameGetter />
          </Popup>
        </Form.Group>
        <Form.Group controlId="caption">
          <Form.Label>Caption:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={caption}
            onChange={handleCaptionChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="location">
          <Form.Label>Location:</Form.Label>
          <Form.Control
            type="text"
            value={location}
            onChange={handleLocationChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Images:</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            multiple
            required
          />
        </Form.Group>
        {previewUrls.length > 0 && (
          <Carousel>
            {previewUrls.map((url, index) => (
              //   <div key={index} style={{ height: "300px", overflow: "hidden" }}>
              <Carousel.Item>
                <img
                  src={url}
                  alt="Preview"
                  style={{ width: "40%", height: "200px" }}
                />
                <Carousel.Caption>
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveImage(index)}
                  >
                    Remove
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
              //   </div>
            ))}
          </Carousel>
        )}
        <Button variant="primary" type="submit">
          Post
        </Button>
      </Form>
    </div>
  );
};

export default withAuth(CreatePost);
