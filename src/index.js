// 1) Import the React and ReactDom libraries
import React from 'react';
import ReactDom from 'react-dom/client';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDom.createRoot(el);

// 4) Create a component
function App() {
  const inputType ='number';
  const minValue = 5;
  const maxValue =10;
  const colorr = { color: 'red' };
  const listOpt = [1,2,3];
  const message = 'Enter age';

  return <input type={inputType} min={minValue} max={ maxValue } style={ colorr } list={[listOpt]} alt={message} />;
}

// 5) Show the component on the screen
root.render(<App />);
