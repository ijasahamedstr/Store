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
    const [value, setValue] = useState(0); // Initialize state for tab value

    const handleTabChange = (event, newValue) => {
        setValue(newValue); // Update state when tab changes
    };

    // Database Conncect Endpoint 

const [fullname, setfullname] = useState('');
const [email, setemail] = useState('');
const [phoneno, setphoneno] = useState('');
const [address, setaddress] = useState('');
const [proofimage, setproofimage] = useState('');
const [accountstatus, setaccountstatus] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (fullname === '') {
      toast.error('Please enter your full name.');
      return;
    }
    if (email === '') {
      toast.error('Please enter your email address.');
      return;
    }
    if (!email.includes('@')) {
      toast.error('Please enter a valid email address.');
      return;
    }
    if (phoneno === '') {
      toast.error('Please enter your phone number.');
      return;
    }
    if (address === '') {
        toast.error('Please enter your phone number.');
        return;
    }

    if (proofimage === '') {
        toast.error('Please enter your phone number.');
        return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_HOST}/register`, {
        fullname,
        email,
        phoneno,
        address,
        proofimage,
        accountstatus
      });
      
      if (response.status === 200) {
        console.log('Registration successful:', response.data);
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Account registered successfully!',
        });

        // Clear form fields after successful registration
        setfullname('');
        setemail('');
        setphoneno('');
        setaddress('');
        setproofimage('');
        setaccountstatus('');
      } else {
        // Handle unexpected response status
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Registration failed. Please try again.',
        });
      }
    } catch (error) {
      console.error('Registration failed:', error);
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Account registered successfully!',
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
                        <Paper style={{ padding: '16px', fontFamily: 'Noto Kufi Arabic, sans-serif', borderRadius: '20px', marginBottom: '20px', background: 'linear-gradient(226deg, #214570, #0d8f75)' }}>
                            <Box display="flex" alignItems="center" p={1}>
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
                                        <h4 style={{textAlign:'center',marginBottom:'15px'}}>سجل البائع</h4>
                                        <Box sx={{ width: '100%' }}>
                                            <form>
                                                <Grid container>
                                                    <Grid item xs={12}>
                                                        <FormControl  fullWidth>
                                                            <FormLabel
                                                                htmlFor="name"
                                                                sx={{
                                                                    fontFamily: 'Noto Kufi Arabic',
                                                                    fontSize: {
                                                                        xs: '10px',
                                                                        sm: '12px',
                                                                        md: '14px',
                                                                    },
                                                                    marginBottom: '10px'
                                                                }}
                                                            >
                                                                الاسم الكامل
                                                            </FormLabel>
                                                            <TextField
                                                                autoComplete="name"
                                                                name="name"
                                                                required
                                                                id="name"
                                                                inputProps={{ style: { fontFamily: 'Noto Kufi Arabic', padding: '5.5px 10px' } }}
                                                                fullWidth
                                                            />
                                                        </FormControl>
                                                    </Grid>

                                                    <Grid item xs={12}>
                                                        <FormControl  fullWidth>
                                                            <FormLabel
                                                                htmlFor="email"
                                                                sx={{
                                                                    fontFamily: 'Noto Kufi Arabic',
                                                                    fontSize: {
                                                                        xs: '10px',
                                                                        sm: '12px',
                                                                        md: '14px',
                                                                    },
                                                                    marginBottom: '10px'
                                                                }}
                                                            >
                                                                البريد الإلكتروني
                                                            </FormLabel>
                                                            <TextField
                                                                autoComplete="email"
                                                                name="email"
                                                                required
                                                                id="email"
                                                                inputProps={{ style: { fontFamily: 'Noto Kufi Arabic', padding: '5.5px 10px' } }}
                                                                fullWidth
                                                            />
                                                        </FormControl>
                                                    </Grid>

                                                    <Grid item xs={12}>
                                                        <FormControl  fullWidth>
                                                            <FormLabel
                                                                htmlFor="phone"
                                                                sx={{
                                                                    fontFamily: 'Noto Kufi Arabic',
                                                                    fontSize: {
                                                                        xs: '10px',
                                                                        sm: '12px',
                                                                        md: '14px',
                                                                    },
                                                                    marginBottom: '10px'
                                                                }}
                                                            >
                                                                رقم الهاتف
                                                            </FormLabel>
                                                            <TextField
                                                                autoComplete="tel"
                                                                name="phone"
                                                                required
                                                                id="phone"
                                                                inputProps={{ style: { fontFamily: 'Noto Kufi Arabic', padding: '5.5px 10px' } }}
                                                                fullWidth
                                                            />
                                                        </FormControl>
                                                    </Grid>

                                                    <Grid item xs={12}>
                                                        <FormControl fullWidth>
                                                            <FormLabel
                                                                htmlFor="address"
                                                                sx={{
                                                                    fontFamily: 'Noto Kufi Arabic',
                                                                    fontSize: {
                                                                        xs: '10px',
                                                                        sm: '12px',
                                                                        md: '14px',
                                                                    },
                                                                    marginBottom: '10px'
                                                                }}
                                                            >
                                                                العنوان
                                                            </FormLabel>
                                                            <TextField
                                                                autoComplete="address"
                                                                name="address"
                                                                required
                                                                id="address"
                                                                inputProps={{ style: { fontFamily: 'Noto Kufi Arabic', padding: '5.5px 10px' } }}
                                                                fullWidth
                                                            />
                                                        </FormControl>
                                                    </Grid>

                                                    <Grid item xs={12}>
                                                        <FormControl fullWidth>
                                                            <FormLabel
                                                                htmlFor="idProof"
                                                                sx={{
                                                                    fontFamily: 'Noto Kufi Arabic',
                                                                    fontSize: {
                                                                        xs: '10px',
                                                                        sm: '12px',
                                                                        md: '14px',
                                                                    },
                                                                    marginBottom: '10px'
                                                                }}
                                                            >
                                                                تحميل إثبات الهوية
                                                            </FormLabel>
                                                            <Box
                                                                sx={{
                                                                    border: '1px solid',
                                                                    borderRadius: '4px',
                                                                    padding: '5px',
                                                                }}
                                                            >
                                                                <input
                                                                    accept="image/*,.pdf"
                                                                    type="file"
                                                                    name="idProof"
                                                                    id="idProof"
                                                                    required
                                                                    style={{ fontFamily: 'Noto Kufi Arabic', width: '100%' }}
                                                                />
                                                            </Box>
                                                        </FormControl>
                                                    </Grid>

                                                    <Grid item xs={12}>
                                                        <Box display="flex" justifyContent="center" mt={2}>
                                                            <Button
                                                                variant="contained"
                                                                type="submit"
                                                                sx={{ borderRadius: '20px', width: '100%', background: 'linear-gradient(270deg,#0d8f75 20%,#214570 105%)', fontFamily: 'Noto Kufi Arabic, sans-serif' }}
                                                            >
                                                                يسجل
                                                            </Button>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        </Box>
                                    </Card>
                                </Box>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                {/* Content for the second tab goes here */}
                            </TabPanel>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default Registration;
