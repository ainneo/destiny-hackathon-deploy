import React from "react";
import { useState, useEffect } from "react";
import './styles/StyledPetPage.css'


const Adopt = ({ petId }) => {
  //set pets 
  const [petPage, setPetPage] = useState([]);

  useEffect(() => {
    // fetch('./petfinder.json')
    fetch("https://api.destinypets.space/pets?count=12")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); //test
        setPetPage(data.slice(0,1));
      });
  }, []);
  

  //map and render to the UI
  return (
    <div>
     { petPage.map( pet =>{
       return(
         <div className="wrapper">

           <div className="inner-wrapper">
            <div className="img-wrapper columm"> <img className='pet-img' src={pet.animal.primary_photo_cropped_url}></img></div>
            <div className="text-wrapper column">
              <h1>Name: {pet.animal.name}</h1>
              <p>{pet.animal.description}</p>
           </div>
        </div>
        </div>
       )
     }
       )
     }
    </div>
  );
};

export default Adopt;
