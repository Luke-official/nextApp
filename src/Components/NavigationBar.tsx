import { Container, Nav} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom";
import ChangeTheme from "./ChangeTheme";

const NavigationBar = () => {

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
            <Link to="/">Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </Nav>
          <Nav>
           <ChangeTheme/>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar> 
    );

}

export default NavigationBar