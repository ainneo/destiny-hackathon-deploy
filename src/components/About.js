import React from "react";
import './styles/StyledPetPage.css'

// const About = () => {

//   return (
//     <div className="wrapper">
//     <div className="inner-wrapper">
     
//      <div className="text-wrapper column">
//     </div>
//   </div>
//  </div>
//   )
// };

// export default About;


const About = () => {  
  const [inputs, setInputs] = React.useState({name: '', email: '', message: ''});

  const handleInputChange = (e) => {
      e.persist();
      setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}));
  }

  const sendMessage = (e) => {
      if (e) e.preventDefault();
      const message = inputs.message;
      const messageEnter = message.replace(/\r\n|\r|\n/g,"%0D%0A").replace(' ',"%20");
      const request = "mailto:YOUREMAIL?subject=Email%20from%20"
          +inputs.name+"/"
          +inputs.email+"&body="
          +messageEnter;
      document.location = request;
  }
  return (  
    <div className="contact__wrap">
      <div className='about-wrapper'>
      <h3>About us</h3>
        <p>Many of us live alone and wander through life. Enter Destiny. 
          Destiny matches you to a pet and a passion to help you devote yourself 
          to caring for another living thing and refine a craft to call your own. 
          Our focus is increasing pet adoption in the California area and swapping 
          idle hands for joyous memories.
        </p>
      </div>
      <div className='about-wrapper'>
      <h3>contact us</h3>
      </div>
      <form 
        onSubmit={e=>sendMessage(e)} 
        className="contact__form">
          <input 
            value={inputs.name} 
            onChange={e=>handleInputChange(e)} 
            type="text" name="name" 
            placeholder="name" 
            title="Your name" 
            maxLength="50" 
            required/>
          <input 
            value={inputs.email} 
            onChange={e=>handleInputChange(e)} 
            type="email" name="email" 
            placeholder="email" 
            title="Your email" 
            maxLength="50" 
            required/>
          <textarea 
            value={inputs.message} 
            onChange={e=>handleInputChange(e)} 
            type="text" name="message" 
            placeholder="message" 
            title="Your message" 
            maxLength="550" 
            required/>
          <input 
            type="submit" 
            value="send message"/>
      </form> 
    </div>
  )
}
export default About

