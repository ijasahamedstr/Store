// src/ProductView.js
import React, { useState } from 'react'; // Import useState
import { Container, Grid, Paper, Typography, Button, Box } from '@mui/material';
import '../css/ProductsingleView.css'; 

const ProductView = () => {
  const [isInStock] = useState(true); // Initialize stock state

  return (
    <section style={{ backgroundColor: '#f2f3f4', width: '100%', margin: '0 auto' }}>
      <img 
        src="https://ehsan.sa/static/images/header-img.svg" 
        alt="Header" 
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
      <Container maxWidth="lg" sx={{ padding: 3 }} style={{ marginTop: '-30px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
            <Box display="flex" alignItems="stretch">
              <Paper style={{ padding: '16px', fontFamily: 'Noto Kufi Arabic, sans-serif', borderRadius: '20px', marginBottom: '20px', flex: 1 }}>
                <Typography variant="h5" gutterBottom style={{ textAlign: 'right', fontFamily: 'Noto Kufi Arabic, sans-serif', marginBottom: '15px' }}>
                  التعريف بالسيرة النبوية
                </Typography>
                <img
                  src="https://ehsanimagesp.s3.me-south-1.amazonaws.com/P166.jpg"
                  alt="Example"
                  className="rounded-image"
                  style={{ width: '100%', height: 'auto' }} // Ensure image is responsive
                />
              </Paper>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
            <Box display="flex" alignItems="stretch">
              <Paper style={{ padding: '16px', textAlign: 'right', overflow: 'hidden', borderRadius: '20px', flex: 1 }}>
                <Typography variant="h5" gutterBottom style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                  التعريف بالسيرة النبوية
                </Typography>
                <Typography variant="h6" color="primary" style={{ margin: '10px 0' }}>
                  $100
                </Typography>

                {/* Conditional Rendering for Stock Status */}
                <Typography variant="h6" color={isInStock ? 'green' : 'red'} style={{ margin: '10px 0' }}>
                  {isInStock ? 'In Stock' : 'Out of Stock'}
                </Typography>

                <Typography variant="body1" style={{ textAlign: 'right', marginTop: '10px', fontFamily: 'Noto Kufi Arabic, sans-serif', direction: 'rtl' }}>
                  يسعى هذا المشروع للتوعية بالسيرة النبوية ونشر التعاليم الإسلامية عن طريق تنظيم الزيارات للمتحف الدولي للسيرة النبوية والحضارة الإسلامية للمساهمة في تعريفهم بسيرة النبي صلى الله عليه وسلم.
                </Typography>
                
                <Typography variant="body1" style={{ textAlign: 'right', marginTop: '10px', fontFamily: 'Noto Kufi Arabic, sans-serif', direction: 'rtl' }}>
                عليه وسلالإسلامية عن طريق تنظيم الزيارات للمتحف الدولي للسيرة النبوية والحضارة الإسلامية للمساهمة في تعريفهم بسيرة النبي صلى الله عليه وسلم.
                </Typography>

                <Button variant="contained" color="primary"
                  sx={{
                    background: 'linear-gradient(270deg,#0d8f75 20%,#214570 105%)',
                    color: '#fff',
                    '&:hover': {
                      background: '#115293',
                    },
                    padding: { xs: '6px 12px', sm: '8px 16px' },
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                  }}
                  style={{ marginTop: '20px' }}
                  disabled={!isInStock} // Disable button if out of stock
                >
                  Buy Now
                </Button>

                <Typography variant="body2" style={{ marginTop: '10px' }}>
                  ★★★★☆ (50 Reviews)
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ProductView;
