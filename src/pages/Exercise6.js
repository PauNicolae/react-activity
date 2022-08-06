import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/Exercise6.css';
import React, { useState } from 'react';

function BasicExample() {
   const [name, setName] = useState({
      FirstName: '',
      LastName: '',
   });

   function handleFirstNameChange(e) {
      setName({
         FirstName: e.target.value,
      });
   }

   function handleLastNameChange(e) {
      setName({
         LastName: e.target.value,
      });
   }

   return (
      <Form>
         <Form.Group className="mb-3" controlId="FirstName">
            <Form.Control
               type="text"
               placeholder="First Name"
               onChange={handleFirstNameChange}
            />
         </Form.Group>

         <Form.Group className="mb-3" controlId="LastName">
            <Form.Control
               type="text"
               placeholder="Last Name"
               onChange={handleLastNameChange}
            />
         </Form.Group>
         <Button
            className="btn"
            variant="danger"
            type="submit"
            onClick={() => {
               alert(
                  'Hello' + {handleFirstNameChange} + {handleLastNameChange} +'!'
               );
            }}
         >
            GREET ME!
         </Button>
      </Form>
   );
}

export default BasicExample;
