import React, { useState } from 'react';

const Exercise3 = () => {
   const [count, setCount] = useState(0);

   const handleCount = () => {
      setCount((count) => count + 1);
   };

   return (
      <div>
         <span>Button has been clicked {count}</span>
         <button onClick={handleCount}>Click me!</button>
      </div>
   );
};

export default Exercise3;
