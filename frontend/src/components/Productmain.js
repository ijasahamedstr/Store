import React from "react";
import { Container, Grid, Card, CardContent, Typography, Box, Badge, Button } from "@mui/material";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link, useLocation } from 'react-router-dom';

function EcommerceProductListing() {
  // Products data and background images
  const products = [
    { title: "", path: "/categories" },
    { title: "", path: "/categories/Courses" },
    { title: "", path: "/categories/Encyclopedia-of-Disability" },
    { title: "", path: "/categories/medicine" },
    { title: "", path: "/categories/donations" },
    { title: "", path: "/categories/ask-expert" },
    { title: "", path: "/categories/dawrat" },
    { title: "", path: "/categories/tib" },
    { title: "", path: "/categories" },
    { title: "", path: "/categories/discounts" },
    { title: "", path: "/categories/donations" },
    { title: "", path: "/categories/ask-expert" },
    { title: "", path: "/categories/ask-expert" },
  ];

  const backgroundImages = [
    "https://i.ibb.co/25NLmwh/Whats-App-Image-2024-11-14-at-6-15-27-PM.jpg",
    "https://i.ibb.co/5jsTVvH/1.png",
    "https://i.ibb.co/2NShpNQ/Whats-App-Image-2024-11-14-at-5-37-58-PM.jpg",
    "https://i.ibb.co/p0qb3b7/1.png",
    "https://i.ibb.co/d7XMpc4/1.png",
    "https://i.ibb.co/ZW348m5/1.png",
    "https://i.ibb.co/LkjKwxD/1.png",
    "https://i.ibb.co/0hHxTKF/1.png",
    "https://i.ibb.co/YW8dvKk/Whats-App-Image-2024-11-16-at-2-54-40-PM.jpg",
    "https://via.placeholder.com/500x300",
    "https://via.placeholder.com/500x300",
    "https://via.placeholder.com/500x300",
    "https://via.placeholder.com/500x300",
  ];

  const buttonData = [
    { label: "أعاقة حركية", path: "/Motor-disability" },
    { label: "إعاقة سمعية", path: "/Hearing-disability" },
    { label: "إعاقة بصرية", path: "/Visual-impairment" },
    { label: "إعاقة ذهنية", path: "/Mental-disability" },
    { label: "التوحد", path: "/Autism" },
    { label: "صعوبات التعلم", path: "/Learning-difficulties" },
  ];

  const location = useLocation(); // Get current location for active button state

  return (
    <section style={{ backgroundColor: '#f2f3f4', width: '100%', margin: '0 auto', paddingTop: '180px', marginBottom: '30px' }}>
      <Container maxWidth="xl" sx={{ paddingX: 3 }}>

        {/* Header Image */}
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginY: '20px' }}>
          <img
            width="100%"
            src="https://ehsan.sa/assets/images/homepage/ahseno-ayah.svg"
            alt="وَأَحْسِنُوا ۛ إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ"
            style={{ marginBottom: '15px', maxWidth: '400px', height: 'auto' }}
          />
        </Box>

        {/* Section Header */}
        <Box sx={{ background: 'linear-gradient(270deg, #0d8f75 20%, #214570 105%)', color: '#fff', padding: 2, borderRadius: 1 }} mb={3}>
          <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
            <Typography variant="h4" sx={{ fontFamily: 'Noto Kufi Arabic, sans-serif', fontSize: { xs: '1.2rem', sm: '4rem' }, flex: 1, textAlign: 'center' }}>
              أقسامنا
            </Typography>
          </Box>
        </Box>

        {/* Buttons Grid */}
        <Grid container spacing={2} justifyContent="center" sx={{ marginBottom: '180px', marginLeft:'50px', paddingTop:'50px' }}>
        {buttonData.map(({ label, path }) => (
          <Grid item xs={6} sm={6} md={6} lg={6} key={label} sx={{ pt: 3 }}> {/* Padding for each item */}
            <Button
              component={Link}
              to={path}
              variant="contained"
              sx={{
                my: 0.5,
                mx: 1,
                color: 'white',
                display: 'block',
                fontFamily: 'Noto Kufi Arabic',
                fontSize: { xs: '12px', sm: '15px', md: '70px' }, // Adjusted font size for md
                backgroundColor: location.pathname === path ? '#06f9f3' : 'transparent',
                '&:hover': { backgroundColor: '#444' },
                borderRadius: '50px',
                padding: '8px 14px',
                background: 'linear-gradient(270deg, #0d8f75 20%, #214570 105%)',
                textAlign: 'center',
                paddingLeft: '50px',
                paddingRight: '50px',
                mb: 3,
                width: '80%',
              }}
            >
              {label}
            </Button>
          </Grid>
        ))}
      </Grid>

        {/* Product Cards Section */}
        <Grid container spacing={3} sx={{ marginBottom: '100px' }}>
          {products.map((product, index) => (
            <Grid item xs={index === 0 ? 12 : 4} sm={index === 0 ? 12 : 4} md={index === 0 ? 12 : 4} key={index}>
              <Card
                sx={{
                  transition: '0.3s',
                  '&:hover': { boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)', transform: 'scale(1.02)' },
                  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                  borderRadius: 2,
                  margin: '10px',
                  backgroundImage: `url(${backgroundImages[index]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  color: 'white',
                  marginBottom: '100px',
                  // Make the first card full width and larger height
                  height: index === 0 ? '500px' : 'auto', // Set first card height to 500px
                }}
              >
                <Box display="flex" justifyContent="space-between" p={2}>
                  <Badge color="info" sx={{ borderRadius: "50%", width: 35, height: 35, display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
                </Box>

                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 300 }}>
                  <Typography variant="h5" sx={{ fontFamily: 'Noto Kufi Arabic, sans-serif', fontSize: { xs: '1.5rem', sm: '2rem' }, lineHeight: 1.5 }}>
                    {product.title}
                  </Typography>
                </CardContent>

                <CardContent>
                  <Box mt={1}>
                    <Button
                      component={Link}
                      to={product.path}
                      variant="contained"
                      startIcon={<RemoveRedEyeIcon />}
                      sx={{
                        background: 'linear-gradient(270deg, #0d8f75 20%, #214570 105%)',
                        color: '#fff',
                        '&:hover': { background: '#115293' },
                        padding: { xs: '6px 12px', sm: '8px 16px' },
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                        marginTop:'50px'
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
