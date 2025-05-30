import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const InfoHabilidades = [
  {
    Icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    Texto: "HTML",
    Titulo: "2 years experience"
  },
  {
    Icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    Texto: "JavaScript",
    Titulo: "1.5 years experience"
  },
  {
    Icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    Texto: "Java",
    Titulo: "0.5 years experience"
  },
  {
    Icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    Texto: "React",
    Titulo: "1 year experience"
  },
  {
    Icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    Texto: "Node.js",
    Titulo: "1 year experience"
  },
  {
    Icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    Texto: "CSS",
    Titulo: "2 years experience"
  }
];

function Habilidades() {
  return (
    <div style={{ padding: "35px" }}> {/* Este div permite aplicar margen externo general */}
      <h2 style={{
        color: "#6a0dad",
        fontWeight: "bold",
        textAlign: "left",
        marginBottom: "20px"
      }}>
        Skills
      </h2>

      <Container>
        <Row>
          {InfoHabilidades.map((habilidad, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-4">
              <Card className="shadow-sm text-center">
                <Card.Body>
                  <img
                    src={habilidad.Icono}
                    alt={habilidad.Texto}
                    style={{ width: "50px", height: "50px", marginBottom: "10px" }}
                  />
                  <Card.Title>{habilidad.Texto}</Card.Title>
                  <Card.Text>{habilidad.Titulo}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Habilidades;
