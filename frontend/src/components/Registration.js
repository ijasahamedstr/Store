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
    FormHelperText,
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
    const [value, setValue] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [idProof, setIdProof] = useState(null);
    const [idProofError, setIdProofError] = useState(false);
    const [idProofErrorMessage, setIdProofErrorMessage] = useState('');

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [addressError, setAddressError] = useState(false);
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
    const [addressErrorMessage, setAddressErrorMessage] = useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
        setNameError(false);
        setNameErrorMessage('');
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setEmailError(false);
        setEmailErrorMessage('');
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
        setPhoneError(false);
        setPhoneErrorMessage('');
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
        setAddressError(false);
        setAddressErrorMessage('');
    };

    const handleIdProofChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setIdProof(file);
            setIdProofError(false);
            setIdProofErrorMessage('');
        }
    };

    const validateName = () => {
        if (name.trim() === '') {
            setNameError(true);
            setNameErrorMessage('الاسم مطلوب');
        }
    };

    const validateEmail = () => {
        if (!email.includes('@')) {
            setEmailError(true);
            setEmailErrorMessage('البريد الإلكتروني غير صالح');
        }
    };

    const validatePhone = () => {
        if (phone.trim() === '') {
            setPhoneError(true);
            setPhoneErrorMessage('رقم الهاتف مطلوب');
        }
    };

    const validateAddress = () => {
        if (address.trim() === '') {
            setAddressError(true);
            setAddressErrorMessage('العنوان مطلوب');
        }
    };

    const validateIdProof = () => {
        if (!idProof) {
            setIdProofError(true);
            setIdProofErrorMessage('إثبات الهوية مطلوب');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        validateName();
        validateEmail();
        validatePhone();
        validateAddress();
        validateIdProof();

        if (!nameError && !emailError && !phoneError && !addressError && !idProofError) {
            console.log("Form submitted with:", { name, email, phone, address, idProof });
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
                                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
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
                                        <h4 style={{textAlign:'center',marginBottom:'15px'}}>سجل العملاء</h4>
                                         
                                        <Box sx={{ width: '100%' }}>
                                            <form onSubmit={handleSubmit}>
                                                <Grid container>
                                                    <Grid item xs={12}>
                                                        <FormControl error={nameError} fullWidth>
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
                                                                error={nameError}
                                                                helperText={nameError ? nameErrorMessage : ' '}
                                                                value={name}
                                                                onChange={handleNameChange}
                                                                onBlur={validateName}
                                                                inputProps={{ style: { fontFamily: 'Noto Kufi Arabic', padding: '5.5px 10px' } }}
                                                                fullWidth
                                                            />
                                                        </FormControl>
                                                    </Grid>

                                                    <Grid item xs={12}>
                                                        <FormControl error={emailError} fullWidth>
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
                                                                error={emailError}
                                                                helperText={emailError ? emailErrorMessage : ' '}
                                                                value={email}
                                                                onChange={handleEmailChange}
                                                                onBlur={validateEmail}
                                                                inputProps={{ style: { fontFamily: 'Noto Kufi Arabic', padding: '5.5px 10px' } }}
                                                                fullWidth
                                                            />
                                                        </FormControl>
                                                    </Grid>

                                                    <Grid item xs={12}>
                                                        <FormControl error={phoneError} fullWidth>
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
                                                                error={phoneError}
                                                                helperText={phoneError ? phoneErrorMessage : ' '}
                                                                value={phone}
                                                                onChange={handlePhoneChange}
                                                                onBlur={validatePhone}
                                                                inputProps={{ style: { fontFamily: 'Noto Kufi Arabic', padding: '5.5px 10px' } }}
                                                                fullWidth
                                                            />
                                                        </FormControl>
                                                    </Grid>

                                                    <Grid item xs={12}>
                                                        <FormControl error={addressError} fullWidth>
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
                                                                error={addressError}
                                                                helperText={addressError ? addressErrorMessage : ' '}
                                                                value={address}
                                                                onChange={handleAddressChange}
                                                                onBlur={validateAddress}
                                                                inputProps={{ style: { fontFamily: 'Noto Kufi Arabic', padding: '5.5px 10px' } }}
                                                                fullWidth
                                                            />
                                                        </FormControl>
                                                    </Grid>

                                                    <Grid item xs={12}>
                                                        <FormControl error={idProofError} fullWidth>
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
                                                                    borderColor: idProofError ? 'error.main' : 'grey.400',
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
                                                                    onChange={handleIdProofChange}
                                                                    style={{ fontFamily: 'Noto Kufi Arabic', width: '100%' }}
                                                                />
                                                            </Box>
                                                            {idProofError && <FormHelperText>{idProofErrorMessage}</FormHelperText>}
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
                                            <form onSubmit={handleSubmit}>
                                                <Grid container>
                                                    <Grid item xs={12}>
                                                        <FormControl error={nameError} fullWidth>
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
                                                                error={nameError}
                                                                helperText={nameError ? nameErrorMessage : ' '}
                                                                value={name}
                                                                onChange={handleNameChange}
                                                                onBlur={validateName}
                                                                inputProps={{ style: { fontFamily: 'Noto Kufi Arabic', padding: '5.5px 10px' } }}
                                                                fullWidth
                                                            />
                                                        </FormControl>
                                                    </Grid>

                                                    <Grid item xs={12}>
                                                        <FormControl error={emailError} fullWidth>
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
                                                                error={emailError}
                                                                helperText={emailError ? emailErrorMessage : ' '}
                                                                value={email}
                                                                onChange={handleEmailChange}
                                                                onBlur={validateEmail}
                                                                inputProps={{ style: { fontFamily: 'Noto Kufi Arabic', padding: '5.5px 10px' } }}
                                                                fullWidth
                                                            />
                                                        </FormControl>
                                                    </Grid>

                                                    <Grid item xs={12}>
                                                        <FormControl error={phoneError} fullWidth>
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
                                                                error={phoneError}
                                                                helperText={phoneError ? phoneErrorMessage : ' '}
                                                                value={phone}
                                                                onChange={handlePhoneChange}
                                                                onBlur={validatePhone}
                                                                inputProps={{ style: { fontFamily: 'Noto Kufi Arabic', padding: '5.5px 10px' } }}
                                                                fullWidth
                                                            />
                                                        </FormControl>
                                                    </Grid>

                                                    <Grid item xs={12}>
                                                        <FormControl error={addressError} fullWidth>
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
                                                                error={addressError}
                                                                helperText={addressError ? addressErrorMessage : ' '}
                                                                value={address}
                                                                onChange={handleAddressChange}
                                                                onBlur={validateAddress}
                                                                inputProps={{ style: { fontFamily: 'Noto Kufi Arabic', padding: '5.5px 10px' } }}
                                                                fullWidth
                                                            />
                                                        </FormControl>
                                                    </Grid>

                                                    <Grid item xs={12}>
                                                        <FormControl error={idProofError} fullWidth>
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
                                                                    borderColor: idProofError ? 'error.main' : 'grey.400',
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
                                                                    onChange={handleIdProofChange}
                                                                    style={{ fontFamily: 'Noto Kufi Arabic', width: '100%' }}
                                                                />
                                                            </Box>
                                                            {idProofError && <FormHelperText>{idProofErrorMessage}</FormHelperText>}
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
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default Registration;
