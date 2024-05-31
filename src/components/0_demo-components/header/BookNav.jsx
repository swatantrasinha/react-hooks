import { Link,Outlet } from 'react-router-dom'


export const BookNav = () => {
  return (
    <>
      <nav>
          <Link to="/books/mahabharat"> Mahabharat</Link>
          <Link to="/books/ramayan"> Ramayan</Link>
          <Link to="/books/new"> NewBook</Link>
      </nav>
      <Outlet context={{message: 'Hello World'}}/>
    </>
  )
}
