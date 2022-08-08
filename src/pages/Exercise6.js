import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import '../styles/Exercise6.css';

const Exercise6 = () => {
   const [firstName, setfirstName] = useState('');
   const [lastName, setlastName] = useState('');
//show user input
const handleUserFirstName = (e) => {
   setfirstName(e.target.value)
}

const handleUserLastName = (e) => {
   setlastName(e.target.value)
}

   const submitValue = () => {
      const details = {
         firstName: 'First Name', 
         lastName: 'Last Name'
         
        
      };
      alert(
         'Hello ' + firstName + ' ' + lastName + '!' 
      );
   };

   return (
      <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
               type="text"
               placeholder="First name"
               value={firstName}
               // onChange={(e) => setfirstName(e.target.value)}
               onChange={handleUserFirstName}
            />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
               type="text"
               placeholder="Last name"
               // onChange={(e) => setlastName(e.target.value)}
               onChange={handleUserLastName}
            />
         </Form.Group>
         <Button variant="primary" type="submit" onClick={submitValue}>
            GREET ME
         </Button>
      </Form>
   );
};

export default Exercise6;
