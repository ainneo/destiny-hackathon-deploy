import React from 'react';
import { Link } from '@reach/router';
// import PropTypes from 'prop-types';
import { StyledPetImage } from '../styles/StyledPetImage';

const PetImage = ({ pet, petId, clickable }) => {
  
let backgroundImage = pet.animal.primary_photo_cropped_url
// console.log(pet.animals[0].photos[0].medium) //test
// console.log(petId) //test



return !backgroundImage? []: (
  <StyledPetImage>
    {clickable ? (
      <Link to={`/${petId}`}>
        <img className="clickable" src={backgroundImage} alt="petImage" />
      </Link>
    ) : (
      ''
      // <img src={image} alt="moviethumb" />
    )}
  </StyledPetImage>
)

// PetImage.propTypes = {
//   image: PropTypes.s,
//   petId: PropTypes.number,
//   clickable: PropTypes.bool,
//   }
}

export default PetImage;

