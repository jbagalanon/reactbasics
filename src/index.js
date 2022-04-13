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
      author={firstBook.author} >
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et laborum mollitia sit aliquam debitis fuga fugit beatae alias quidem. Rerum odio vero nam ducimus mollitia.</p>
    </Book>

    <Book
      img={secondBook.img}
      title={secondBook.title}
      author={secondBook.author} >
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempore repellat, voluptas quia voluptate aliquam deserunt ut totam cumque perspiciatis.     
    </p>
    </Book>
  </section>
  );
}

const Book = ({ img, title, author, children }) => {
  // const { img, title, author } = props;
  return <article className='book'>
    <img src={img} alt="" />
    <h1>{title}</h1>
    <h4>{author}</h4>
    {children}

  </article>;
};





ReactDOM.render(<BookList />, document.getElementById('root'));


