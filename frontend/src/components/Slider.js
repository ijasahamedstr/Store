import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';

const carouselItems = [
  {
    id: 1,
    img: 'https://ehsanbaner.s3.me-south-1.amazonaws.com/Baners+-+Final/camp2.web.png',
    title: 'Welcome to Our Adventure',
    content: 'Explore the beauty of nature with us.'
  },
  {
    id: 2,
    img: 'https://ehsanbaner.s3.me-south-1.amazonaws.com/Baners+-+Final/moques5.web.jpg',
    title: 'Unforgettable Moments',
    content: 'Create memories that last a lifetime.'
  },
  {
    id: 3,
    img: 'https://ehsanbaner.s3.me-south-1.amazonaws.com/Baners+-+Final/moques5.web.jpg',
    title: 'Join Our Community',
    content: 'Be part of something special.'
  },
];

const FadeCarousel = () => {
  return (
    <Container maxWidth={false} sx={{ padding: 0 }} style={{ paddingLeft: '0px', paddingRight: '0px',paddingTop:'0px' }}>
      <Box sx={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
        <Carousel fade>
          {carouselItems.map(item => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100"
                src={item.img}
                alt={item.title}
                style={{ height: '70vh', objectFit: 'cover' }} // Adjust height as needed
              />
              <Carousel.Caption>
                <Typography variant="h4" sx={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                  {item.content}
                </Typography>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Box>
    </Container>
  );
};

export default FadeCarousel;
