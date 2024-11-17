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

const Userview = ({ handleCloseDialog, selectedProduct, isInStock }) => {
    const products = [
        { title: "HP Notebook", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp", combo: "x4", description: "A powerful notebook for work and play." },
        { title: "HP Envy", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp", combo: "x2", description: "Stylish and high-performance." },
        { title: "Toshiba B77", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp", combo: "x3", description: "Reliable for everyday tasks." },
        { title: "Lenovo ThinkPad", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp", combo: "x1", description: "Designed for business professionals." },
        { title: "Dell XPS 13", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/8.webp", combo: "x2", description: "Ultra-portable and powerful." },
        { title: "Asus ZenBook", img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/9.webp", combo: "x1", description: "Elegance and performance combined." },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [openDialog, setOpenDialog] = useState(false); // state for dialog
    const [selectedProductState, setSelectedProductState] = useState(null);
    const itemsPerPage = 8; // Adjust the number of items per page

    const [isInStockState] = useState(true); // Initialize stock state

    // Calculate the indices for the current page
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Calculate total pages
    const totalPages = Math.ceil(products.length / itemsPerPage);

    const handleImageClick = (product) => {
        setSelectedProductState(product); // Set the selected product
        setOpenDialog(true);
    };

    const handleCloseDialogInternal = () => {
        setOpenDialog(false);
        setSelectedProductState(null);
    };

    const [openFullScreen, setOpenFullScreen] = useState(false);

    // Handle closing the full-screen modal
    const handleCloseFullScreen = () => {
        setOpenFullScreen(false);
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
                                                onClick={() => handleImageClick(product)} // Click handler for image
                                                sx={{ height: { xs: 150, sm: 200 }, objectFit: "cover", borderTopLeftRadius: 2, borderTopRightRadius: 2, cursor: 'pointer' }} // Add cursor style
                                            />
                                            <CardContent>
                                                <Box mt={1}>
                                                    <Button
                                                         onClick={() => handleImageClick(product)}
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
            <Dialog open={openDialog} onClose={handleCloseDialogInternal} maxWidth="lg" fullWidth>
                <DialogContent>
                    <IconButton onClick={handleCloseDialogInternal} sx={{ position: 'absolute', right: 8, top: 8 }}>
                        <CloseIcon />
                    </IconButton>
                    {selectedProductState && selectedProductState.img && (
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                {/* Image with zoom feature */}
                                <CardMedia
                                    component="img"
                                    image={selectedProductState.img}
                                    alt={selectedProductState.title}
                                    sx={{
                                        height: 'auto',
                                        maxHeight: 500,
                                        objectFit: 'contain',
                                        cursor: 'zoom-in',
                                    }}
                                    onClick={() => setOpenFullScreen(true)}  // Open full-screen on image click
                                />
                               <Button 
                                variant="contained" 
                                color="primary"
                                sx={{
                                    background: 'linear-gradient(270deg,#0d8f75 20%,#214570 105%)',
                                    color: '#fff',
                                    '&:hover': {
                                        background: '#115293',
                                    },
                                    padding: { xs: '6px 12px', sm: '8px 16px' },
                                    fontSize: { xs: '0.875rem', sm: '1.25rem' }, // Make button text bigger
                                    width: '-webkit-fill-available', // Ensures the button fills available width
                                }}
                                style={{ marginTop: '20px' }}
                                onClick={() => setOpenFullScreen(true)} 
                            >
                                ZOOM In
                            </Button>

                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ direction: 'rtl' }}>
                    {/* Title with bigger font size */}
                    <Typography 
                        variant="h5" 
                        sx={{ marginTop: 4, fontFamily: 'Noto Kufi Arabic, sans-serif', direction: 'rtl', fontSize: '1.75rem' }}
                    >
                        التعريف بالسيرة النبوية
                    </Typography>
                    
                    {/* Price with bigger font size */}
                    <Typography 
                        variant="h4" 
                        color="primary" 
                        style={{ margin: '10px 0', fontSize: '1.5rem' }}
                    >
                        $100
                    </Typography>

                    {/* In Stock or Out of Stock with bigger font size */}
                    <Typography 
                        variant="h6" 
                        color={isInStock ? 'green' : 'red'} 
                        style={{ margin: '10px 0', fontSize: '1.25rem' }}
                    >
                        {isInStock ? 'In Stock' : 'Out of Stock'}
                    </Typography>

                    {/* Description with bigger font size */}
                    <Typography 
                        variant="body1" 
                        color="textSecondary" 
                        sx={{ marginTop: 2, fontFamily: 'Noto Kufi Arabic, sans-serif', direction: 'rtl', fontSize: '1.125rem' }}
                    >
                        يسعى هذا المشروع للتوعية بالسيرة النبوية ونشر التعاليم الإسلامية عن طريق تنظيم الزيارات للمتحف الدولي للسيرة النبوية والحضارة الإسلامية للمساهمة في تعريفهم بسيرة النبي صلى الله عليه وسلم.
                    </Typography>

                    {/* Buy Now Button */}
                    <Button 
                        variant="contained" 
                        color="primary"
                        sx={{
                            background: 'linear-gradient(270deg,#0d8f75 20%,#214570 105%)',
                            color: '#fff',
                            '&:hover': {
                                background: '#115293',
                            },
                            padding: { xs: '6px 12px', sm: '8px 16px' },
                            fontSize: { xs: '0.875rem', sm: '1.25rem' }, // Make button text bigger
                        }}
                        style={{ marginTop: '20px' }}
                        disabled={!isInStock} // Disable button if out of stock
                    >
                        Buy Now
                    </Button>

                    {/* Reviews with bigger font size */}
                    <Typography variant="body2" style={{ marginTop: '10px', fontSize: '1rem' }}>
                        ★★★★☆ (50 Reviews)
                    </Typography>
                </Grid>
                        </Grid>
                    )}
                </DialogContent>
            </Dialog>

            {/* Full-Screen Image Modal */}
            <Dialog
  open={openFullScreen}
  onClose={handleCloseFullScreen}
  maxWidth="false"
  fullWidth
>
  <DialogContent
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',  // Needed to position the close button properly
    }}
  >
    {/* Close Button */}
    <IconButton
      onClick={handleCloseFullScreen}
      sx={{
        position: 'absolute',
        right: 16,  // Adjusted to place the button properly
        top: 16,    // Adjusted to place the button properly
        color: 'Black',
        zIndex: 1000,  // Ensures the close button is on top of the image
      }}
    >
      <CloseIcon />
    </IconButton>

    {/* Image inside the Dialog */}
    <img
      src={selectedProductState?.img || ''}
      alt={selectedProductState?.title || 'Product Image'}
      style={{
        width: '100%',
        maxHeight: '90vh',  // Ensure the image fits within the view
        objectFit: 'contain',
        borderRadius: '8px', // Optional: rounded corners for the image
      }}
    />
  </DialogContent>
</Dialog>

        </section>
    );
};

export default Userview;
