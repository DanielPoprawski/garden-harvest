import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavItem } from "react-bootstrap";
import { Link } from "react-router";
import Logo from "../../assets/logo.svg";

export default function Header() {
        return (
                <Navbar expand="xxl" bg="primary">
                        <Container>
                                <Navbar.Brand>
                                        <Link className="nav-link" to="/">
                                                <img src={Logo} className="svg-style" />
                                        </Link>
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto">
                                                <NavItem>
                                                        <Link className="nav-link" to="/">
                                                                Home
                                                        </Link>
                                                </NavItem>
                                                <NavItem>
                                                        <Link className="nav-link" to="/gallery">
                                                                Gallery
                                                        </Link>
                                                </NavItem>
                                                <NavItem>
                                                        <Link className="nav-link" to="/contact">
                                                                Contact
                                                        </Link>
                                                </NavItem>
                                        </Nav>
                                </Navbar.Collapse>
                        </Container>
                </Navbar>
        );
}
