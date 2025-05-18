import React from "react";
import { FaLinkedin } from "react-icons/fa";
import jj from "../images/jj.jpeg";

const About = () => (
  <section id="about" className="py-20 px-4 sm:px-6 bg-slate-100">
    {/* Centered About Text Section */}
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-4">About Us</h2>
      <div className="w-12 h-1 bg-blue-600 mb-6 rounded"></div>
      <p className="text-lg text-gray-700 leading-relaxed">
        I'm passionate about building fast, responsive, and user-friendly
        websites for businesses of all sizes. From single-page sites to complex
        web platforms, I create digital experiences that perform.
      </p>
    </div>

    <div className="max-w-6xl mx-auto mt-16">
      <h3 className="text-3xl font-semibold text-center mb-10">
        Meet the Team
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
        {/* Team Member 1 */}
        <div className="bg-white p-6 rounded-lg shadow text-center flex flex-col justify-between min-h-[400px]">
          <div>
            <img
              src={jj}
              alt="Julio Juarez"
              className="w-24 h-24 rounded-full mb-4 mx-auto"
            />
            <h4 className="text-xl font-bold text-blue-700">Julio Juarez</h4>
            <p className="text-sm text-gray-600 mb-2">Full-Stack Developer</p>
            <p className="text-gray-700 text-base leading-relaxed">
              Julio brings 7+ years of experience in developing scalable web
              applications. From backend APIs to frontend UIs, he delivers
              robust solutions tailored to each project.
            </p>
          </div>
          <div className="mt-6">
            <a
              href="https://www.linkedin.com/in/juliojuarez713"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-lg"
            >
              <FaLinkedin className="inline mr-1 text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
