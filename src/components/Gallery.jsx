import React from "react";
import spasample from "../images/spasample.png";

const images = [
  {
    src: spasample,
    alt: "Single Page Design",
    caption: "Modern Single Page Layout – Fast & Responsive",
    link: "https://samplesinglepage.netlify.app/",
  },
  // },
  // {
  //   src: otherSample,
  //   alt: "Multi Page Design",
  //   caption: "Multi-Page Website – Clean Navigation & SEO Optimized",
  //   link: "https://yoursecondsite.netlify.app/", // replace with actual link
  // },
];

const Gallery = () => (
  <section id="gallery" className="py-16 px-6">
    <h2 className="text-3xl font-bold text-center mb-10">Our Work</h2>
    <p className="text-center text-gray-600 mb-10">
      Check out some of our recent projects. Click on the images to view live
      demos.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
      {images.map((image, index) => (
        <div key={index} className="w-full">
          <a href={image.link} target="_blank" rel="noopener noreferrer">
            <div className="h-64 overflow-hidden rounded shadow">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </a>
          <p className="mt-3 text-center text-gray-700 text-sm">
            {image.caption}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Gallery;
