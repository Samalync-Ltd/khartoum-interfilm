import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const handleServiceClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="service-card" onClick={handleServiceClick}>
      <div className="service-icon">{service.icon}</div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <button className="service-link">Get Quote</button>
      
      <style jsx>{`
        .service-card {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
          text-align: center;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        
        .service-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .service-card h3 {
          color: var(--primary);
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        
        .service-card p {
          color: var(--gray);
          margin-bottom: 1.5rem;
          flex-grow: 1;
          line-height: 1.6;
        }
        
        .service-link {
          background: var(--secondary);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          margin-top: auto;
        }
        
        .service-link:hover {
          background: var(--primary);
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;