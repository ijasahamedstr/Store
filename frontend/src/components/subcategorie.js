import React, { useState } from "react";
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
  Pagination,
  Dialog,
  DialogContent,
} from "@mui/material";
import { Link } from 'react-router-dom';

function Subcategorie() {
  const products = [
    // List of products
    { title: "HP Notebook", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp",username: "ايجاس احمد", profileImg: "https://via.placeholder.com/40"},
    { title: "HP Envy", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp",username: "عبد الله", profileImg: "https://via.placeholder.com/40"},
    { title: "Toshiba B77", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp",username: "احمد", profileImg: "https://via.placeholder.com/40"},
    { title: "Lenovo ThinkPad", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp",username: "User1", profileImg: "https://via.placeholder.com/40"},
    { title: "Dell XPS 13", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/8.webp",username: "User1", profileImg: "https://via.placeholder.com/40"},
    { title: "Asus ZenBook", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/9.webp",username: "User1", profileImg: "https://via.placeholder.com/40" },
    { title: "Toshiba B77", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp",username: "User1", profileImg: "https://via.placeholder.com/40"},
    { title: "Lenovo ThinkPad", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp",username: "User1", profileImg: "https://via.placeholder.com/40" },
    { title: "Dell XPS 13", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/8.webp",username: "User1", profileImg: "https://via.placeholder.com/40"},
    { title: "Asus ZenBook", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/9.webp",username: "User1", profileImg: "https://via.placeholder.com/40"},
    { title: "Dell XPS 13", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/8.webp",username: "User1", profileImg: "https://via.placeholder.com/40"},
    { title: "Asus ZenBook", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/9.webp",username: "User1", profileImg: "https://via.placeholder.com/40"},
    { title: "Toshiba B77", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp",username: "User1", profileImg: "https://via.placeholder.com/40" },
    { title: "Lenovo ThinkPad", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp",username: "User1", profileImg: "https://via.placeholder.com/40"},
    { title: "Dell XPS 13", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/8.webp",username: "User1", profileImg: "https://via.placeholder.com/40"},
    { title: "Asus ZenBook", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/9.webp",username: "User1", profileImg: "https://via.placeholder.com/40"},
    { title: "Dell XPS 13", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/8.webp",username: "User1", profileImg: "https://via.placeholder.com/40"},
    { title: "Asus ZenBook", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/9.webp",username: "User1", profileImg: "https://via.placeholder.com/40"},
    { title: "Dell XPS 13", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/8.webp",username: "User1", profileImg: "https://via.placeholder.com/40"},
    { title: "Asus ZenBook", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/9.webp",username: "User1", profileImg: "https://via.placeholder.com/40"},
    // ... other products
  ];

  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const itemsPerPage = 20;
  const indexOfLastProduct = page * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage("");
  };

  return (
    <section style={{ backgroundColor: '#f2f3f4', width: '100%', margin: '0 auto' }}>
      <img 
        src="https://ehsan.sa/static/images/header-img.svg" 
        alt="Header" 
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
      <Container maxWidth="xl" sx={{ padding: 3 }} style={{ direction: 'rtl' }}>
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginY: '20px' }}>
          <img
            src="https://ehsan.sa/assets/images/homepage/ahseno-ayah.svg"
            alt="وَأَحْسِنُوا ۛ إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ"
            style={{ width: '100%', maxWidth: '400px', height: 'auto', marginBottom: '15px', marginTop: '-50px' }}
          />
        </Box>
        <Grid container spacing={2}>
          {currentProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
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
                  <Typography variant="h6" component="span" sx={{ fontFamily: 'Noto Kufi Arabic, sans-serif', fontSize: '0.9rem' }}>
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
                  onClick={() => handleImageClick(product.img)} // Add onClick handler
                  sx={{ height: { xs: 150, sm: 200 }, objectFit: "cover", borderTopLeftRadius: 2, borderTopRightRadius: 2, cursor: 'pointer' }} // Add cursor pointer
                />
                <Box display="flex" alignItems="center" p={1}>
                  <CardMedia
                    component="img"
                    image={product.profileImg}
                    alt="User Profile"
                    sx={{
                      borderRadius: '50%',
                      width: 50,
                      height: 50,
                      marginRight: 1,
                      border: '4px solid white',
                      boxShadow: 2,
                    }}
                    style={{ marginLeft: '8px' }}
                  />
                  <Typography variant="body2" sx={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                    {product.username}
                  </Typography>
                </Box>
                <CardContent>
                  <Box mt={1}>
                    <Button
                      component={Link} to="/userview"
                      variant="contained"
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
                      أضف إلى السلة
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box display="flex" justifyContent="center" sx={{ marginTop: 3 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
            variant="outlined"
            shape="rounded"
          />
        </Box>
      </Container>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent>
          <img src={selectedImage} alt="Selected" style={{ width: '100%', height: 'auto' }} />
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default Subcategorie;
