import React from 'react';
import { Link } from '@reach/router';
import { StyledPetPopImage } from '../styles/StyledPetImage';

const PetPopUp = ({ pet, petId, clickable }) => {
  
let backgroundImage = pet.animal.primary_photo_cropped_url
// console.log(pet.animals[0].photos[0].medium) //test

return (
  <StyledPetPopImage>
        {/* <img  src={backgroundImage} alt="petImage" /> */}

    {clickable ? (
      <Link to={`/${petId}`}>
        <img className="clickable" src={backgroundImage} alt="petImage" />
        <div>Destiny has matched your with {pet.animal.name}!</div>
      </Link>
    ) : (
      ''
    )}

  </StyledPetPopImage>
 )
}

export default PetPopUp;

