// In this class, useEffect is introduced, which is updated every re-render. useEffect is a Hook, which 
// receives two parameters, the first being the function to be executed, and the second the condition. If 
// an empty array is passed as the second parameter, useEffect will only be rendered 1x. As it is a Hook, 
// we cannot use if as a condition to execute the useEffect, but we can use this if inside the useEffect, 
// as a condition of the first parameter of it.In this case the if inside useEffect, checks if the value of 
// ${value} is greater than 0, and if it is, it updates the page title, passing to it the value 
// "New Messages" + ${value} which is updated each time the button is clicked, adding 1 more to its  value.


import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('call useEffect');
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
  });

  console.log('render component');
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
