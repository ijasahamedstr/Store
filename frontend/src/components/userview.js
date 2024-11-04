// src/ProductView.js
import React, { useState } from 'react';
import {
    Container,
    Grid,
    Paper,
    Typography,
    Box,
    CardMedia,
    Card,
    CardContent,
    Button,
    Pagination,
    Dialog,
    DialogContent,
    IconButton,
} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import '../css/ProductsingleView.css';
import { Link } from 'react-router-dom';

const Userview = () => {
    const products = [
        { title: "HP Notebook", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp", combo: "x4" },
        { title: "HP Envy", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp", combo: "x2" },
        { title: "Toshiba B77", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp", combo: "x3" },
        { title: "Lenovo ThinkPad", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp", combo: "x1" },
        { title: "Dell XPS 13", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/8.webp", combo: "x2" },
        { title: "Asus ZenBook", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/9.webp", combo: "x1" },
        { title: "Toshiba B77", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp", combo: "x3" },
        { title: "Lenovo ThinkPad", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp", combo: "x1" },
        { title: "Dell XPS 13", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/8.webp", combo: "x2" },
        { title: "Asus ZenBook", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/9.webp", combo: "x1" },
        // Add more products if necessary for testing pagination
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const itemsPerPage = 8; // Adjust the number of items per page

    // Calculate the indices for the current page
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Calculate total pages
    const totalPages = Math.ceil(products.length / itemsPerPage);

    const handleImageClick = (img) => {
        setSelectedImage(img);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedImage(null);
    };

    return (
        <section style={{ backgroundColor: '#f2f3f4', width: '100%', margin: '0 auto' }}>
            <img 
                src="https://ehsan.sa/static/images/header-img.svg" 
                alt="Header" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <Container maxWidth="lg" sx={{ padding: 3 }} style={{ marginTop: '-30px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper style={{ padding: '16px', fontFamily: 'Noto Kufi Arabic, sans-serif', borderRadius: '20px', marginBottom: '20px', background: 'linear-gradient(226deg, #214570, #0d8f75)' }}>
                            <Box display="flex" alignItems="center" p={1} style={{ justifyContent: 'space-between' }}>
                                <CardMedia
                                    component="img"
                                    src='https://via.placeholder.com/80'
                                    alt="User Profile"
                                    sx={{
                                        borderRadius: '50%',
                                        width: 80,
                                        height: 80,
                                        marginRight: 1,
                                        border: '4px solid white',
                                        boxSizing: 'border-box'
                                    }}
                                />
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontFamily: 'Noto Kufi Arabic, sans-serif',
                                        color: 'white',
                                        fontSize: {
                                            xs: '16px',
                                            sm: '18px',
                                            md: '20px',
                                        }
                                    }}
                                >
                                    عبد الرسول إيجاس أحمد
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper style={{ padding: '16px', fontFamily: 'Noto Kufi Arabic, sans-serif', borderRadius: '20px', marginBottom: '20px' }}>
                            <Grid container spacing={2}>
                                {currentProducts.map((product, index) => (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
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
                                            </Box>
                                            <CardMedia
                                                component="img"
                                                image={product.img}
                                                alt={product.title}
                                                onClick={() => handleImageClick(product.img)} // Click handler for image
                                                sx={{ height: { xs: 150, sm: 200 }, objectFit: "cover", borderTopLeftRadius: 2, borderTopRightRadius: 2, cursor: 'pointer' }} // Add cursor style
                                            />
                                            <CardContent>
                                                <Box mt={1}>
                                                    <Button
                                                     component={Link} to="/ProductView"
                                                        variant="contained"
                                                        startIcon={<AddShoppingCartIcon />}
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
                            <Box display="flex" justifyContent="center" mt={2}>
                                <Pagination
                                    count={totalPages}
                                    page={currentPage}
                                    onChange={(event, value) => setCurrentPage(value)}
                                    color="primary"
                                />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            {/* Dialog for Image Popup */}
            <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
                <DialogContent>
                    <IconButton 
                        onClick={handleCloseDialog} 
                        sx={{ position: 'absolute', right: 8, top: 8 }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <CardMedia
                        component="img"
                        image={selectedImage}
                        alt="Selected Product"
                        sx={{ height: 'auto', maxHeight: 500, objectFit: 'contain' }}
                    />
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default Userview;
