
## Description
Destiny is a winning MLH MVP hackathon project built in less then 3 days. The frontend was built with react hooks and the backend was built with Flask and Python.

### Additional dependencies to add on top of CRA:
```npm i prop-types @reach/router styled-components react-fontawesome```

- @reach router
- styled-components
- react-fontawesome
- prop-types

### Pop up model:  
Add the react-modal package to project:
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

