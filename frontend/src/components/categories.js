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
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <Box
              {...provided.droppableProps}
              ref={provided.innerRef}
              sx={{ position: 'relative', overflow: 'hidden' }}
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              <Slider {...settings}>
                {items.map((category, index) => (
                  <Draggable key={category.id} draggableId={category.id} index={index}>
                    {(provided) => (
                      <Box
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        sx={{
                          width: 'auto',
                          minWidth: 150,
                          textAlign: 'center',
                          borderRadius: 2,
                          p: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'white',
                          mx: 1,
                          transition: 'background-color 0.2s ease',
                          '&:hover': {
                            backgroundColor: '#f5f5f5',
                          },
                        }}
                      >
                        <Box
                          component="img"
                          src={category.img}
                          alt={category.name}
                          sx={{
                            width: 100,
                            height: 100,
                            borderRadius: '50%',
                            objectFit: 'cover',
                            mb: 1,
                          }}
                        />
                        <Typography variant="h6" sx={{ fontSize: '14px', lineHeight: '1.2' }}>
                          {category.name}
                        </Typography>
                      </Box>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Slider>
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

export default DraggableCardSlider;
