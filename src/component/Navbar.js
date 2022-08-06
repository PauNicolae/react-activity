import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
   return (
      <Navbar bg="light" expand="lg">
         <Container>
            <Navbar.Brand href="#home">React Graded Activity</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/Exercises1">Exercise1</Nav.Link>
                  <Nav.Link href="/Exercises2">Exercise2</Nav.Link>
                  <Nav.Link href="/Exercises3">Exercise3</Nav.Link>
                  <Nav.Link href="/Exercises4">Exercise4</Nav.Link>
                  <Nav.Link href="/Exercises5">Exercise5</Nav.Link>
                  <Nav.Link href="/Exercises6">Exercise6</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default BasicExample;
