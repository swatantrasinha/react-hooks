import { useOutletContext } from "react-router-dom";
const NewBook = () => {
  const messageFromContext= useOutletContext();
    return (
      <div>
        <h1> This is new Book page</h1>
        <h2>Message from context: {messageFromContext?.message}</h2>
        </div>
    )
  }
  export default NewBook;