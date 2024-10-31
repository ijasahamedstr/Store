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
    
        </Row>
      </Container>
    </section>
  );
};

export default LoginCard;
