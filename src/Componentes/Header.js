import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const InfoHeader = {
  Nombre: "Jane Doe",
  Email: "jane@email.com",
  Telefono: "+123456789"
};

function Header() {
  return (
    <header style={{ backgroundColor: "#6a0dad", color: "white", padding: "10px 0" }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h5>{InfoHeader.Nombre}</h5>
            <p style={{ marginBottom: 0 }}>
              <FaEnvelope size={14} /> <a href={`mailto:${InfoHeader.Email}`} style={{ color: "white", textDecoration: "underline" }}>{InfoHeader.Email}</a>
            </p>
            <p style={{ marginBottom: 0 }}>
              <FaPhone size={14} /> {InfoHeader.Telefono}
            </p>
          </Col>
          <Col md={6}>
            <Nav className="justify-content-end">
              <Nav.Item><Nav.Link href="#about" style={{ color: "white" }}>About Me</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="#skills" style={{ color: "white" }}>Skills</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="#projects" style={{ color: "white" }}>Projects</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="#recommendations" style={{ color: "white" }}>Recommendations</Nav.Link></Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
