import React from 'react';

const AnimalComponent = (props) => {
   return (
      <div>
         {props.animals.map((animalList, index) => (
            <div>{animalList}</div>
         ))}
         {console.log(props)}
      </div>
   );
};

export default AnimalComponent;
