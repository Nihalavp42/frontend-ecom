// admin.js
import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: '',
    price: 0,
    description: '',
    discountPercentage: 0,
    rating: 0,
    category: '',
    brand: '',
    stock: 0,
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProduct({ ...product, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', product.title);
    formData.append('price', product.price);
    formData.append('description', product.description);
    formData.append('discountPercentage', product.discountPercentage);
    formData.append('rating', product.rating);
    formData.append('category', product.category);
    formData.append('brand', product.brand);
    formData.append('stock', product.stock);
    formData.append('image', product.image);

    try {
      const response = await axios.post('http://localhost:2000/addProduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
     
      setProduct({
        title: '',
        price: 0,
        description: '',
        discountPercentage: 0,
        rating: 0,
        category: '',
        brand: '',
        stock: 0,
        image: null
      });
    } catch (error) {
      console.error('Error adding product:', error.message);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>Add New Product</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label>Title:</label>
          <input type="text" name="title" value={product.title} onChange={handleInputChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="number" name="price" value={product.price} onChange={handleInputChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" value={product.description} onChange={handleInputChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Discount Percentage:</label>
          <input type="text" name="discountPercentage" value={product.discountPercentage} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Rating:</label>
          <input type="text" name="rating" value={product.rating} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input type="text" name="category" value={product.category} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Brand:</label>
          <input type="text" name="brand" value={product.brand} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Stock:</label>
          <input type="text" name="stock" value={product.stock} onChange={handleInputChange} className="form-control" />
        </div>

        <div className="form-group">
          <label>Image:</label>
          <input type="file" onChange={handleImageChange} accept="image/*" className="form-control-file" />
        </div>
        <div style={{ textAlign: 'center' }}>
          <button type="submit" className="btn btn-primary">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
