import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Projectos() {
  return (
    <Container className="py-5" style={{ maxWidth: "800px" }}>
      <h2 className="fw-bold mb-4" style={{ color: "#6a0dad" }}>Projects</h2>

      {/* Proyecto 1 */}
      <div className="mb-4">
        <h5 className="fw-bold">Chatbot</h5>
        <ul className="mt-2 ps-3">
          <li>
            Developed a secure website integrated with chatbot for an automobile client using <strong>HTML, CSS, JavaScript</strong> and <strong>IBM Watson Assistant</strong>.
          </li>
        </ul>
        <hr />
      </div>

      {/* Proyecto 2 */}
      <div className="mb-4">
        <h5 className="fw-bold">Sentiment Analyzer</h5>
        <ul className="mt-2 ps-3">
          <li>
            Developed and deployed a sentiment analyzer for the box reviews section of an eCommerce platform using <strong>IBM NLU</strong>.
          </li>
        </ul>
        <hr />
      </div>

      {/* Proyecto 3 */}
      <div>
        <h5 className="fw-bold">Fashion Website</h5>
        <ul className="mt-2 ps-3">
          <li>
            Created a styled multi-page website for a new player in the fashion industry and integrated it with a shopping cart, using <strong>Stripe</strong> for payment gateway.
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default Projectos;
