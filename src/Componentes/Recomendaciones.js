import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const InfoRecomendaciones = [
  `Jane is a very quick learner and quickly grasps key concepts of Web development. She got a great attitude & she is an excellent team player. She has a curious mind and asks the right question. She takes initiative within a team and has potentials to lead the team.`,
  
  `Working with Jane has been an awesome experience. She is highly knowledgable and always goes the extra step to make sure everything is right. For any future projects that need her expertise I would definitely want to work with her again.`,

  `I had worked along with Jane during the initial phase of our venture which needed Web development. She is a committed resource who has in depth knowledge about the domain. She will be an asset for any organisation!`
];

function Recomendaciones() {
  return (
    <div style={{ padding: "35px" }}>
      <h2 style={{
        color: "#6a0dad",
        fontWeight: "bold",
        textAlign: "left",
        marginBottom: "30px"
      }}>
        Recommendations
      </h2>

      <Container>
        <Row className="g-4">
          {InfoRecomendaciones.map((texto, index) => (
            <Col key={index} xs={12} md={4}>
              <Card className="h-100 shadow-sm" style={{ borderRadius: "15px", padding: "15px" }}>
                <Card.Body>
                  <p style={{ 
                    fontStyle: "italic", 
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    color: "#333",
                    position: "relative",
                    padding: "10px",
                    lineHeight: "1.6"
                  }}>
                    <span style={{ fontSize: "25px", color: "#6a0dad", fontWeight: "bold" }}>“ </span>
                    {texto}
                    <span style={{ fontSize: "25px", color: "#6a0dad", fontWeight: "bold" }}> ”</span>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Recomendaciones;
