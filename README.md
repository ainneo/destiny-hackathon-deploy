
# DESCRIPTION
This project was an MLH hackathon project that was built in less then 3 days. The fronend was built with react hooks and the backend was built with Flask and Python. We won the hackathon!

### Additional dependencies to add on top of CRA:
- ```npm i prop-types @reach/router styled-components react-fontawesome```

For:
- @reach router
- styled-components
- react-fontawesome
- prop-types
https://dev.to/cesareferrari/what-is-proptypes-and-how-to-use-it-in-react-2eml#:~:text=PropTypes%20is%20a%20library%20that,t%20match%20the%20types%20expected


### For the pop up model:  
https://www.newline.co/@dmitryrogozhny/how-to-display-modal-dialog-in-react-with-react-modal--dbf46cda
Adding react-modal to Project
We will start by adding the react-modal package to our project:
Add with npm:
```
npm install react-modal
```

The package provides the Modal component that we're going to use.
Showing Modals with react-modal
Now, let's display a modal dialog using the Modal component:
```
import React, { useState } from "react";
import "./styles.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <button onClick={toggleModal}>Open modal</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <div>My modal dialog.</div>
        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </div>
  );
}
```
For more see: https://www.newline.co/@dmitryrogozhny/how-to-display-modal-dialog-in-react-with-react-modal--dbf46cda



### For netlify deployment:
- ```CI= npm run build```
- correct all errors/warnings in console, before deploying app
 
