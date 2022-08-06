import React, { useState } from 'react';
import AnimalComponent from '../component/AnimalComponent';

const animals = ['🐶dog', '🐱cat', '🐔chicken', '🐮cow', '🐑sheep', '🐴horse'];

const Exercise5 = () => {
   return (
      <div>
         <AnimalComponent animals={animals} />
      </div>
   );
};

export default Exercise5;
