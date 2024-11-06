import React, { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Tabs,
  Tab,
  FormControl,
  FormLabel,
  TextField,
  Card,
  Button,
} from "@mui/material";
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tab-panel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const Registration = () => {
  const [value, setValue] = useState(0); // State for active tab
  const [loading, setLoading] = useState(false); // State for loading spinner

  const handleTabChange = (event, newValue) => {
    setValue(newValue); // Change tab
  };

  // Customer Form field states
  const [fullname, setfullname] = useState('');
  const [email, setemail] = useState('');
  const [phoneno, setphoneno] = useState('');
  const [address, setaddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!fullname) {
      toast.error('Please enter your full name.');
      return;
    }
    if (!email) {
      toast.error('Please enter your email address.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    if (!phoneno) {
      toast.error('Please enter your phone number.');
      return;
    }
    if (!address) {
      toast.error('Please enter your address.');
      return;
    }

    setLoading(true); // Show loading spinner

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_HOST}/register`, {
        fullname,
        email,
        phoneno,
        address,
      });
      
      if (response.status === 200 || response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Customer Account registered successfully!',
        });

        // Clear form fields after successful registration
        setfullname('');
        setemail('');
        setphoneno('');
        setaddress('');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Registration failed. Please try again.',
        });
      }
    } catch (error) {
      console.error('Registration failed:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Registration failed. Please try again later.',
      });
    } finally {
      setLoading(false); // Reset loading state
    }
  };


    // Seller Form field states
    const [sfullname, setsfullname] = useState('');
    const [semail, setsemail] = useState('');
    const [sphoneno, setsphoneno] = useState('');
    const [saddress, setsaddress] = useState('');
    const [file, setFile] = useState(null); // Ensure this is null initially
    const [Accountstatus] = useState('Not verified');

    // Handle changes in input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'sfullname':
                setsfullname(value);
                break;
            case 'semail':
                setsemail(value);
                break;
            case 'sphoneno':
                setsphoneno(value);
                break;
            case 'saddress':
                setsaddress(value);
                break;
            default:
                break;
        }
    };

    // Handle file input change
    const handleFileChange = (e) => {
        setFile(e.target.files[0]); // Store the first file
    };

    // Submit form data
    const handleSubmitseller = async (e) => {
        e.preventDefault();

        // Prepare form data for submission
        const formData = new FormData();
        formData.append("photo", file); // Append the selected file
        formData.append("sfullname", sfullname);
        formData.append("semail", semail);
        formData.append("sphoneno", sphoneno);
        formData.append("saddress", saddress);
        formData.append("Accountstatus", Accountstatus);

        const config = {
            headers: {
                "Content-Type": "multipart/form-data", // Indicating multipart form
            },
        };

        try {
            // Make the POST request to register the seller
            const res = await axios.post(`${process.env.REACT_APP_API_HOST}/registerseller`, formData, config);

            // Check response for success or failure
            if (res.data.status === 401 || !res.data) {
                // If error, display a failure message
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Registration failed. Please try again!',
                });
            } else {
                // On success, show a success message
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Seller Account registered successfully!',
                });

                // Clear form fields after successful registration
                setsfullname('');
                setsemail('');
                setsphoneno('');
                setsaddress('');
                setFile(null);  // Reset file input to null
            }
        } catch (error) {
            // If there's an error during the request, display a failure message
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Registration failed. Please try again!',
            });
        }
    };

  return (
    <section style={{ backgroundColor: '#f2f3f4', width: '100%', margin: '0 auto', direction: 'rtl' }}>
      <img
        src="https://ehsan.sa/static/images/header-img.svg"
        alt="Header"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
      <Container maxWidth="lg" sx={{ padding: 3 }} style={{ marginTop: '-30px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper
              style={{
                padding: '16px',
                fontFamily: 'Noto Kufi Arabic, sans-serif',
                borderRadius: '20px',
                marginBottom: '20px',
                background: 'linear-gradient(226deg, #214570, #0d8f75)',
              }}
            >
              <Box display="flex" alignItems="center" p={1}>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'Noto Kufi Arabic, sans-serif',
                    color: 'white',
                    fontSize: { xs: '16px', sm: '18px', md: '20px' },
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
            <Paper
              style={{
                padding: '16px',
                fontFamily: 'Noto Kufi Arabic, sans-serif',
                borderRadius: '20px',
                marginBottom: '20px',
                backgroundImage: 'url(https://img.freepik.com/free-vector/emerald-green-curve-frame-template_53876-99027.jpg?t=st=1730700475~exp=1730704075~hmac=653a3607b6b6e5c4318bfee08f3f98c4bd325e8294337ea91519e082001b90ec&w=1380)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <Box display="flex" justifyContent="center" mt={2}>
                <Tabs value={value} onChange={handleTabChange} aria-label="simple tabs example">
                  <Tab label="تسجيل العملاء" sx={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }} />
                  <Tab label="سجل البائع" sx={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }} />
                </Tabs>
              </Box>

              <TabPanel value={value} index={0}>
                <Box display="flex" justifyContent="center">
                  <Card
                    sx={{
                      maxWidth: '400px', // Set maximum width for smaller card
                      width: '100%', // Allow card to take full width until maxWidth
                      padding: '20px',
                      borderRadius: '20px',
                    }}
                  >
                    <h4 style={{ textAlign: 'center', marginBottom: '15px' }}>سجل العميل</h4>
                    <Box sx={{ width: '100%' }}>
                      <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <FormControl fullWidth>
                              <FormLabel htmlFor="fullname" sx={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>الاسم الكامل</FormLabel>
                              <TextField
                                required
                                id="fullname"
                                fullWidth
                                value={fullname}
                                onChange={(e) => setfullname(e.target.value)}
                                inputProps={{ style: { fontFamily: 'Noto Kufi Arabic', padding: '5.5px 10px' } }}
                              />
                            </FormControl>
                          </Grid>

                          <Grid item xs={12}>
                            <FormControl fullWidth>
                              <FormLabel htmlFor="email" sx={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>البريد الإلكتروني</FormLabel>
                              <TextField
                                required
                                type="email"
                                id="email"
                                fullWidth
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                                inputProps={{ style: { fontFamily: 'Noto Kufi Arabic', padding: '5.5px 10px' } }}
                              />
                            </FormControl>
                          </Grid>

                          <Grid item xs={12}>
                            <FormControl fullWidth>
                              <FormLabel htmlFor="phoneno" sx={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>رقم الهاتف</FormLabel>
                              <TextField 
                                required
                                id="phoneno"
                                fullWidth
                                value={phoneno}
                                onChange={(e) => setphoneno(e.target.value)}
                                inputProps={{ style: { fontFamily: 'Noto Kufi Arabic', padding: '5.5px 10px' } }}
                              />
                            </FormControl>
                          </Grid>

                          <Grid item xs={12}>
                            <FormControl fullWidth>
                              <FormLabel htmlFor="address" sx={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>العنوان</FormLabel>
                              <TextField
                                required
                                id="address"
                                fullWidth
                                value={address}
                                onChange={(e) => setaddress(e.target.value)}
                                inputProps={{ style: { fontFamily: 'Noto Kufi Arabic', padding: '5.5px 10px' } }}
                              />
                            </FormControl>
                          </Grid>

                          <Grid item xs={12}>
                            <Box display="flex" justifyContent="center" mt={2}>
                              <Button
                                variant="contained"
                                type="submit"
                                sx={{
                                    borderRadius: '20px',
                                    width: '100%',
                                    background: 'linear-gradient(270deg,#0d8f75 20%,#214570 105%)',
                                    fontFamily: 'Noto Kufi Arabic, sans-serif'
                                  }}
                              >
                                {loading ? 'جاري التسجيل...' : 'يسجل'}
                              </Button>
                            </Box>
                          </Grid>
                        </Grid>
                      </form>
                    </Box>
                  </Card>
                </Box>
              </TabPanel>

              {/* You can implement the vendor registration form inside the second TabPanel here */}
              <TabPanel value={value} index={1}>
              <Box display="flex" justifyContent="center">
                  <Card
                    sx={{
                      maxWidth: '400px', // Set maximum width for smaller card
                      width: '100%', // Allow card to take full width until maxWidth
                      padding: '20px',
                      borderRadius: '20px',
                    }}
                  >
                    <h4 style={{ textAlign: 'center', marginBottom: '15px' }}>سجل البائع</h4>
                    <Box sx={{ width: '100%' }}>
                      <form onSubmit={handleSubmitseller} encType="multipart/form-data">
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <FormControl fullWidth>
                              <FormLabel htmlFor="fullname" sx={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}> الكامل</FormLabel>
                              <TextField
                                required
                                id="sfullname"
                                fullWidth
                                name="sfullname" 
                                value={sfullname} 
                                onChange={handleChange}
                                inputProps={{ style: { fontFamily: 'Noto Kufi Arabic', padding: '5.5px 10px' } }}
                              />
                            </FormControl>
                          </Grid>

                          <Grid item xs={12}>
                            <FormControl fullWidth>
                              <FormLabel htmlFor="email" sx={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>البريد الإلكتروني</FormLabel>
                              <TextField
                                required
                                type="email"
                                id="semail"
                                fullWidth
                                name="semail" 
                                value={semail} 
                                onChange={handleChange}
                                inputProps={{ style: { fontFamily: 'Noto Kufi Arabic', padding: '5.5px 10px' } }}
                              />
                            </FormControl>
                          </Grid>

                          <Grid item xs={12}>
                            <FormControl fullWidth>
                              <FormLabel htmlFor="sphoneno" sx={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>رقم الهاتف</FormLabel>
                              <TextField 
                                required
                                id="sphoneno"
                                fullWidth
                                name="sphoneno"  
                                value={sphoneno} 
                                onChange={handleChange}
                                inputProps={{ style: { fontFamily: 'Noto Kufi Arabic', padding: '5.5px 10px' } }}
                              />
                            </FormControl>
                          </Grid>

                          <Grid item xs={12}>
                            <FormControl fullWidth>
                              <FormLabel htmlFor="address" sx={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>العنوان</FormLabel>
                              <TextField
                                required
                                id="saddress"
                                fullWidth
                                name="saddress"  
                                value={saddress} 
                                onChange={handleChange}
                                inputProps={{ style: { fontFamily: 'Noto Kufi Arabic', padding: '5.5px 10px' } }}
                              />
                            </FormControl>
                          </Grid>

                          <Grid item xs={12}>
                            <FormControl fullWidth>
                              <FormLabel htmlFor="idProof" sx={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>إثبات الهوية</FormLabel>
                              <input
                                accept="image/*,.pdf"
                                id="photo"
                                required
                                type="file" 
                                onChange={handleFileChange} 
                                name='photo'                            
                                style={{ fontFamily: 'Noto Kufi Arabic', width: '100%', outline: '1px solid #d7dbdd', borderRadius:'4px' }}
                                
                              />
                            </FormControl>
                          </Grid>

                          <Grid item xs={12}>
                            <Box display="flex" justifyContent="center" mt={2}>
                              <Button
                                variant="contained"
                                type="submit"
                                sx={{
                                    borderRadius: '20px',
                                    width: '100%',
                                    background: 'linear-gradient(270deg,#0d8f75 20%,#214570 105%)',
                                    fontFamily: 'Noto Kufi Arabic, sans-serif'
                                  }}
                              >
                                {loading ? 'جاري التسجيل...' : 'يسجل'}
                              </Button>
                            </Box>
                          </Grid>
                        </Grid>
                      </form>
                    </Box>
                  </Card>
                </Box>
              </TabPanel>
            </Paper>
          </Grid>
        </Grid>
        <ToastContainer />
      </Container>
    </section>
  );
};

export default Registration;