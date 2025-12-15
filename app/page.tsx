'use client';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import { Service } from '../types';

export default function Home() {
  useEffect(() => {
    const serviceLinks = document.querySelectorAll('.service-link');
    serviceLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);

  const services: Service[] = [
    {
      title: "Video & Photography",
      description: "Cinematic Films, Commercial Advertisements, Documentary Videos, Corporate Promotional Videos, Animation & Motion Graphics, Video Editing, Artistic Photography, Commercial & Advertising Photography, Event & Wedding Photography.",
      icon: "🎬"
    },
    {
      title: "Graphic Design",
      description: "Branding & Visual Identity Design, Advertising & Marketing Design, Print Design, UI Design, 3D Design, Motion Graphics & Animation, Infographic Design, Illustration & Concept Art.",
      icon: "🎨"
    },
    {
      title: "Marketing",
      description: "Commercial Voice Over, Documentary Voice Over, Dubbing & Narration, Video Game Voice Over, E-learning & Audiobooks, IVR - Interactive Voice Response.",
      icon: "📢"
    },
    {
      title: "Video Editing",
      description: "Professional video editing services for all types of content including commercials, documentaries, corporate videos, and social media content.",
      icon: "✂️"
    },
    {
      title: "Voiceover",
      description: "High-quality voiceover services for commercials, documentaries, video games, e-learning, and audiobooks with professional voice artists.",
      icon: "🎙️"
    },
    {
      title: "Business Development",
      description: "Strategic business development services to help grow your brand and increase market presence through effective marketing strategies.",
      icon: "📈"
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to Khartoum Inter Film</h1>
            <p>
              Where we are committed to delivering high-quality and distinguished content. 
              In a world full of information, we stand out with our simplicity and high professionalism. 
              Our dedicated team always strives to convey media content with impartiality and transparency, 
              focusing on meeting the needs of our esteemed audience.
            </p>
            <div className="hero-buttons">
              <a href="#services" className="btn btn-primary">Our Services</a>
              <a href="#contact" className="btn btn-secondary">Contact Us</a>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          .hero {
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: white;
            padding: 150px 0 100px;
            text-align: center;
            margin-top: 70px;
          }
          
          .hero-content h1 {
            font-size: 3rem;
            margin-bottom: 1.5rem;
            font-weight: 700;
          }
          
          .hero-content p {
            font-size: 1.2rem;
            max-width: 800px;
            margin: 0 auto 2rem;
            line-height: 1.8;
          }
          
          .hero-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
          }
          
          @media (max-width: 768px) {
            .hero-content h1 {
              font-size: 2.2rem;
            }
            
            .hero-content p {
              font-size: 1.1rem;
            }
          }
        `}</style>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>Comprehensive marketing and content production services tailored to your needs</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
        
        <style jsx>{`
          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
          }
          
          @media (max-width: 768px) {
            .services-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>

      {/* Rest of the component remains the same but with TypeScript types */}
      {/* ... */}
    </>
  );
}