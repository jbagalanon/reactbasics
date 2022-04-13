import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'; //importing file

function BookList() {
  return (<section class='booklist'>
    <Book />


  </section>
  );
}

const author = "Bhugzfire";

const Book = () => {
  
  const title = "Teletubbies Return"
  return <article className='book'>
    <img src="https://images-na.ssl-images-amazon.com/images/I/91YKVfaKDsL._AC_UL210_SR195,210_.jpg" alt="" />

    <h1>{title}</h1>
    <h4>{author.toUpperCase()}</h4>
    {/* <p>{let x = 6}</p> */}
  </article>;
};





ReactDOM.render(<BookList />, document.getElementById('root'));


