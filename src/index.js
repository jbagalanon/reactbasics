import React from 'react';
import ReactDOM from 'react-dom';


function Greeting() {
  return (
    <div>
      <h3>Hello Everybody</h3>
      <ul>
        <li>
          <a href="#">Jomskie</a>
        </li>
      </ul>
    </div>
  );
}

// const Greeting = () => {
//   return React.createElement('div', {}, React.createElement('h1', {}, "Hello Jomskie"))
// };


ReactDOM.render(<Greeting />, document.getElementById('root'));


