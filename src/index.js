import ReactDOM from 'react-dom/client';
import './index.css';


const books = [
{
    title :'The Power of Your Subconscious Mind',
    author : 'Joseph Murphy',
   img:'./images/book-1.jpg',
   id:1,
 },
 {
   title : 'dummy 1',
   author :'Joseph Murphy',
   img: './images/book-2.jpg',
   id:2,
 },
 
{
   title :'dummy 2',
   author : 'Joseph Murphy',
  img:'./images/book-3.jpg',
  id:3,
 },
];

const BookList = () => {

  return (
  <section className='booklist'>
    {books.map((book)=>{
      const {img,title,author,id} = book;
      return <Book img={img} title={title} author={author} key={id} />;
    })}
  </section>
  );
};

const Book=({img,title,author})=>{
// const {img,title,author}=props;
  return (
<article className="book">
    <img src={img} alt={title}/>
    <h1>{title}</h1>
    <h2>{author}</h2>
  </article>
  ); 
};


const root = ReactDOM.createRoot(document.getElementById ('root'));
root.render(<BookList/>)
