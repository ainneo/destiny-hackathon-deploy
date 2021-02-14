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
    const [isOpen, setIsOpen] = useState(true);  //state for popup model
    const [popPets, setPopPets] = useState([]);  //sate for popup pictures
    //state for img grid
    const [pets, setPets] = useState([]); //fetching & setting all pet data to pets
    const [loadPets, loadSetPets] = useState(16);// Starting number of visible pets
    //Instead of hardcoding amount, you need to store it in a variable that you can change later
  
    //load more pets
    // Set the visible pets to the current amount + 4
    // eg. if there are 10 visible post, clicking again will show 14.
    const loadMorePets = () => {
         loadSetPets(loadPets + 8)
    };
    
    //popup model function
    function toggleModal() {
      setIsOpen(!isOpen);
    }
    
    //api call for main grid
    useEffect(()=>{
        // fetch('./petfinder.json')
        fetch('https://gid3279.pythonanywhere.com/pets?count=80')
          .then((res)=>res.json())
          .then((data)=>{
            // console.log(data); //test
            // setPets(data.slice(0,20))
            setPets(data)
          });
      },[]);

    //api call for popup modal
    useEffect(()=>{
      fetch('https://gid3279.pythonanywhere.com/pets?count=1')
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
          {pets.slice(0, loadPets).map( (pet, id) => (
          <PetImage
            key={id} 
            pet={pet}
            petId={pet.animal.id}
            clickable
          />))}
      </Grid>

      <LoadMore text="Load More" handelLoad={loadMorePets} />
    </div>
  );
};

export default Main;
