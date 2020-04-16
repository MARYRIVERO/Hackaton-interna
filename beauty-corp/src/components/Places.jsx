import React from 'react';

const Places = ({ name, adress }) => {
  return (
    <section>
      <h5>{name}</h5>
      <p>{adress}</p>
    </section>
  );
};

export default Places;
