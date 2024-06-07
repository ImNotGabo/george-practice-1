import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [color, setColor] = useState('blue');
  function changeColor() {
    setColor((prevState) => (prevState === 'red' ? 'blue' : 'red'));
  }

  console.log(color);

  return (
    <>
      <Child color={color} />
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}
