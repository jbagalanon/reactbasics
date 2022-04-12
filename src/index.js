import React from 'react';
import ReactDOM from 'react-dom';



// function Greeting() {
//   return (
//     <div>
//       <h4> Hi Jomskieq</h4>
//     </div>);
// }

const Greeting = () => {
  return React.createElement('div', {}, React.createElement('h1', {}, "Hello Jomskie"));
};


ReactDOM.render(<Greeting />, document.getElementById('root'));


