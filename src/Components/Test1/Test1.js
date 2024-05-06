import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Test1() {
  const [image, setImage] = useState(null);
  const [allImage, setAllImage] = useState([]);

  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    try {
      const response = await axios.get("http://localhost:2000/get-image");
      setAllImage(response.data.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const onInputChange = (e) => {
    setImage(e.target.files[0]);
  };

  const submitImage = async (e) => {
    e.preventDefault();

    if (!image) {
      console.log("Please select an image.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', image);

      const response = await axios.post("http://localhost:2000/upload-image", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      console.log("Image uploaded successfully:", response.data);
      setImage(null);
      getImage(); // Refresh image list after upload
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <form onSubmit={submitImage}>
        <input type="file" accept="image/*" onChange={onInputChange} />
        <button type="submit">Submit</button>
      </form>

      {allImage.length === 0 ? (
        <p>No images available</p>
      ) : (
        allImage.map((data) => (
          <img
            key={data._id}
            src={`http://localhost:2000/public/Images/${data.image}`}
            height={100}
            width={100}
            alt="Uploaded Image"
          />
        ))
      )}
    </div>
  );
}

export default Test1;
