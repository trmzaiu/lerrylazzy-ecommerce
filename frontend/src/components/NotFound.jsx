import React from 'react';

const NotFound = () => (

  <div className="not-found">
    <img
        src={`${process.env.PUBLIC_URL}/Error.png`}
        alt="not-found"
        style={{maxWidth: '100%'}}/>
  </div>
);

export default NotFound;