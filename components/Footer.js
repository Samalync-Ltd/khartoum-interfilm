import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Khartoum Inter Film</h3>
            <p>Delivering high-quality and distinguished content with simplicity and professionalism.</p>
            <div className="social-links">
              <a href="https://www.facebook.com/share/17ioDH89xR/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/khartoum1230?igsh=MXJ6eDRvcDlrbGdl&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.tiktok.com/@khartouminterfilm?_r=1&_t=ZM-91YdJa3dgqJ" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link href="/#services">Video & Photography</Link></li>
              <li><Link href="/#services">Graphic Design</Link></li>
              <li><Link href="/#services">Marketing</Link></li>
              <li><Link href="/#services">Video Editing</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/team">Our Team</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p><i className="fas fa-envelope"></i> khartouminterfilm@gmail.com</p>
            <p><i className="fas fa-phone"></i> 0795429785</p>
            <p><i className="fas fa-clock"></i> 9:00AM - 5:00PM</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Khartoum Inter Film. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--dark);
          color: white;
          padding: 50px 0 20px;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .footer-section h3,
        .footer-section h4 {
          margin-bottom: 1rem;
          color: var(--secondary);
        }
        
        .footer-section ul {
          list-style: none;
        }
        
        .footer-section ul li {
          margin-bottom: 0.5rem;
        }
        
        .footer-section a {
          color: #ccc;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-section a:hover {
          color: var(--secondary);
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .social-links a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          transition: all 0.3s ease;
        }
        
        .social-links a:hover {
          background: var(--secondary);
          transform: translateY(-3px);
        }
        
        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: #ccc;
        }
        
        .footer-section p {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          color: #ccc;
        }
      `}</style>
    </footer>
  );
};

export default Footer;