import React from 'react';
import { AppBar, Toolbar, IconButton, Container, Typography } from '@mui/material';
import { Facebook, Twitter, Google, Instagram, LinkedIn, GitHub } from '@mui/icons-material';

export default function Footer() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#212121', color: '#fff' }}>
      <Container maxWidth="lg">
        <Toolbar style={{marginTop:'15px'}} sx={{ justifyContent: 'center' }}>
          <IconButton
            color="inherit"
            href="#!"
            aria-label="facebook"
            sx={{ borderRadius: '50%', margin: '0 8px', border: '1px solid #fff',color:'#1e8449' }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            color="inherit"
            href="#!"
            aria-label="twitter"
            sx={{ borderRadius: '50%', margin: '0 8px', border: '1px solid #fff',color:'#1e8449' }}
          >
            <Twitter />
          </IconButton>
          <IconButton
            color="inherit"
            href="#!"
            aria-label="google"
            sx={{ borderRadius: '50%', margin: '0 8px', border: '1px solid #fff',color:'#1e8449' }}
          >
            <Google />
          </IconButton>
          <IconButton
            color="inherit"
            href="#!"
            aria-label="instagram"
            sx={{ borderRadius: '50%', margin: '0 8px', border: '1px solid #fff',color:'#1e8449' }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            color="inherit"
            href="#!"
            aria-label="linkedin"
            sx={{ borderRadius: '50%', margin: '0 8px', border: '1px solid #fff',color:'#1e8449' }}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            color="inherit"
            href="#!"
            aria-label="github"
            sx={{ borderRadius: '50%', margin: '0 8px', border: '1px solid #fff',color:'#1e8449' }}
          >
            <GitHub />
          </IconButton>
        </Toolbar>
      </Container>

      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', padding: '10px 0',fontSize:'19px' }}>
        <Typography variant="body2" align="center">
          © 2020 Copyright: All Rights Reserved
          <a href="https://mdbootstrap.com/" style={{ color: '#fff' }}>
           
          </a>
        </Typography>
      </div>
    </AppBar>
  );
}
