import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const OTPlogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Login clicked");
  };

  return (
    <section style={{ backgroundColor: '#f2f3f4', width: '100%', minHeight: '85vh', display: 'flex', alignItems: 'center',backgroundImage: 'url(https://img.freepik.com/free-vector/emerald-green-curve-frame-template_53876-99027.jpg?t=st=1730700475~exp=1730704075~hmac=653a3607b6b6e5c4318bfee08f3f98c4bd325e8294337ea91519e082001b90ec&w=1380)',backgroundSize: 'cover',backgroundPosition: 'center' }}>
      <Container fluid className="my-5">
        <Row className="justify-content-center text-center">
          <Col xs={12} md={4} className="d-flex justify-content-center">
            <Card style={{ width: '100%', padding: '20px', borderRadius: '15px' }}>
              <Card.Body>
                <Card.Title className="text-center">
                  <img width="80" src='https://ehsan.sa/assets/images/login/login.png' alt="Login" />
                </Card.Title>
                <h2 className="text-center" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif', fontSize: '1.5rem', marginBottom: '20px' }}>
                أدخل كلمة المرور
                </h2>
                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3">
                    <Form.Control 
                      type="number" 
                      required 
                      style={{ borderRadius: '30px' }} 
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100" style={{ borderRadius: '20px', background: 'linear-gradient(270deg,#0d8f75 20%,#214570 105%)', fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                  إرسال كلمة مرور لمرة واحدة
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OTPlogin;
