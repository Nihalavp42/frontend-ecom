import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f8f9fa',
        py: 3,
        px: 2,
        mt: 'auto',
        textAlign: 'center',
      }}
    >
        <hr></hr>
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} Your Website
      </Typography>
      <Typography variant="body2" color="text.secondary" mt={1}>
        Designed and developed by{' '}
        <Link href="https://www.example.com" target="_blank" rel="noopener">
          Your Name
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
