import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'; //importing file

function BookList() {
  return (<section class='booklist'>
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />

  </section>
  );
}

const Book = () => {
  return <article className='book'><Image></Image>
    <Title />
    <Author />
  </article>;
};

const Image = () => (
  <img src="https://images-na.ssl-images-amazon.com/images/I/91YKVfaKDsL._AC_UL210_SR195,210_.jpg" alt="" />
);

const Title = () => <h1>Teletubbies</h1>;

const Author = () => <h4 style={{ color: '#617d98', fontSize: '.75rem', marginTop: '.25rem' }}>Swordfish</h4>;



ReactDOM.render(<BookList />, document.getElementById('root'));


