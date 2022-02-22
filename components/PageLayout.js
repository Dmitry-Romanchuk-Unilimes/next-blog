/* eslint-disable @next/next/no-page-custom-font */
import { Container, NavLink } from 'react-bootstrap';
import Navbar from './Navbar.js';
import Link from 'next/link';

export default function PageLayout({ children, className }) {
  return (
    <>
      <Container>
        <Navbar />

        <div className={`page-wrapper ${className}`}>{children}</div>

        <footer className="page-footer">
          <div className='d-flex align-items-center justify-content-center'>
            <Link href='/' passHref><NavLink>courses</NavLink></Link>{' | '}
            <Link href='/' passHref><NavLink>github</NavLink></Link>{' | '}
            <Link href='/' passHref><NavLink>facebook</NavLink></Link>
          </div>
        </footer>
      </Container>
    </>
  )
}