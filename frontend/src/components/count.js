import React from 'react';
import '../css/TextCard.css'; // Import your CSS for styling
import { Container } from 'react-bootstrap';
import Button from '@mui/material/Button';
import { Grid, Box } from '@mui/material';


const TextCard = ({
  title = "إجمالي تبرعات وقف إحسان",
  content = "1,455,427,820",

  title1 = "عدد عمليات التبرع",
  content1 = "168,730,643",

  title2 = "عدد المستفيدين من البرامج الخيرية و التنموية",
  content2 = "2,942,636",

  title3 = "إجمالي التبرعات",
  content3 = "8,402,591,240",

}) => {
  return (
  <section className="text-card-container">
    <Grid container spacing={2}>
        {/* First Card */}
        <Grid item xs={12}>
          <Container fluid maxWidth="lg" style={{ margin: '10px 0', padding: '0 9%', marginTop:'30px' }} >
            <div className="text-card">
              <div className="icon-container">
              <img width="45" src="https://ehsan.sa/assets/images/icons/ramadan1444.svg" />
              </div>
              <h2 className="text-card-title" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif', fontSize: '1.5rem', textAlign: 'center' }}>
                {title}
              </h2>
              <p className="text-card-content" style={{ textAlign: 'center', fontFamily: 'Noto Kufi Arabic, sans-serif', fontSize: '1.5rem' }}>
                {content}
              </p>
            </div>
          </Container>
        </Grid>

        {/* Second Card */}
      <Grid item xs={12}>
        <Container fluid maxWidth="lg" style={{ margin: '10px 0', padding: '0 9%',marginBottom:'30px' }}>
          <div className="text-card">
            <Grid container spacing={2} style={{ marginTop: '20px' }}>
              <Grid item xs={12} sm={4}>
              <div className="icon-container">
              <img width="45" src="https://ehsan.sa/assets/images/icons/icon-add-user.svg" />
              </div>
                <h2 className="text-card-title" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif', fontSize: '1rem', textAlign: 'center' }}>
                  {title1}
                </h2>
                <p className="text-card-content" style={{ textAlign: 'center', fontFamily: 'Noto Kufi Arabic, sans-serif', fontSize: '1.5rem' }}>
                {content1}
                </p>
              </Grid>
              <Grid item xs={12} sm={4}>
              <div className="icon-container">
              <img width="45" src="https://ehsan.sa/assets/images/icons/icon-add-user.svg" />
              </div>
                <h2 className="text-card-title" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif', fontSize: '1rem', textAlign: 'center' }}>
                  {title2}
                </h2>
                <p className="text-card-content" style={{ textAlign: 'center', fontFamily: 'Noto Kufi Arabic, sans-serif', fontSize: '1.5rem' }}>
                {content2}
              </p>
              <Button
                variant="contained"
                size="medium" // Set the size to medium
                sx={{
                  background: 'linear-gradient(90deg, #2196F3, #21CBF3)',
                  color: '#fff',
                  '&:hover': {
                    background: '#115293',
                  },
                }}
                
                style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
              >
                
                تفاصيل الإحصائيات 
              </Button>

              </Grid>
              <Grid item xs={12} sm={4}>
              <div className="icon-container">
              <img width="45" src="https://ehsan.sa/assets/images/icons/icon-donations.svg" />
              </div>
                <h2 className="text-card-title" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif', fontSize: '1rem', textAlign: 'center' }}>
                  {title3}
                </h2>
                <p className="text-card-content" style={{ textAlign: 'center', fontFamily: 'Noto Kufi Arabic, sans-serif', fontSize: '1.5rem' }}>
                {content3}
                </p>
              </Grid>
            </Grid>
          </div>
        </Container>
      </Grid>
      <Container
        fluid
        style={{ '--bs-gutter-x': '0rem' }}
      >
        <div className="text-card">
          <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginTop: '20px', marginBottom: '20px' }}>
            <img
              width="400"
              src="https://ehsan.sa/assets/images/homepage/lntnalo-ayah.svg"
              alt="وَأَحْسِنُوا ۛ إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ"
              style={{ marginBottom: '15px', filter: 'invert(100%)', imageRendering: 'optimizeQuality' }} // Added optimizeQuality for better clarity
            />
          </Box>
        </div>
      </Container>

    </Grid>
  </section>
  );
};

export default TextCard;
