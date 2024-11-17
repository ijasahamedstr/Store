import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Button } from '@mui/material'; // Import Button from Material-UI

export default function Donations() {
  // List of items to display in the unordered list
  const items = ['المنصة لاتستلم أي تبرعات الرجاء التواصل مع المنصات الرسمية'];
  
  // Define paths for each item (you can customize these paths)
  const paths = ['/path1'];

  return (
    <div 
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // Center vertically within the container
        flexDirection: 'column',
        direction: 'rtl',  // Apply RTL direction here
        marginTop: '50px',
        fontFamily: 'Noto Sans Arabic', // Applied globally to the container
      }}
    >
      {/* Outer container with max-width similar to xl */}
      <div style={{ width: '100%', padding: '0 20px', paddingRight: '100px' }}>
        <ul 
          style={{
            listStyleType: 'none',
            paddingRight: '20px',
            marginBottom: '10px',
            fontSize: '50px',  // Large font size for each list item
            color: '#0d8f75',
            display: 'flex',
            flexDirection: 'column',  // Stack items vertically
            alignItems: 'center',  // Center align items horizontally
            justifyContent: 'center', // Ensure buttons are centered
            width: '100%',  // Make sure the list takes the full width
            margin: 0, // Remove default margin
          }}
        >
          {items.map((item, index) => (
            <li 
              key={index} 
              style={{
                marginBottom: '10px', // Margin between list items
                fontFamily: 'Noto Sans Arabic', // Apply Arabic font to each list item
                textAlign: 'center',  // Ensure text is centered inside each list item
                width: '100%',  // Ensure full width of list item
                display: 'flex', // Apply flexbox to the list item
                justifyContent: 'center', // Horizontally center the button inside the li
              }}
            >
              {/* Material-UI Button as Link */}
              <Button
                component={Link}
                to={paths[index]}  // Using the correct path for each button
                variant="contained"
                sx={{
                  my: 0.5,
                  mx: 1,
                  color: 'white',
                  display: 'block',
                  fontFamily: 'Noto Kufi Arabic', // Font for the button itself
                  fontSize: { xs: '12px', sm: '15px', md: '40px' },  // Responsive font size
                  backgroundColor: 'transparent', // Default background
                  '&:hover': { backgroundColor: '#444' },
                  borderRadius: '50px',
                  padding: '6px 14px',
                  background: 'linear-gradient(270deg, #0d8f75 20%, #214570 105%)',  // Gradient background
                  width: { xs: '50%', sm: '50%', md: '50%', lg: '50%' },  // Width remains 50% for all screen sizes
                }}
              >
                {item} {/* Button Text */}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
