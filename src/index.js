// import React, { children } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
// import bookImage from './images/book-1.jpg';

// function Greating(){
//   return <h2>my first componet</h2>
// }


// function Greating(){
//   return <>
//   <div>
//     <h3>
//       <ul>
//         <li>
//           <a href='#'>hello</a>
//         </li>
//       </ul>
//     </h3>
//   </div>
//   <h1>hello world</h1>
//   <input type="text" name="" id=""></input>
//   </>
//}

// function Greating(){
//   return (
// <div>
//   <Person/>
//   <Message/>
// </div>
//   )
// }

// const Person =  ()=> <h1> john </h1>;
// const Message = ()=>{
//   return <p>this is demo</p>;
// };


// const firstBokk = {
//    title :'The Power of Your Subconscious Mind',
//    author : 'Joseph Murphy',
//   img:'./images/book-1.jpg',

// };

// const secoundtBokk = {
//   title : 'The Power of Your Subconscious Mind',
//   author :'Joseph Murphy',
//   img: './images/book-2.jpg',

// };

// const Bokk3 = {
//   title :'The Power of Your Subconscious Mind',
//   author : 'Joseph Murphy',
//  img:'./images/book-3.jpg',

// };


const books = [
{
    title :'The Power of Your Subconscious Mind',
    author : 'Joseph Murphy',
   img:'./images/book-1.jpg',
 
 },
 {
   title : 'dummy 1',
   author :'Joseph Murphy',
   img: './images/book-2.jpg',
 
 },
 
{
   title :'dummy 2',
   author : 'Joseph Murphy',
  img:'./images/book-3.jpg',
 
 },
];



const BookList = () => {
  // return (
  //   <section className="booklist">
  //     <Book author={firstBokk.author} title={firstBokk.title} img={firstBokk.img}/>      
  //     <Book author={secoundtBokk.author} title={secoundtBokk.title} img={secoundtBokk.img}/>
  //     <Book author={Bokk3.author} title={Bokk3.title} img={Bokk3.img}/>
  //   </section>
  // );
  return <section className='booklist'>
    {books.map((book)=>{
      return(
        <div>
        <h1>{book.title}</h1>
      </div>
      );
    })}
  </section>;
};

// const Book=(props)=>{

//   return <article className="book">
//     <img src={props.img} alt={props.title}/>
//     <h1>{props.title}</h1>
//     <h2>{props.author}</h2>
//   </article>;
// };

const Book=(props)=>{
const {img,title,author}=props;
  return (
<article className="book">
    <img src={img} alt={title}/>
    <h1>{title}</h1>
    <h2>{author}</h2>
  </article>
  ); 
};

// const Image = ()=> (
// <img src='./images/imgs.jpg' alt='The Power of Your Subconscious Mind'/>
// );



// const Image = () => (
//   <img src={bookImage} alt="The Power of Your Subconscious Mind" />
// );


// const Title = ()=><h2>The Power of Your Subconscious Mind</h2>;

// const Author = ()=>{
//   return <h1>Joseph Murphy</h1>;
// };

const root = ReactDOM.createRoot(document.getElementById ('root'));
root.render(<BookList/>)
