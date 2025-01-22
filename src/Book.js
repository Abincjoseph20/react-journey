export const Book=(props)=>{
    const {img,title,author, }=props;
      return (
    <article className="book">
        <img src={img} alt={title}/>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <button >submit</button>
      </article>
      ); 
    };

export default Book;