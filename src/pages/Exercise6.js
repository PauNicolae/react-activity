import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import '../styles/Exercise6.css';

const Exercise6 = () => {
   const [firstName, setfirstName] = useState('');
   const [lastName, setlastName] = useState('');

   const submitValue = () => {
      const details = {
         'First Name': firstName,
         'Last Name': lastName,
      };
      alert(
         'Hello ' + details['First Name'] + ' ' + details['Last Name']
      );
   };

   return (
      <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
               type="text"
               placeholder="First name"
               onChange={(e) => setfirstName(e.target.value)}
            />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
               type="text"
               placeholder="Last name"
               onChange={(e) => setlastName(e.target.value)}
            />
         </Form.Group>
         <Button variant="primary" type="submit" onClick={submitValue}>
            GREET ME
         </Button>
      </Form>
   );
};

export default Exercise6;
