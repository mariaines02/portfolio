import Slider from "react-slick";
import ProjectGallery from "./ProjectGallery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  //Treasury management application
  {
    imgSrc: ["./images/projet-treasury-1.png", "./images/projet-treasury-2.png"],
    title: "Treasury management application",
    tags: ["React", "TailwindCSS", "Chart.js", "Electron"],
    description: "A desktop app for managing financial transactions and generating visual reports. Built with React and Electron, it allows users to monitor incomes and expenses, manage categories, and view real-time summaries with charts and tables.",
    projectLink: "https://your-quicksql-project-link.com",
  }  ,
  //Portfolio Website
  {
    imgSrc: ["./images/projet-portfolio-1.png","./images/projet-portfolio-3.png"],
    title: "Portfolio Website",
    tags: ["React", "Tailwind CSS", "Web Development"],
    description: "This is my personal portfolio website built with React and Tailwind CSS. It showcases my skills, projects, and experience in a clean, modern, and fully responsive design. The website is optimized for all devices, ensuring a smooth user experience across desktop, tablet, and mobile screens.",
    projectLink: "https://myportfolio.com/",
  },  
  //CafeArtisan Website
  {
    imgSrc: ["./images/projet-cafeArtisan-1.png", "./images/projet-cafeArtisan-2.png"],
    title: "CafeArtisan Website",
    tags: ["React", "Tailwind CSS", "Web Development"],
    description: "A personal project designed for fun, Café Artisan is a modern and elegant showcase website featuring an 'About Us' section, a detailed menu display, and a contact form. The goal was to create a cozy and inviting online presence for a fictional coffee shop.",
    projectLink: "https://myportfolio.com/",
  },  
  // Port Logistics Booking System
  {
    imgSrc: ["./images/projet-booking-5.png", "./images/projet-booking-4.png"],
    title: "Port Logistics Booking System",
    tags: ["Laravel", "PHP", "Tailwind CSS"],
    description: "Developed as part of my Master's final project, this web application is designed to streamline port logistics operations by allowing freight forwarders and shipping companies to book access slots for trucks. It includes features such as smart reservation requests via file uploads, real-time availability calendar, reservation management with filtering options, and a dashboard for planners to review, accept, or reject bookings with attached documentation.",
    projectLink: "https://your-project-link.com",
  } ,
  // Port Access Control System
  {
    imgSrc: ["./images/projet-accessControl-1.png", "./images/projet-accessControl-5.png", "./images/projet-accessControl-6.png"],
    title: "Port Access Control System",
    tags: ["Laravel", "PHP", "Python", "OpenCV", "EasyOCR"],
    description: "This complementary application, also part of my Master's final project, is focused on access control and security within port facilities. It features automatic and manual license plate recognition using OCR technology (OpenCV & EasyOCR), secure access validation for scheduled reservations, real-time feedback for entry authorization or denial, and dedicated interfaces for drivers and port agents to manage access and monitor upcoming bookings.",
    projectLink: "https://your-project-link.com",
  },
  
  // Online Housing Sales Platform
  {
    imgSrc: ["./images/projet-housing-1.png", "./images/projet-housing-2.png"],
    title: "Online Housing Sales Platform",
    tags: ["ASP. NET", "C#", "HTML", "CSS", "JavaScript", "SQL"],
    description: "This project, developed as part of my Bachelor's final thesis, is a full-featured web application for real estate sales. It includes intelligent search, detailed property pages, user authentication, favorites and cart functionality, a multi-step reservation process, and an admin dashboard with client and sales statistics.",
    projectLink: "https://your-housing-project-link.com",
  },
  
  // QuickSQL
  {
    imgSrc: ["./images/projet-quickSql-1.png", "./images/projet-quickSql-2.jpg"],
    title: "QuickSQL - Learn SQL Easily",
    tags: ["HTML", "CSS", "Web Development"],
    description: "QuickSQL is an educational website created as a school project to help users learn SQL through tutorials, exercises, and quizzes, providing an engaging introduction to database management.",
    projectLink: "https://your-quicksql-project-link.com",
  }  
];

const Work = () => {
  // Paramètres du slider pour parcourir les projets
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Un seul projet visible à la fois
    slidesToScroll: 1,
    arrows: true, // Affiche les flèches pour naviguer
  };

  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 text-center text-4xl">
          My portfolio highlights
        </h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index}>
              {/* Utilisation de ProjectGallery pour afficher un projet */}
              <ProjectGallery projects={[project]} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Work;
