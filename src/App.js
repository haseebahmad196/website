import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faArrowUp, faCode, faMobileAlt, faPencilRuler, faChartLine } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const App = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
    document.getElementById('scrollDownArrow').style.display = 'none';
    document.getElementById('scrollUpArrow').style.display = 'block';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    document.getElementById('scrollDownArrow').style.display = 'block';
    document.getElementById('scrollUpArrow').style.display = 'none';
  };

  return (
    <div>
      <header className="bg-gradient text-white py-3 shadow-sm">
        <nav className="container navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="#"><img src="logoo.jpg" alt="BugXTech Logo" height="70" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link text-light" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section id="hero" className="d-flex align-items-center justify-content-center">
        <div className="container text-center">
          <div className="hero-content">
            <h1 className="display-4 font-weight-bold">Empowering Your Digital Success</h1>
            <p className="lead">At BugXTech, we harness technology to eliminate obstacles and bring your vision to life. Specializing in cutting-edge web and app development, as well as data-driven solutions, we transform your ideas into scalable, secure, and innovative digital experiences.</p>
            <a href="#contact" className="cta-button btn btn-warning btn-lg">Start Your Journey with Us</a>
          </div>
        </div>
      </section>

      <section id="services" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center section-heading text-primary mb-5">Explore Our Exceptional Services</h2>
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <FontAwesomeIcon icon={faCode} className="fa-3x text-warning mb-3" />
                  <h3 className="card-title text-success">Web Development</h3>
                  <p className="card-text">Custom websites built with React.js, designed to provide a seamless and responsive experience for users.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <FontAwesomeIcon icon={faMobileAlt} className="fa-3x text-warning mb-3" />
                  <h3 className="card-title text-success">App Development</h3>
                  <p className="card-text">End-to-end application development using the latest React technologies for iOS and Android platforms.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <FontAwesomeIcon icon={faPencilRuler} className="fa-3x text-warning mb-3" />
                  <h3 className="card-title text-success">UI/UX Design</h3>
                  <p className="card-text">Enhancing the user experience through intuitive interfaces and a modern design approach.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <FontAwesomeIcon icon={faChartLine} className="fa-3x text-warning mb-3" />
                  <h3 className="card-title text-success">Data Science Solutions</h3>
                  <p className="card-text">Data-driven solutions using Python, R, and Machine Learning to transform data into actionable insights, empowering businesses to make informed decisions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-5 bg-white text-dark">
        <div className="container">
          <h2 className="text-center section-heading text-primary mb-5">Who We Are</h2>
          <div className="row">
            <div className="col-md-10 mx-auto">
              <p className="text-center">At BugXTech, our mission is simple: eliminate bugs and deliver exceptional technology solutions to our clients. Our name, BugXTech, reflects our commitment to eliminating software issues ("Bugs") using cutting-edge technology ("X"), providing reliable and powerful solutions for businesses worldwide.</p>
              <p className="text-center">We are a young and ambitious company, specializing in web and app development, as well as data science projects. Our team combines expertise in modern technologies such as React.js, Node.js, Python, and cloud computing to deliver seamless, responsive, and bug-free products. Whether it's developing custom websites, scalable applications, or using data science to unlock insights, we are driven by innovation and a passion for technology.</p>
              <p className="text-center">We believe in partnering with our clients to create user-centric experiences, leveraging data, creativity, and technology to solve real-world challenges. Our data science services cover everything from data visualization, predictive modeling, and AI solutions, helping businesses to make data-driven decisions and grow.</p>
              <p className="text-center">We understand the importance of building trust and delivering value. At BugXTech, we pride ourselves on creating not only bug-free software but also building solutions that elevate our clients' success.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center section-heading text-warning mb-5">Our Featured Projects</h2>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <h3 className="card-title text-primary">DoingThisTogether</h3>
                  <p className="card-text">A versatile and integrated platform designed to support individuals dealing with mental health challenges. Built using React for the frontend and SQL for the backend, it offers tools like PHQ-9 and GAD-7 assessments, personalized remedies, video lectures, patient management, and more.</p>
                  <a href="#" className="btn btn-warning mt-3">View Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <h3 className="card-title text-primary">E-Learning Tribal Initiative</h3>
                  <p className="card-text">A transformative educational project aimed at bringing innovative e-learning opportunities to tribal regions. Features include customized curriculum, localized content, interactive learning platforms, cultural preservation, and vocational training.</p>
                  <a href="#" className="btn btn-warning mt-3">View Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <h3 className="card-title text-primary">Project A</h3>
                  <p className="card-text">A fully-featured e-commerce web app, built with React.js to provide a high-performing user experience.</p>
                  <a href="#" className="btn btn-warning mt-3">View Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <h3 className="card-title text-primary">Project B</h3>
                  <p className="card-text">Mobile application for managing logistics and deliveries, leveraging React Native to ensure cross-platform compatibility.</p>
                  <a href="#" className="btn btn-warning mt-3">View Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <h3 className="card-title text-primary">Project C</h3>
                  <p className="card-text">Content management system for a blog site, featuring a beautiful UI and dynamic functionalities created with React.js.</p>
                  <a href="#" className="btn btn-warning mt-3">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-5 bg-dark text-white">
        <div className="container">
          <h2 className="text-center section-heading text-warning mb-5">Contact Us Today</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <h4>Get In Touch</h4>
              <p>If you have any questions, feel free to reach out to us. We are always here to help and provide the best solutions for your business needs. You can contact us through the form or reach out directly at:</p>
              <p><strong>Email:</strong> support@bugxtech.com</p>
              <p><strong>Phone:</strong> +123 456 7890</p>
              <p><strong>Address:</strong> 123 Tech Street, Innovation City, Country</p>
            </div>
            <div className="col-md-6">
              <form action="#" method="post" className="mx-auto">
                <div className="form-group">
                  <input type="text" name="name" className="form-control form-control-lg" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" className="form-control form-control-lg" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" name="subject" className="form-control form-control-lg" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea name="message" className="form-control form-control-lg" placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-warning btn-lg btn-block">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="social-links mb-3">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
          <p>&copy; 2024 BugXTech. All rights reserved.</p>
        </div>
      </footer>

      <button className="scroll-arrow" id="scrollDownArrow" title="Scroll Down" onClick={scrollToBottom}>
        <FontAwesomeIcon icon={faArrowDown} />
      </button>
      <button className="scroll-arrow" id="scrollUpArrow" title="Scroll Up" onClick={scrollToTop} style={{ display: 'none' }}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  );
};

export default App;
