import React from 'react';
import janeImage from '../img/jane.png'; 

const InfoPerfil = () => {
return (
<div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px' }}>
    <img 
    src={janeImage} 
    alt="Jane Doe trabajando" 
    style={{ width: '150px', borderRadius: '8px' }} 
    />
    <div>
    <h1 style={{ color: 'purple' }}>Hi, I'm Jane Doe! 👋</h1>
    <p>
        I am a full stack developer with 2 years of experience in both application and presentation layers.
        I have worked on applications and microservices deployed on IBM Cloud. I am an avid user of IBM Watson Services 
        and have worked on Watson Assistant, NLU, Sentiment analyzer to name a few.
    </p>
    </div>
</div>
);
};

export default InfoPerfil;
