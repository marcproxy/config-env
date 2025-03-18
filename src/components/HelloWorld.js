import React from 'react';

function HelloWorld() {
  // eslint-disable-next-line no-undef
  const environment = typeof process !== 'undefined' && process.env ? process.env.NODE_ENV : 'development';
  
  return (
    <div className="container">
      <h1>Hello World!</h1>
      <p>Environnement: {environment}</p>
    </div>
  );
}

export default HelloWorld;