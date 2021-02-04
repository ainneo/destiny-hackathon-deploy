import React from "react";
import { useState, useEffect } from 'react';
import Grid from "./components/elements/Grid";
import PetImage from "./components/elements/PetImage";
import LoadMore from "./components/elements/LoadMore";
import Modal from "react-modal";
import './components/styles/StyledModal.css'

Modal.setAppElement("#root");

const Main = () => {
    //state for popup model
    const [isOpen, setIsOpen] = useState(true);

    //state for img grid
    const [pets, setPets] = useState([]);

    //load more pets
    //need to write a condtion allow more pets
    const loadMorePets = () => {
    };
    
    //popup model function
    function toggleModal() {
      setIsOpen(!isOpen);
    }
    

    //fake api call
    useEffect(()=>{
        fetch('./petfinder.json')
          .then((res)=>res.json())
          .then((data)=>{
            // console.log(data); //test
            setPets(data.slice(0,12))
          });
      },[])

  return (
    <div>

<div className="App">
      {/* <button onClick={toggleModal}>TEST BUTTON</button> */}

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      > 
        <img src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49300453/1/?bust=1612292588&width=300"/>
        <div>Destiny has found your match!.</div>
        <button onClick={toggleModal}>x</button>
      </Modal>
    </div>
     

      <Grid text="Find your pet!" >
          {pets.map( (pet, id) => (
          <PetImage
            key={id} 
            pet={pet}
            petId={pet.id}
            clickable
          />))}
      </Grid>
      <LoadMore text="Load More" onClick={loadMorePets()} />
    </div>
  );
};

export default Main;
