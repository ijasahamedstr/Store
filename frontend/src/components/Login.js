import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const LoginCard = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Login clicked");
  };

  return (
    <section style={{ backgroundColor: '#f2f3f4', width: '100%', marginTop: '-50px', marginBottom: '-50px' }}>
      <Container fluid className="my-5">
        <Row className="text-center">
          <Col xs={12} className="mb-3">
            <img 
              src="https://ehsan.sa/static/images/header-img.svg" 
              alt="Header" 
              className="img-fluid" 
              style={{ maxWidth: '100%', height: 'auto' }} // Ensures responsiveness
            />
          </Col>
          <Row className="justify-content-center" style={{marginLeft:'0px'}}>
          <Col xs={12} md={3} className="d-flex justify-content-center" style={{marginBottom:'30px'}}>
            <Card style={{ width: '100%', padding: '20px', borderRadius: '15px' }}>
              <Card.Body>
                <Card.Title className="text-center">
                  <img width="80" src='https://ehsan.sa/assets/images/login/login.png' alt="Login" />
                </Card.Title>
                <h2 className="text-center" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif', fontSize: '1.5rem', marginBottom: '20px' }}>
                  تسجيل الدخول
                </h2>
                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3">
                    <Form.Control 
                      type="email" 
                      placeholder="Enter email" 
                      required 
                      style={{ borderRadius: '30px' }} 
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100" style={{ borderRadius: '30px' }}>
                    تسجيل الدخول
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        </Row>
      </Container>
    </section>
  );
};

export default LoginCard;
