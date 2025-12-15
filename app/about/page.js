import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  const values = [
    {
      title: "Distinction",
      description: "We focus on delivering marketing solutions that help our clients stand out in competitive markets. We don't just offer services—we create impactful experiences that leave a lasting impression on audiences.",
      icon: "⭐"
    },
    {
      title: "Strength",
      description: "We assist clients in building strong visual identities that reflect their vision and enhance their brand presence. We believe a robust visual identity is the cornerstone of any successful business.",
      icon: "💪"
    },
    {
      title: "Increase Sales",
      description: "We provide effective marketing strategies that help clients reach their target audience and achieve measurable increases in sales. Understanding market needs is key to delivering outstanding results.",
      icon: "📈"
    },
    {
      title: "Smoothness",
      description: "We ensure a seamless and satisfying client experience from start to finish. Clear communication, timely delivery, and exceptional customer service are always our priorities.",
      icon: "⚡"
    },
    {
      title: "Dedicated Services",
      description: "We offer customized services tailored to each client's unique requirements, whether they are small businesses or large corporations. Every client deserves innovative solutions designed specifically for them.",
      icon: "🎯"
    }
  ];

  return (
    <>
      <Header />
      
      <section className="about-hero">
        <div className="container">
          <h1>About Khartoum Inter Film</h1>
        </div>
        
        <style jsx>{`
          .about-hero {
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: white;
            padding: 150px 0 100px;
            text-align: center;
            margin-top: 70px;
          }
          
          .about-hero h1 {
            font-size: 3rem;
            font-weight: 700;
          }
        `}</style>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>
                We are Khartoum Interfilm Group, a leading company specializing in advertising content production 
                (videos, posters, and all types of visual marketing). Established in 2013, we have been dedicated 
                to providing creative and high-quality visual solutions tailored to the needs of our diverse clients.
              </p>
              
              <h3>Our Mission & Identity</h3>
              <p>
                At Khartoum Inter Film, we are committed to delivering high-quality and distinguished content. 
                In a world full of information, we stand out with our simplicity and high professionalism. 
                Our dedicated team always strives to convey media content with impartiality and transparency, 
                focusing on meeting the needs of our esteemed audience.
              </p>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          .about-content {
            max-width: 800px;
            margin: 0 auto;
          }
          
          .about-text h2 {
            color: var(--primary);
            margin-bottom: 1.5rem;
            font-size: 2.5rem;
          }
          
          .about-text h3 {
            color: var(--secondary);
            margin: 2rem 0 1rem;
            font-size: 1.8rem;
          }
          
          .about-text p {
            font-size: 1.1rem;
            line-height: 1.8;
            margin-bottom: 1.5rem;
            color: var(--dark);
          }
        `}</style>
      </section>

      <section className="section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="section-title">
            <h2>Our Values</h2>
            <p>The principles that guide our work and relationships</p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <style jsx>{`
          .values-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }
          
          .value-card {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            text-align: center;
            transition: transform 0.3s ease;
          }
          
          .value-card:hover {
            transform: translateY(-5px);
          }
          
          .value-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
          }
          
          .value-card h3 {
            color: var(--primary);
            margin-bottom: 1rem;
            font-size: 1.5rem;
          }
          
          .value-card p {
            color: var(--gray);
            line-height: 1.6;
          }
        `}</style>
      </section>

      <Footer />
    </>
  );
}