import { Container, Navbar, Nav } from 'react-bootstrap';
function NavBarPanel() {
    return (
        <Navbar fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#pagetop">JOFFREY INOCENCIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"/>
            <Nav>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link href="https://docs.google.com/document/d/1h6GxOUdmRP6GThTD5P86sQFLQfqZuTEDCdoJ_4TBlPw/edit?usp=sharing"
                    target="_blank">Resume</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBarPanel

