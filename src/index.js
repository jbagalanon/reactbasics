import React from 'react';
import ReactDOM from 'react-dom';

//css
import './index.css'; //importing file

//variable declarition

const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/91YKVfaKDsL._AC_UL210_SR195,210_.jpg",
  title: "Teletubbies Return",
  author: "Bhugzfire"

}

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51al5c5C52L._SX365_BO1,204,203,200_.jpg",
  title: "It's not easy being bunny",
  author: "Walt Disney"

}

function BookList() {
  return (<section class='booklist'>
    <Book
      img={firstBook.img}
      title={firstBook.title}
      author={firstBook.author} />
    <Book 
      img={secondBook.img}
      title={secondBook.title}
      author={secondBook.author} />
  </section>
  );
}

const Book = (props) => {
  return <article className='book'>
    <img src={props.img} alt="" />
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
    
  </article>;
};





ReactDOM.render(<BookList />, document.getElementById('root'));


