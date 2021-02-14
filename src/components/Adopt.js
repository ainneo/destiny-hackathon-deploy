import React from "react";
import { useState, useEffect } from "react";
import './styles/StyledPetPage.css'


const Adopt = ({ petId }) => {
  //set pets 
  const [petPage, setPetPage] = useState([]);

  useEffect(() => {
    // fetch('./petfinder.json')
    fetch(`https://gid3279.pythonanywhere.com/pet?id=${petId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); //test
        setPetPage([data]);
      });
  }, [petId]);
  

  //map and render to the UI
  return  (
    <div>
     { petPage.map( pet =>{
       return !pet.animal.description? []:(
         <div className="wrapper">
           <div className="inner-wrapper">
            <div className="img-wrapper columm"> <img className='pet-img' src={pet.animal.primary_photo_cropped_url} alt='pet-img'></img></div>
            <div className="text-wrapper column">
              <h3>Name: {pet.animal.name}</h3>
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
