import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
        return (
                <Navbar expand="lg" variant="green" style={{ color: "white" }}>
                        <Container>
                                <Navbar.Brand href="#home">Eugene Garden & Harvest Center</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto">
                                                <Nav.Link href="#home">Home</Nav.Link>
                                                <Nav.Link href="#link">Gallery</Nav.Link>
                                                <Nav.Link href="#link">Contact Us</Nav.Link>
                                                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">
                                                Action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                                Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">
                                                Something
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                                Separated link
                                        </NavDropdown.Item>
                                </NavDropdown> */}
                                        </Nav>
                                </Navbar.Collapse>
                        </Container>
                </Navbar>
        );
}
