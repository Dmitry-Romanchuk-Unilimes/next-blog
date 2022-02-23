/* eslint-disable @next/next/no-page-custom-font */
import { Container, NavLink } from 'react-bootstrap';
import Navbar from './Navbar.js';
import Link from 'next/link';
import { useTheme } from 'providers/ThemeProvider.js';

export default function PageLayout({ children, className }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme.type}>
      <Container>
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <div className={`page-wrapper ${className}`}>{children}</div>

        <footer className="page-footer">
          <div className='d-flex align-items-center justify-content-center'>
            <Link href='/' passHref><NavLink>courses</NavLink></Link>{' | '}
            <Link href='/' passHref><NavLink>github</NavLink></Link>{' | '}
            <Link href='/' passHref><NavLink>facebook</NavLink></Link>
          </div>
        </footer>
      </Container>
      <style jsx global>
        {
          `
            html, body {
              background: ${theme.background};
              color: ${theme.fontColor};
              transition: color 0.2s ease-out 0s, background 0.2 ease-out 0s;
            }
          `
        }
      </style>
    </div>
  )
}