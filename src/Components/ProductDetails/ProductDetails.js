import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProductDetails() {
  const { productId } = useParams(); // Get productId from URL params
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:2000/products/${productId}`);
        setProduct(response.data.data); // Assuming the API response provides detailed product information
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    fetchProductDetails();
  }, [productId]); // Trigger useEffect when productId changes

  return (
    <div>
      {product ? (
        <div>
          <Card sx={{ maxWidth: 545, marginBottom: 20 }}>
            <CardMedia component="img" alt={product.title} height="510px" width="400px" image={`http://localhost:2000${product.images}`} />
          </Card>
          <div style={{paddingLeft:'200px',marginTop:'-700px',display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }} >
           
 



    <Card style={{ minHeight:'700px', minWidth:'500px' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h1>{product.title}</h1>
        </Typography>
        <Typography variant="h5" component="div">
        <Rating name="read-only" value={product.rating} readOnly />
          <br/>{product.rating}
        </Typography>
        <Typography style={{width:'500px'}} color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body2">
          <h1> ₹{product.price}</h1>
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="success">Add To Cart</Button>
        <Button variant="contained" color='warning'>Buy Now</Button>
      </CardActions>
    </Card>
 

          </div>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}

export default ProductDetails;
