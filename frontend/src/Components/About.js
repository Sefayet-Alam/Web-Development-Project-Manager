import React from 'react';
import './About.css';
import Navbar from './NavBar';

const About = () => {
  return (

    <Navbar drawerWidth={220} content={
      <div className="about-container">
        <h1>About</h1>

        <div className="section">
          <h2>Course: CSE 3100 Web Based Application Project</h2>
          <p>
            CSE 3100, Web Based Application Project, is designed to equip students with the skills necessary to develop modern web applications. The course emphasizes the integration of frontend and backend technologies to create functional and user-friendly web solutions. Students learn to apply industry-standard practices in web development, including using frameworks like React for the frontend and Django for the backend.
          </p>
          <h3>Key Learning Objectives:</h3>
          <ul>
            <li>Understanding the fundamentals of web-based application development.</li>
            <li>Proficiency in using React.js for building dynamic and interactive user interfaces (UIs).</li>
            <li>Mastery of Django, a high-level Python web framework, for developing robust backend services and APIs.</li>
            <li>Practical experience in integrating frontend and backend components to create full-stack web applications.</li>
            <li>Implementing essential features such as user authentication, database management, and API communication using Axios and Django Rest Framework.</li>
            <li>Developing project management skills through hands-on projects that involve creating, updating, deleting, and searching projects within a web application context.</li>
          </ul>
        </div>

        <div className="section">
          <h2>Project: Web Development Project Manager</h2>
          <p>
            "Web Development Project Manager" is a comprehensive web application developed as part of the CSE 3100 course. It serves as a project management tool tailored for organizing and managing various projects within an organization or team. The application leverages modern web technologies to deliver a streamlined user experience and efficient project management capabilities.
          </p>
          <h3>Technologies Used:</h3>
          <ul>
            <li><strong>Frontend:</strong> React.js, HTML, CSS, Material UI.</li>
            <li><strong>Backend:</strong> Django, Django Rest Framework.</li>
            <li><strong>API Communication:</strong> Axios for handling HTTP requests.</li>
            <li><strong>Database:</strong> Utilizes Django ORM for database management.</li>
            <li><strong>Development Tools:</strong> Visual Studio Code (VS Code) as the code editor.</li>
          </ul>
          <h3>Key Features:</h3>
          <ul>
            <li><strong>Project CRUD Operations:</strong> Allows users to Create, Read, Update, and Delete projects.</li>
            <li><strong>Project Status and Details:</strong> Enables users to assign start and end dates, update project status, and add comments or notes.</li>
            <li><strong>User Authentication:</strong> Implements secure user authentication and authorization mechanisms.</li>
            <li><strong>Responsive Design:</strong> Utilizes Material UI templates for responsive and visually appealing UI components.</li>
            <li><strong>API Integration:</strong> Integrates with Django Rest Framework for efficient API development and consumption.</li>
          </ul>
          <h3>Purpose and Benefits:</h3>
          <p>
            "Web Development Project Manager" aims to enhance project collaboration and management efficiency within teams or organizations. By providing a centralized platform for project tracking and updates, the application facilitates better coordination, communication, and productivity in handling various projects.
          </p>
        </div>

        <div className="section">
          <h2>About Me: Sefayet Alam</h2>
          <p>
            I am Sefayet Alam, an undergraduate student pursuing a degree in Computer Science and Engineering (CSE) at Rajshahi University of Engineering & Technology (RUET). With a strong interest in competitive programming and full-stack web development, I have gained proficiency in technologies such as Django and React.
          </p>
          <h3>Background:</h3>
          <p>
            I have focused on competitive programming and full-stack development using the MERN stack, with specific expertise in Django and React.
          </p>
          <h3>Future Goals:</h3>
          <p>
            My future goal is to expand my skills in Machine Learning (ML) and data analysis, leveraging data-driven insights to enhance application functionalities and user experiences.
          </p>
        </div>
      </div>
    } />
  );

}

export default About;
