import { Container, NavLink } from 'react-bootstrap';
import Navbar from './Navbar.js';
import Head from 'next/head';
import Link from 'next/link';

export default function PageLayout({ children, className }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&family=Raleway:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>
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