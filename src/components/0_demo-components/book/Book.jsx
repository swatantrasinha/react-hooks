
import { useOutletContext, useParams } from "react-router-dom";

const Book = () => {
  
    const {id}= useParams();
    const messageFromContext= useOutletContext();
    return (
      <div>
        <h1> This is Book Page </h1>
        <h2>Message from context: {messageFromContext?.message}</h2>
        <p>Search is for book : {id}</p>
        </div>
    )
  }
  export default Book;