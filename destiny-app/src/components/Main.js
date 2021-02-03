import React from "react";
import { useState, useEffect } from 'react';
import Grid from "./elements/Grid";
import PetImage from "./elements/PetImage";
import LoadMore from "./elements/LoadMore";

const Main = () => {

    //state for img grid
    const [pets, setPets] = useState([]);


    //load more pets
    //need to write a condtion allow more pets
    const loadMorePets = () => {};

    //fake api call
    useEffect(()=>{
        fetch('./petfinder.json')
          .then((res)=>res.json())
          .then((data)=>{
            // console.log(data); //test
            setPets(data.slice(0, 9))
          });
      },[])

  return (
    <div>
      <Grid text="Find your pet!" >
          {pets.map( (pet, id) => (
          <PetImage
            key={id} 
            pet={pet}
            petId={pet.id}
            clickable
          />))}
      </Grid>
      <LoadMore text="Load More" onClick={loadMorePets} />
    </div>
  );
};

export default Main;
