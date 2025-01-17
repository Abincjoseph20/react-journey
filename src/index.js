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
    <EventExample/>
    {books.map((book)=>{
      return <Book {...book} key={book.id} />;
    })}
  </section>
  );
};
const EventExample= ()=>{

  const handleInput = (e)=>{
    console.log(e.target);
  }

  const handleButtonAlert = ()=>{
    alert('handle form alert');
  }

  const handleformSubmisson = (e)=> {
    e.preventDefault();
    console.log('submit form');
  };

  return (
    <section>
      <form  onSubmit={handleformSubmisson}>
      <h2>typical Form</h2>
      <input
      type='text' 
      name='product' 
      onChange={handleInput} 
      style={{margin: '1rem 0' }}
      />
     
      <button type='submit'>submit</button> 
      
       <br/><br/>

      <button onClick={handleButtonAlert} type='button'>click me</button> 
      </form>
    </section>
  );
}

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


const root = ReactDOM.createRoot(document.getElementById ('root'));
root.render(<BookList/>)
