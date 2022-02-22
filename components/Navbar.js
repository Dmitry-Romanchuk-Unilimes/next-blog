import { Navbar, Nav, NavLink } from 'react-bootstrap';

const BlogNavbar = () => {
  return (
    <Navbar
      className="fj-navbar fj-nav-base"
      bg="transparent"
      expand="lg" >
      <Navbar.Brand className="fj-navbar-brand">
        <NavLink href="#">Dmitry Romanchuk</NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink
            className="fj-navbar-item fj-navbar-link"
            href='/'>Home
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default BlogNavbar;