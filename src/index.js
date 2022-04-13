import React from 'react';
import ReactDOM from 'react-dom';

//css
import './index.css'; //importing file

//variable declarition

const books = [
{
  img: "https://images-na.ssl-images-amazon.com/images/I/91YKVfaKDsL._AC_UL210_SR195,210_.jpg",
    title: "Teletubbies Return",
      author: "Bhugzfire",

},
{
  img: "https://images-na.ssl-images-amazon.com/images/I/51al5c5C52L._SX365_BO1,204,203,200_.jpg",
    title: "It's not easy being bunny",
      author: "Walt Disney",
}];

const names = ['John', 'Swordfish', 'Barracuda'];
const newNames = names.map((name)=>{
 return <h1>{name}</h1>
});
console.log(newNames)
function BookList() {
  return (<section class='booklist'>
    {names}
  </section>
  );
}

const Book = (props) => {
  const { img, title, author, } = props;
  return <article className='book'>
    <img src={img} alt="" />
    <h1>{title}</h1>
    <h4>{author}</h4>


  </article>;
};



ReactDOM.render(<BookList />, document.getElementById('root'));


