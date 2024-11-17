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
import '../css/subcategorie.css'; // You can move more styles to this file
import headerImg from "../assets/FinalWebFontcopy.jpg";

function Subcategorie() {
  const products = [
    { title: "HP Notebook", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp", username: "ايجاس احمد", profileImg: "https://via.placeholder.com/40" },
    { title: "HP Envy", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp", username: "عبد الله", profileImg: "https://via.placeholder.com/40" },
    { title: "HP Envy", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp", username: "عبد الله", profileImg: "https://via.placeholder.com/40" },
    // Add more products if needed
  ];

  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const itemsPerPage = 9;
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
    <section 
      style={{ 
        width: '100%', 
        margin: '0 auto', 
        backgroundImage: `url(${headerImg})`, 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        paddingTop: '300px' 
      }}
    >
      <img
        src="https://ehsan.sa/static/images/header-img.svg"
        alt="Header"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
      <Container maxWidth="xl" sx={{ padding: 3 }} style={{ direction: 'rtl', marginTop: '150px' }}>
        <Grid container spacing={4}> {/* Increased spacing here */}
          {currentProducts.map(({ title, img, username, profileImg }, index) => (
            <Grid item xs={4} sm={4} md={4} lg={4} key={index}>
              <Card
                sx={{
                  transition: '0.3s',
                  '&:hover': {
                    boxShadow: 4,
                    transform: 'scale(1.02)',
                  },
                  borderRadius: 2,
                  marginBottom: 3, // Added bottom margin for vertical spacing
                }}
              >
                <Box display="flex" justifyContent="space-between" p={2}>
                  <Typography variant="h6" component="span" sx={{ fontFamily: 'Noto Kufi Arabic, sans-serif', fontSize: '0.9rem' }}>
                    تأثيث منازل المتعففين
                  </Typography>
                  <Badge
                    badgeContent={0} // Fallback for undefined combo
                    color="info"
                    sx={{ borderRadius: "50%", width: 35, height: 35, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  />
                </Box>
                <CardMedia
                  component="img"
                  image={img}
                  alt={title}
                  onClick={() => handleImageClick(img)}
                  sx={{ height: { xs: 150, sm: 200 }, objectFit: "cover", borderTopLeftRadius: 2, borderTopRightRadius: 2, cursor: 'pointer' }}
                  loading="lazy"
                  role="button"
                  tabIndex="0"
                />
                <Box display="flex" alignItems="center" p={1}>
                  <CardMedia
                    component="img"
                    image={profileImg}
                    alt="User Profile"
                    sx={{
                      borderRadius: '50%',
                      width: 50,
                      height: 50,
                      marginRight: 1,
                      border: '4px solid white',
                      boxShadow: 2,
                    }}
                  />
                  <Typography variant="body2" sx={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                    {username}
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

      {/* Image Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent>
          <img 
            src={selectedImage} 
            alt="Selected" 
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }} 
          />
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default Subcategorie;
