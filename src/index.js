import React from 'react';
import ReactDOM from 'react-dom';


function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

// const Greeting = () => {
//   return React.createElement('div', {}, React.createElement('h1', {}, "Hello Jomskie"))
// };

const Person = () => <h2> Joms</h2>;
const Message = () => {
  return <p>Hello you</p>
}

ReactDOM.render(<Greeting />, document.getElementById('root'));


