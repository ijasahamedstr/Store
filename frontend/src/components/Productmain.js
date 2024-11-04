import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Badge,
  Button,
} from "@mui/material";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';

function EcommerceProductListing() {
  const products = [
    { title: "دورات "},
    { title: "طب "},
    { title: " مواهب أولادنا و بناتنا"},
    { title: " تخفيضات"},
    { title: "تبرعات"},
    { title: "اسأل المختص"},
  ];

  return (
    <section style={{ backgroundColor: '#f2f3f4', width: '100%', margin: '0 auto', paddingTop: '20px' }}>
      <Container maxWidth="xl" sx={{ padding: 3 }}>
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginY: '20px' }}>
          <img
            width="100%"
            src="https://ehsan.sa/assets/images/homepage/ahseno-ayah.svg"
            alt="وَأَحْسِنُوا ۛ إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ"
            style={{ marginBottom: '15px', maxWidth: '400px', height: 'auto' }}
          />
        </Box>
        <Box
          sx={{
            background: 'linear-gradient(270deg,#0d8f75 20%,#214570 105%)',
            color: '#fff',
            padding: 2,
            borderRadius: 1
          }}
          mb={3}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h4" sx={{ fontFamily: 'Noto Kufi Arabic, sans-serif', fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
              قوائم المنتجات
            </Typography>
            <Button
              variant="contained"
              sx={{
                padding: '10px 20px',
                fontSize: { xs: '0.9rem', sm: '1rem' },
                borderRadius: 2,
                background: 'linear-gradient(90deg, #4CAF50, #66BB6A)',
                color: '#fff',
                '&:hover': {
                  background: 'linear-gradient(90deg, #66BB6A, #4CAF50)',
                },
              }}
              style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
            >
              عرض المزيد
            </Button>
          </Box>
        </Box>
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  transition: '0.3s',
                  '&:hover': {
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)', // Set a custom shadow
                    transform: 'scale(1.02)',
                  },
                  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', // Base shadow
                  borderRadius: 2,
                  margin: '10px',
                }}
              >
                <Box display="flex" justifyContent="space-between" p={2}>
                  <Badge
                    color="info"
                    sx={{ borderRadius: "50%", width: 35, height: 35, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  />
                </Box>

                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 200 }}>
                  <Typography variant="h5" sx={{ fontFamily: 'Noto Kufi Arabic, sans-serif', fontSize: { xs: '1.5rem', sm: '2rem' }, lineHeight: 1.5 }}>
                    {product.title}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontFamily: 'Noto Kufi Arabic, sans-serif', marginTop: 1, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                    {product.title2}
                  </Typography>
                </CardContent>

                <CardContent>
                  <Box mt={1}>
                    <Button
                      component={Link} to="/categories"
                      variant="contained"
                      startIcon={<RemoveRedEyeIcon />}
                      sx={{
                        background: 'linear-gradient(270deg,#0d8f75 20%,#214570 105%)',
                        color: '#fff',
                        '&:hover': {
                          background: '#115293',
                        },
                        padding: { xs: '6px 12px', sm: '8px 16px' },
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                      }}
                      fullWidth
                      style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
                    >
                      عرض المزيد
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default EcommerceProductListing;
