import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import './ImageButton.css';  // Create a separate CSS file for styles

const ImageButton = ({onClick }) => {
  return (
    <div className="image-button-container">
      <button className="overlay-button" onClick={onClick}>
        <FontAwesomeIcon icon={faCirclePlus} className="plus-icon" />
      </button>
    </div>
  );
};

export default ImageButton;