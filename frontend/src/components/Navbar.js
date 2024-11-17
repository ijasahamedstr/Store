import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Drawer from '@mui/material/Drawer';

const pages1 = ['اتصل بنا', 'من نحن']; // Pages
const settings = ['Login', 'Register']; // User settings

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get current location

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const drawerList = () => (
    <Box
      sx={{ width: 250, fontFamily: 'Noto Kufi Arabic' }} // Apply font-family here
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      dir="rtl" // RTL direction for the Drawer content
    >
      {/* Logo */}
      <Box sx={{ padding: 2, textAlign: 'center' }}>
        <img
          src='https://i.ibb.co/7Xhq73t/LOGO-Laser-platform-for-Disability.png'
          alt="Logo"
          style={{ height: '40px' }}
          onClick={() => navigate('/')} // Ensure logo click navigates home
        />
      </Box>

      {/* Navigation Pages 1 */}

      {/* Navigation Pages 2 */}
      <Box sx={{ marginBottom: 2 }}>
        {pages1.map((page) => (
          <MenuItem
            key={page}
            component={Link}
            to={`/${page.toLowerCase()}`}  // Corrected the path interpolation
            onClick={toggleDrawer(false)}
            sx={{
              backgroundColor: location.pathname === `/${page.toLowerCase()}` ? '#06f9f3' : 'transparent',
              '&:hover': {
                backgroundColor: '#444',
              },
              color: location.pathname === `/${page.toLowerCase()}` ? '#000' : 'inherit',
            }}
          >
            <Typography sx={{ textAlign: 'center', fontFamily: 'Noto Kufi Arabic' }}>{page}</Typography>
          </MenuItem>
        ))}
      </Box>

      {/* User Settings */}
      <Box>
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={() => {
            handleCloseUserMenu();
            navigate(`/${setting.toLowerCase()}`);  // Corrected the path interpolation
          }} >
            <Typography sx={{ textAlign: 'center', fontFamily: 'Noto Kufi Arabic' }}>{setting}</Typography>
          </MenuItem>
        ))}
      </Box>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ background: '#000', height: '100px' }} dir="rtl">
      <Container
        maxWidth="xxl"
        sx={{
          '@media (min-width: 1600px)': {
            maxWidth: '1900px', // Simulate XXL breakpoint for larger screens
          },
        }}
      >
        <Toolbar disableGutters sx={{ height: '100px', display: 'flex', justifyContent: 'space-between' }}> {/* Flex container */}

          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              fontSize: { xs: '20px', sm: '30px', md: '40px' }, // Font size adjustment for responsive design
              paddingLeft: '16px', // Added padding to give space around the logo
            }}
          >
            <img src='https://i.ibb.co/7Xhq73t/LOGO-Laser-platform-for-Disability.png' alt="Logo" style={{ height: '80px' }} />
          </Typography>

          {/* Desktop Menu (Navigation Pages) */}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start',paddingLeft:'20px' }} dir="ltr"> {/* Align to the left */}
            {pages1.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                component={Link}
                to={`/${page.toLowerCase()}`}  // Corrected the path interpolation
                sx={{
                  my: 0.5,  // Reduced vertical margin to make buttons closer
                  mx: 1,    // Optional: Reduced horizontal margin between buttons
                  color: 'white',
                  display: 'block',
                  fontFamily: 'Noto Kufi Arabic',
                  fontSize: { xs: '12px', sm: '15px', md: '20px' }, // Adjust font size for responsiveness
                  borderRadius: '50px',  // Rounded buttons  // Optional: Adjust padding for smaller buttons
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu (Drawer) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} dir="rtl">
            <IconButton
              size="large"
              aria-label="open navigation menu"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              sx={{
                '& .MuiDrawer-paper': {
                  backgroundColor: '#000',
                  color: '#fff',
                },
              }}
            >
              {drawerList()}
            </Drawer>
          </Box>

          {/* User Settings and Cart Icons */}
          <Box sx={{ flexGrow: 0, ml: 2 }} dir="rtl">
            <IconButton color="inherit" component={Link} to="/cart" aria-label="shopping cart" sx={{ paddingLeft: '20px' }}>
              <ShoppingCartIcon />
            </IconButton>

            {/* User Settings Menu */}
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} aria-label="user menu">
                <Avatar alt="User Name" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => {
                  handleCloseUserMenu();
                  navigate(`/${setting.toLowerCase()}`);  // Corrected the path interpolation
                }}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
