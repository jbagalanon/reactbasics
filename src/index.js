import React from 'react';
import ReactDOM from 'react-dom';

//css
import './index.css'; //importing file

//variable declarition
const author = "Bhugzfire";
const title = "Teletubbies Return";
const img = "https://images-na.ssl-images-amazon.com/images/I/91YKVfaKDsL._AC_UL210_SR195,210_.jpg";


function BookList() {
  return (<section class='booklist'>
    <Book />


  </section>
  );
}



const Book = () => {


  return <article className='book'>
    <img src={img} alt="" />

    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>;
};





ReactDOM.render(<BookList />, document.getElementById('root'));


