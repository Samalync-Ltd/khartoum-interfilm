'use client';
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <Link href="/">
              <h2>Khartoum Inter Film</h2>
            </Link>
          </div>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link href="/">Home</Link>
            <Link href="/#services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/team">Team</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/#contact" onClick={scrollToContact}>Contact</Link>
          </div>

          <div className="nav-cta">
            <Link href="/#contact" className="btn btn-primary" onClick={scrollToContact}>
              Get Started
            </Link>
          </div>

          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>

      <style jsx>{`
        .header {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }
        
        .logo h2 {
          color: var(--primary);
          font-size: 1.5rem;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        
        .nav-links a {
          text-decoration: none;
          color: var(--dark);
          font-weight: 500;
          transition: color 0.3s ease;
        }
        
        .nav-links a:hover {
          color: var(--primary);
        }
        
        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
        }
        
        .hamburger span {
          width: 25px;
          height: 3px;
          background: var(--primary);
          margin: 3px 0;
          transition: 0.3s;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 70px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 70px);
            background: white;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding-top: 2rem;
            transition: left 0.3s ease;
          }
          
          .nav-links.active {
            left: 0;
          }
          
          .hamburger {
            display: flex;
          }
          
          .nav-cta {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;