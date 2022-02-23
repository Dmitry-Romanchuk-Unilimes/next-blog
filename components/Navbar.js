import { Navbar, Nav, NavLink } from 'react-bootstrap';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const BlogNavbar = ({ theme, toggleTheme }) => {

  return (
    <Navbar
      variant={theme.type}
      className="fj-navbar fj-nav-base"
      bg="transparent"
      expand="lg" >
      <Navbar.Brand className="fj-navbar-brand">
        <Link href='/' passHref>
          <NavLink style={{ color: theme.fontColor }}>Dmitry Romanchuk</NavLink>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Nav className="ml-auto" style={{ display: 'flex', alignItems: 'center' }}>
          <Link href='/' passHref>
            <>
              <div></div>
              <ThemeToggle onChange={toggleTheme} />
              <NavLink
                className="fj-navbar-item fj-navbar-link">Home
              </NavLink>
            </>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default BlogNavbar;