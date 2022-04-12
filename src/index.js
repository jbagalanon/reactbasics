import React from 'react';
import ReactDOM from 'react-dom';


function BookList() {
  return (<section>
    <Book />

  </section>
  );
}

const Book = () => {
  return <article><Image></Image>
    <Title />
    <Author />
  </article>;
};

const Image = () => (
  <img src="https://images-na.ssl-images-amazon.com/images/I/91YKVfaKDsL._AC_UL210_SR195,210_.jpg" alt="" />
);

const Title = () => (<h1>Teletubbies</h1>
);

const Author = () => <h2>Swordfish</h2>;



ReactDOM.render(<BookList />, document.getElementById('root'));


