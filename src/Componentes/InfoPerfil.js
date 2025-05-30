import React from 'react';
import '../App.css';
import janeImg from '../img/jane.png';

const InfoPerfil = () => (
  <section className="info-perfil">
    <div className="profile-img-container">
      <img src={janeImg} alt="Jane Doe" className="profile-img" />
    </div>
    <div className="profile-text">
      <h1>Hi, I'm Jane Doe! <span role="img" aria-label="wave">👋</span></h1>
      <p>
        I am a full stack developer with 2 years of experience in both application and presentation layers. I have worked on applications and microservices deployed on IBM Cloud. I am an avid user of IBM Watson Services and have worked on Watson Assistant, NLU, Sentiment analyzer to name a few.
      </p>
    </div>
  </section>
);

export default InfoPerfil;

