'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Section detection logic
      const sections = ['home', 'services', 'about', 'team', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'services', label: 'Services', icon: '🎯' },
    { id: 'about', label: 'About', icon: '👥' },
    { id: 'team', label: 'Team', icon: '🌟' },
    { id: 'projects', label: 'Projects', icon: '📂' },
    { id: 'contact', label: 'Contact', icon: '📞' },
  ];

  return (
    <header className={`creative-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-wrapper">
        {/* Logo with Animation */}
        <Link href="/" className="logo-container">
          <div className="logo-circle">
            <span className="logo-emblem">KI</span>
          </div>
          <div className="logo-text-container">
            <h1 className="logo-title">Khartoum Inter Film</h1>
            <div className="logo-dots">
              <span className="dot" style={{ animationDelay: '0s' }}></span>
              <span className="dot" style={{ animationDelay: '0.2s' }}></span>
              <span className="dot" style={{ animationDelay: '0.4s' }}></span>
            </div>
          </div>
        </Link>

        {/* Animated Navigation */}
        <nav className="creative-nav">
          <ul className="nav-list-creative">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item-creative">
                <Link 
                  href={item.id === 'home' ? '/' : `/${item.id}`}
                  className={`nav-link-creative ${activeSection === item.id ? 'active' : ''}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                  <span className="nav-indicator"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Floating CTA */}
        <div className="floating-cta">
          <button className="pulse-button">
            <span className="button-text">Start Project</span>
            <span className="button-sparkle">✨</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="creative-menu-btn">
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </button>
      </div>

      <style jsx>{`
        .creative-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 1.5rem 0;
          z-index: 1000;
          background: transparent;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .creative-header.scrolled {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          padding: 1rem 0;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(0, 27, 224, 0.1);
        }

        .header-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Logo Styles */
        .logo-container {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
        }

        .logo-circle {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: float 6s ease-in-out infinite;
          box-shadow: 0 4px 20px rgba(0, 27, 224, 0.3);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .logo-emblem {
          color: white;
          font-weight: 700;
          font-size: 1.25rem;
          letter-spacing: 1px;
        }

        .logo-text-container {
          display: flex;
          flex-direction: column;
        }

        .logo-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo-dots {
          display: flex;
          gap: 4px;
          margin-top: 4px;
        }

        .dot {
          width: 6px;
          height: 6px;
          background: var(--secondary);
          border-radius: 50%;
          animation: pulse 1.5s infinite;
          opacity: 0.7;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.2); opacity: 1; }
        }

        /* Navigation Styles */
        .creative-nav {
          display: flex;
        }

        .nav-list-creative {
          display: flex;
          gap: 0.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 50px;
          padding: 0.5rem;
          border: 1px solid rgba(0, 27, 224, 0.1);
        }

        .nav-item-creative {
          position: relative;
        }

        .nav-link-creative {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          padding: 0.75rem 1.25rem;
          border-radius: 40px;
          transition: all 0.3s ease;
          position: relative;
          min-width: 100px;
        }

        .nav-link-creative:not(.active):hover {
          background: rgba(0, 27, 224, 0.05);
          transform: translateY(-2px);
        }

        .nav-link-creative.active {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          box-shadow: 0 4px 15px rgba(0, 27, 224, 0.3);
        }

        .nav-link-creative.active .nav-icon,
        .nav-link-creative.active .nav-label {
          color: white;
        }

        .nav-icon {
          font-size: 1.25rem;
          margin-bottom: 4px;
          color: var(--dark);
          transition: color 0.3s ease;
        }

        .nav-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark);
          transition: color 0.3s ease;
        }

        .nav-indicator {
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 3px;
          background: linear-gradient(to right, var(--primary), var(--secondary));
          border-radius: 2px;
          transition: width 0.3s ease;
        }

        .nav-link-creative:hover .nav-indicator {
          width: 30px;
        }

        .nav-link-creative.active .nav-indicator {
          width: 40px;
          bottom: -10px;
        }

        /* Floating CTA */
        .floating-cta {
          position: relative;
        }

        .pulse-button {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          border: none;
          padding: 0.875rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 27, 224, 0.4);
          animation: pulse-glow 2s infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 4px 20px rgba(0, 27, 224, 0.4); }
          50% { box-shadow: 0 4px 30px rgba(0, 27, 224, 0.6); }
        }

        .pulse-button:hover {
          transform: translateY(-2px) scale(1.05);
          animation: none;
          box-shadow: 0 6px 30px rgba(0, 27, 224, 0.6);
        }

        .button-sparkle {
          animation: sparkle 2s infinite;
        }

        @keyframes sparkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .button-text {
          position: relative;
          z-index: 1;
        }

        .pulse-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .pulse-button:hover::before {
          width: 300px;
          height: 300px;
        }

        /* Mobile Menu Button */
        .creative-menu-btn {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .menu-bar {
          width: 30px;
          height: 3px;
          background: linear-gradient(to right, var(--primary), var(--secondary));
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .header-wrapper {
            padding: 0 1rem;
          }

          .nav-link-creative {
            padding: 0.75rem 1rem;
            min-width: 80px;
          }

          .nav-icon {
            font-size: 1rem;
          }

          .nav-label {
            font-size: 0.75rem;
          }
        }

        @media (max-width: 1024px) {
          .creative-nav,
          .floating-cta {
            display: none;
          }

          .creative-menu-btn {
            display: flex;
          }

          .logo-title {
            font-size: 1.25rem;
          }

          .logo-circle {
            width: 40px;
            height: 40px;
          }
        }

        @media (max-width: 480px) {
          .header-wrapper {
            padding: 0 1rem;
          }

          .logo-title {
            font-size: 1rem;
          }

          .creative-header {
            padding: 1rem 0;
          }

          .creative-header.scrolled {
            padding: 0.75rem 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;