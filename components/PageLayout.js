import { Container, NavLink } from 'react-bootstrap';
import Navbar from './Navbar.js';

export default function PageLayout({ children, className }) {
  return (
    <Container>
      <Navbar />

      <div className={`page-wrapper ${className}`}>{children}</div>

      <footer className="page-footer">
        <div>
          <NavLink href="#">courses</NavLink>{' | '}
          <NavLink href="#">github</NavLink>{' | '}
          <NavLink href="#">facebook</NavLink>
        </div>
      </footer>
    </Container>
  )
}