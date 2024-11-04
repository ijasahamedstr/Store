import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/categories.css'; // Ensure your CSS file is imported

const categories = [
  { id: '1', name: 'Electronics', img: 'https://d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/ms.files/navicons/Electronics.svg' },
  { id: '2', name: 'Fashion', img: 'https://d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/ms.files/navicons/Fashion.svg' },
  { id: '3', name: 'Home & Garden', img: 'https://d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/ms.files/navicons/Home-Decor.svg' },
  { id: '4', name: 'Sports', img: 'https://via.placeholder.com/150' },
  { id: '5', name: 'Beauty', img: 'https://d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/ms.files/navicons/Beauty-Personal-Care.svg' },
  { id: '6', name: 'Health & Wellness', img: 'https://d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/ms.files/navicons/Health-Wellness.svg' },
  { id: '7', name: 'Appliances', img: 'https://d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/ms.files/navicons/Appliances.svg' },
  { id: '8', name: 'Automotive', img: 'https://d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/ms.files/navicons/Automotive.svg' },
  { id: '9', name: 'Jewelry', img: 'https://via.placeholder.com/150' },
  { id: '10', name: 'Fitness', img: 'https://via.placeholder.com/150' },
];

const DraggableCardSlider = () => {
  const [items, setItems] = useState(categories);
  const [autoplay, setAutoplay] = useState(true);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(items);
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);
    setItems(reorderedItems);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1500, settings: { slidesToShow: 10, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 5, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    ],
  };

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
};

export default DraggableCardSlider;
