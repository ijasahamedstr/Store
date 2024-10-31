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
} from "@mui/material";
import { TextField, Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function EcommerceProductListing() {
  const products = [
    {
      title: "HP Notebook",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp",
      combo: "x4",
    },
    {
      title: "HP Envy",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp",
      combo: "x2",
    },
    {
      title: "Toshiba B77",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp",
      combo: "x3",
    },
    {
      title: "Lenovo ThinkPad",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp",
      combo: "x1",
    },
    {
      title: "Dell XPS 13",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/8.webp",
      combo: "x2",
    },
    {
      title: "Asus ZenBook",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/9.webp",
      combo: "x1",
    },
  ];

  return (
    <section style={{ backgroundColor: '#f2f3f4', width: '100%', margin: '0 auto', marginTop: '-50px' }}>
      <Container fluid maxWidth="xl" className="my-5" sx={{ padding: 3 }}>
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginTop: '20px', marginBottom: '20px' }}>
          <img
            width="400"
            src="https://ehsan.sa/assets/images/homepage/ahseno-ayah.svg"
            alt="وَأَحْسِنُوا ۛ إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ"
            style={{ marginBottom: '15px' }}
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
                fontSize: { xs: '1rem', sm: '1.1rem' },
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
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  transition: '0.3s',
                  '&:hover': {
                    boxShadow: 4,
                    transform: 'scale(1.02)',
                  },
                  borderRadius: 2,
                }}
              >
                <Box display="flex" justifyContent="space-between" p={2}>
                  <Typography variant="h6" component="span" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif', fontSize: '0.9rem' }}>
                    تأثيث منازل المتعففين
                  </Typography>
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
                  <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
                    <Grid container spacing={1} justifyContent="space-between">
                      <Grid item xs={8}>
                        <TextField
                          label="Amount"
                          variant="outlined"
                          size="small"
                          InputProps={{
                            style: {
                              borderRadius: '20px',
                            },
                          }}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{
                            borderRadius: '50px',
                            fontFamily: 'Noto Kufi Arabic, sans-serif',
                            padding: { xs: '6px 12px', sm: '8px 16px' },
                            width: '100%',
                            fontSize: { xs: '0.875rem', sm: '1rem' },
                          }}
                        >
                          تبرع الآن
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box mt={1}>
                    <Button
                      variant="contained"
                      startIcon={<AddShoppingCartIcon />}
                      sx={{
                        background: 'linear-gradient(90deg, #2196F3, #21CBF3)',
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
                      أضف إلى السلة
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
