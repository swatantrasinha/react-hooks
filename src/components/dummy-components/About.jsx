import { Link, Outlet } from 'react-router-dom'
const About = () => {
  return (
    <>
       {/* <nav>
          <Link to="/about/teamnew"> Team</Link>
      </nav> */}
      <h1>About Page </h1>
      <Outlet />
      <h1>About Page ends </h1>
    </>
  )
}

export default About