import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Badge,
  Button,
} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

function EcommerceProductListing() {
  const products = [
    {
      title: "HP Notebook",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp",
      category: "Laptops",
      originalPrice: "$1099",
      price: "$999",
      available: 6,
      rating: 5,
      combo: "x4",
    },
    {
      title: "HP Envy",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp",
      category: "Laptops",
      originalPrice: "$1199",
      price: "$1099",
      available: 7,
      rating: 4,
      combo: "x2",
    },
    {
      title: "Toshiba B77",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp",
      category: "Laptops",
      originalPrice: "$1399",
      price: "$1299",
      available: 5,
      rating: 4.5,
      combo: "x3",
    },
    {
      title: "Lenovo ThinkPad",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp",
      category: "Laptops",
      originalPrice: "$1499",
      price: "$1399",
      available: 8,
      rating: 4.5,
      combo: "x1",
    },
  ];

  return (
    <section style={{ backgroundColor: '#f2f3f4', width: '100%', margin: '0 auto',marginTop:'-50px' }}>
      <Container fluid maxWidth="xl" className="my-5" sx={{ padding: 3 }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: '20px', marginBottom: '20px' }}
      >
      <img
        width="400"
        src="https://ehsan.sa/assets/images/homepage/ahseno-ayah.svg"
        alt="وَأَحْسِنُوا ۛ إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ"
        style={{marginBottom:'15px'}}
      />
      </Box>
        <Box 
          sx={{ 
            background: 'linear-gradient(90deg, #2196F3, #21CBF3)', 
            color: '#fff', 
            padding: 2, 
            borderRadius: 1 
          }} 
          mb={3}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h4" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif', fontSize: '1.5rem' }}>قوائم المنتجات</Typography>
            <Button 
              variant="contained" 
              sx={{ 
                padding: '10px 20px', 
                fontSize: '1.1rem', 
                borderRadius: 2,
                background: 'linear-gradient(90deg, #4CAF50, #66BB6A)', 
                color: '#fff',
                '&:hover': {
                  background: 'linear-gradient(90deg, #66BB6A, #4CAF50)', 
                },
              }}
              style={{ fontFamily: 'Noto Kufi Arabic, sans-serif', fontSize: '1rem' }}
            >
              عرض المزيد
            </Button>
          </Box>
        </Box>
        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card 
                sx={{ 
                  transition: '0.3s', 
                  '&:hover': { 
                    boxShadow: 4, 
                    transform: 'scale(1.02)' 
                  },
                  borderRadius: 2 
                }}
              >
                <Box display="flex" justifyContent="space-between" p={3}>
                  <Typography variant="h6" component="span" style={{ fontSize: '1rem' }}>Today's Combo Offer</Typography>
                  <Badge
                    badgeContent={product.combo}
                    color="info"
                    sx={{ borderRadius: "50%", width: 35, height: 35, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  />
                </Box>
                <CardMedia
                  component="img"
                  image={product.img}
                  alt={product.title}
                  sx={{ height: { xs: 150, sm: 200 }, objectFit: "cover", borderTopLeftRadius: 2, borderTopRightRadius: 2 }} 
                />
                <CardContent>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="body2" color="text.secondary">
                      <a href="#!" style={{ textDecoration: 'none', color: 'inherit' }}>
                        {product.category}
                      </a>
                    </Typography>
                    <Typography variant="body2" color="error">
                      <s>{product.originalPrice}</s>
                    </Typography>
                  </Box>

                  <Box display="flex" justifyContent="space-between" mb={3}>
                    <Typography variant="h5" style={{ fontSize: '1rem' }}>{product.title}</Typography>
                    <Typography variant="h5" color="text.primary">{product.price}</Typography>
                  </Box>

                  <Box display="flex" justifyContent="space-between" mb={2}>
                    <Typography variant="body2" color="text.secondary">
                      Available: <strong>{product.available}</strong>
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {Array.from({ length: Math.floor(product.rating) }, (_, i) => (
                        <StarIcon key={i} color="warning" />
                      ))}
                      {product.rating % 1 !== 0 && <StarHalfIcon color="warning" />}
                      {Array.from({ length: 5 - Math.ceil(product.rating) }, (_, i) => (
                        <StarIcon key={i + 5} color="disabled" />
                      ))}
                    </Box>
                  </Box>
                  {/* Add button here */}
                  <Box mt={2}>
                    <Button 
                      variant="contained" 
                      sx={{ 
                        background: '#1976d2', 
                        color: '#fff', 
                        '&:hover': {
                          background: '#115293',
                        },
                      }}
                      fullWidth
                    >
                      Add to Cart
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
