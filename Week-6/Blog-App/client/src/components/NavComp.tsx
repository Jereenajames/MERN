import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const NavComp = () =>{
    return(
        <div>
            <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">BLOG APP</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="btn btn-primary me-5" to="/">Post</Link>
            <Link className="btn btn-primary me-5" to="/signin">SignIn</Link>
            <Link className="btn btn-primary me-5" to="/signup">signup</Link>
            <Link className="btn btn-primary me-5" to="/create">Create Post</Link>

          </Nav>
        </Container>
      </Navbar>
      </div>
    )
}
export default NavComp;