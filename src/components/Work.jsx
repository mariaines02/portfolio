import Slider from "react-slick";
import ProjectGallery from "./ProjectGallery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    imgSrc: ["./images/projet-portfolio-1.png", "./images/projet-portfolio-2.jpg"],
    title: "Portfolio Website",
    tags: ["React", "Tailwind CSS", "Web Development"],
    description: "This is my personal portfolio website built with React and Tailwind CSS. It showcases my skills, projects, and experience in a clean, modern, and fully responsive design. The website is optimized for all devices, ensuring a smooth user experience across desktop, tablet, and mobile screens.",
    projectLink: "https://myportfolio.com/",
  },  
  {
    imgSrc: ["./images/projet-booking-1.png", "./images/projet-booking-2.png"],
    title: "Port Logistics Booking System",
    tags: ["Laravel", "PHP", "Tailwind CSS"],
    description: "This application, developed as part of my Master's final project, is a booking system for port logistics, enabling freight forwarders and shipping companies to reserve port access for their trucks.",
    projectLink: "https://your-project-link.com",
  },
  {
    imgSrc: ["./images/projet-accessControl-1.png", "./images/projet-accessControl-2.jpg"],
    title: "Port Access Control System",
    tags: ["Laravel", "PHP","Tailwind CSS", "OpenCV", "EasyOCR"],
    description: "This application, developed as part of my Master's final project, is an access control system for port security, ensuring only authorized vehicles and drivers with valid reservations can access port areas.",
    projectLink: "https://your-project-link.com",
  },
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
