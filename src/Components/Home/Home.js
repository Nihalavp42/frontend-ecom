import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import Header from '../Header/Header';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import Footer from '../Footer/Footer';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:2000/products');
        setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
     
      <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <Link key={product._id} to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
              <Card sx={{ maxWidth: 345, marginBottom: 20 }}>
                <CardMedia component="img" alt={product.title} height="310px" image={`http://localhost:2000${product.images}`} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Price: ₹{product.price}</strong>
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography component="legend">Rating</Typography>
                    <Rating name="read-only" value={product.rating} readOnly />
                  </Box>
                </CardContent>
                <CardActions>
                  <Stack direction="row" spacing={2}>
                    <Button startIcon={<ShareTwoToneIcon />}>Share</Button>
                    <Button variant="contained" color="success">
                      Add to Cart
                    </Button>
                  </Stack>
                </CardActions>
              </Card>
            </Link>
          ))
        ) : (
          <Typography variant="body1">No products available</Typography>
        )}
      </div>
      <Footer />
    </div>
  );
}
