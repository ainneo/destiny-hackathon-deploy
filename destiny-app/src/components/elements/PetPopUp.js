import React from 'react';
import { StyledPetPopImage } from '../styles/StyledPetImage';

const PetPopUp = ({ pet }) => {
  
let backgroundImage = pet.animal.primary_photo_cropped_url
// console.log(pet.animals[0].photos[0].medium) //test

return (
  <StyledPetPopImage>
        <img  src={backgroundImage} alt="petImage" />
  </StyledPetPopImage>
 )
}

export default PetPopUp;

