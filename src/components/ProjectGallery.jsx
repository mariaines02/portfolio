import PropTypes from "prop-types";
import Slider from "react-slick";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectGallery = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Masque les flèches
    autoplay: true, // Active le défilement automatique
    autoplaySpeed: 3000000, // Intervalle de 3 secondes
    afterChange: (index) => setCurrentIndex(index),
  };

  return (
    <div className="project-gallery p-6 bg-zinc-800 rounded-xl">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`project-slide p-6 lg:flex lg:gap-6 items-start ${currentIndex === index ? "block" : "hidden"}`}
        >
          {/* Images à gauche */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <Slider className="inner-slider w-full" {...settings}>
              {project.imgSrc.map((src, key) => (
                <figure key={key} className="img-box rounded-lg mb-4">
                  <img
                    src={src}
                    alt={project.title}
                    loading="lazy"
                    className="img-cover rounded-lg"
                  />
                </figure>
              ))}
            </Slider>
          </div>
          {/* Informations à droite */}
          <div className="lg:w-1/2">
            <h3 className="title-1 mb-3 text-sky-400">{project.title}</h3>
            <p className="text-zinc-200 mb-4">{project.description}</p>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {project.tags.map((tag, key) => (
                <span
                  key={key}
                  className="h-8 text-sm text-zinc-400 bg-zinc-50/10 px-3 py-1 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/*
            <div className="flex justify-start">
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sky-400 hover:underline"
              >
                View Project
                <span className="material-symbols-rounded ml-1">arrow_outward</span>
              </a>
            </div>
            */}
          </div>
        </div>
      ))}
    </div>
  );
};

ProjectGallery.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.arrayOf(PropTypes.string).isRequired,
      title: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      description: PropTypes.string.isRequired,
      projectLink: PropTypes.string,
    })
  ).isRequired,
};

export default ProjectGallery;
