import React from "react";
import { useState, useEffect } from 'react';
import Grid from "./components/elements/Grid";
import PetImage from "./components/elements/PetImage";
import PetPopUp from "./components/elements/PetPopUp";
import LoadMore from "./components/elements/LoadMore";
import Modal from "react-modal";
import './components/styles/StyledModal.css'

Modal.setAppElement("#root");

const Main = () => {
    //state for popup model
    const [isOpen, setIsOpen] = useState(true);
    //state for img grid
    const [pets, setPets] = useState([]);
    const [popPets, setPopPets] = useState([]);

    //load more pets
    //need to write a condtion allow more pets
    const loadMorePets = () => {
    };
    
    //popup model function
    function toggleModal() {
      setIsOpen(!isOpen);
    }
    
    //api call for main grid
    useEffect(()=>{
        // fetch('./petfinder.json')
        fetch('https://api.destinypets.space/pets?count=25')
          .then((res)=>res.json())
          .then((data)=>{
            // console.log(data); //test
            // setPets(data.slice(0,20))
            setPets(data)
          });
      },[]);

    //api call for popup modal
    useEffect(()=>{
      fetch('https://api.destinypets.space/pets?count=1')
        .then((res)=>res.json())
        .then((data)=>{
          setPopPets(data)
        });
    },[]);

    
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
      {popPets.map( (pet, id) => (
          <PetPopUp
           key={id} 
           pet={pet}
           petId={pet.animal.id}
           clickable
          />))}
        {/* <img src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49300453/1/?bust=1612292588&width=300"/> */}
        <button onClick={toggleModal}>x</button> 
      </Modal>
    </div>
     
      <Grid text="Meet your new best friend!" >
          {pets.map( (pet, id) => (
          <PetImage
            key={id} 
            pet={pet}
            petId={pet.animal.id}
            clickable
          />))}
      </Grid>

      <LoadMore text="Load More" onClick={loadMorePets()} />


    </div>
  );
};

export default Main;
