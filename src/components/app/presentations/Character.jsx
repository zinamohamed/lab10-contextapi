import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ image, name }) => { 
  return (
    <div>
      <img src={image} alt="" />
      <h4>{name}</h4>
    </div>
  );

};

Character.propTypes = { 
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Character;
