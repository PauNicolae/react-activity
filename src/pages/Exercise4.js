import React from 'react';

const Exercise4 = () => {
   const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

   return (
      <div>
         {animals.map((animalList,index) => (
            <ul key={index}>
               <li>{animalList}</li>
            </ul>
         ))}
      </div>
   );
};

export default Exercise4;
