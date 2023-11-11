// Image.js
import React from 'react';

const Image = ({ showImage, alwaysShowImage }) => {
  return (
    <>
      {alwaysShowImage && <img src="/img/1.jpeg" alt="Produit" style={{ maxWidth: '100%' }} />}
      {showImage && <img src="/img/2.jpeg" alt="Produit" style={{ maxWidth: '100%' }} />}
    </>
  );
};


export default Image;
