// src/pages/Home.js
// import React from "react";
import React, { useRef, useState } from "react";
import "./Home.css";
import profilePic from "../Assets/profile.jpg";
import { ReactTyped } from "react-typed";
import emailjs from "emailjs-com";

function Home() {
   const form = useRef();
   const [statusMessage, setStatusMessage] = useState(null);
   const [statusType, setStatusType] = useState(""); // "success" or "error"
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hotw4qe",     // replace with your EmailJS Service ID
        "template_kw8adep",    // replace with your EmailJS Template ID
        form.current,
        "DeFfok1-2cvt6NwLN"      // replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("✅ Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <div>
      {/* Hero / Intro Section */}
      <section id="home" className="hero home-container">
        <div className="overlay"></div>
        <div className="home-content">
             {/* Profile Image */}
             <img src={profilePic} alt="Profile" className="profile-pic" />
          <h1>
            Hello, I’m <span className="highlight">ALHASSAN FATIMA GOGO</span>
          </h1>
          {/* Typing Animation */}
        <ReactTyped
            strings={[
             "Cybersecurity Specialist",
             "Data Analyst",
            "Frontend Developer",
  ]}
  typeSpeed={50}
  backSpeed={30}
  loop
/>

          <h2>Aspiring Cybersecurity & Data Specialist</h2>
          <p>
            Passionate about securing digital systems, analyzing data,
            and solving real-world technology problems. Skilled in
            networking, frontend development, and business analysis.
          </p>
          <a href="/cv.pdf" download className="cv-button">
            📄 Download CV
          </a>
        </div>
      </section>

    {/* Projects Section */}
<section id="projects" className="projects">
  <h2>Projects</h2>
  <div className="project-grid">
    <div className="project-card">
      <img
        src="https://source.unsplash.com/400x250/?laptop,code"
        alt="Project 1"
      />
      <h3>Logistics System</h3>
      <p>A frontend logistics website built with React and TailwindCSS.</p>
      <a href="https://github.com/fatigogo/Logistic-System" target="_blank" rel="noreferrer">
        🔗 View Project
      </a>
    </div>

    <div className="project-card">
      <img
        src="https://source.unsplash.com/400x250/?cybersecurity,hacking"
        alt="Project 2"
      />
      <h3>Cybersecurity Dashboard</h3>
      <p>Monitoring tool for tracking network threats and vulnerabilities.</p>
      <a href="#" target="_blank" rel="noreferrer">
        🔗 View Project
      </a>
    </div>

    <div className="project-card">
      <img
        src="https://source.unsplash.com/400x250/?data,analytics"
        alt="Project 3"
      />
      <h3>Data Analysis Portfolio</h3>
      <p>Case studies analyzing datasets with Python, SQL, and Excel.</p>
      <a href="#" target="_blank" rel="noreferrer">
        🔗 View Project
      </a>
    </div>
  </div>
</section>


    {/* Skills Section */}
<section id="skills" className="skills">
  <h2>Skills</h2>
  <div className="skills-grid">
    <div className="skill-card">
      <span>⚛️ React.js</span>
      <div className="progress-bar">
        <div className="progress" style={{ width: "80%" }}></div>
      </div>
    </div>

    <div className="skill-card">
      <span>🐍 Python</span>
      <div className="progress-bar">
        <div className="progress" style={{ width: "75%" }}></div>
      </div>
    </div>

    <div className="skill-card">
      <span>🗄️ SQL / Databases</span>
      <div className="progress-bar">
        <div className="progress" style={{ width: "70%" }}></div>
      </div>
    </div>

    <div className="skill-card">
      <span>🔐 Cybersecurity</span>
      <div className="progress-bar">
        <div className="progress" style={{ width: "65%" }}></div>
      </div>
    </div>

    <div className="skill-card">
      <span>📊 Data Analysis</span>
      <div className="progress-bar">
        <div className="progress" style={{ width: "85%" }}></div>
      </div>
    </div>
  </div>
</section>


      {/* Contact Section */}
<section id="contact" className="contact">
  <h2>Contact Me</h2>
 <form ref={form} onSubmit={sendEmail} className="contact-form">
  <input type="text" name="user_name" placeholder="Your Name" required />
  <input type="email" name="user_email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
  <button type="submit">Send Message</button>
</form>

  <div className="contact-info">
    <p>📧 Email: fatigogo33@gmail.com</p>
    <p>📱 Phone: +234 703 196 2475</p>
    <p>📍 Location: Niger, Nigeria</p>
  </div>
</section>

    </div>
  );
}

export default Home;
