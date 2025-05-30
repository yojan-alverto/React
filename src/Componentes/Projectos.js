import React from 'react';

const Projects = () => (
  <section className="max-w-3xl mx-auto p-6">
    <h2 className="text-purple-700 text-3xl font-bold mb-8 text-left">Projects</h2>

    <div className="mb-6 text-left">
      <h3 className="font-bold text-lg mb-1 text-left">Chatbot</h3>
      <ul className="list-disc list-inside text-left">
        <li>
          Developed a secure website integrated with chatbot for an automobile client using HTML, CSS, JavaScript and IBM Watson Assistant
        </li>
      </ul>
    </div>

    <hr className="my-4 border-gray-300 w-full" />

    <div className="mb-6 text-left">
      <h3 className="font-bold text-lg mb-1 text-left">Sentiment Analyzer</h3>
      <ul className="list-disc list-inside text-left">
        <li>
          Developed and deployed a sentiment analyzer for the box reviews section of an eCommerce platform using IBM NLU
        </li>
      </ul>
    </div>

    <hr className="my-4 border-gray-300 w-full" />

    <div className="text-left">
      <h3 className="font-bold text-lg mb-1 text-left">Fashion Website</h3>
      <ul className="list-disc list-inside text-left">
        <li>
          Created a styled multi-page website for a new player in the fashion industry and integrated it with a shopping cart, using stripe for payment gateway
        </li>
      </ul>
    </div>
  </section>
);

export default Projects;
