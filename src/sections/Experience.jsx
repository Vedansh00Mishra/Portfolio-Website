import { Canvas } from "@react-three/fiber";
import React from "react";
import { div } from "three/tsl";
import { workExperiences } from "../constants";

const Experience = () => {
  return (
    <section className="c-space my-20">
      <div className="w-full text-white-600">
        <h3 className="head-text">My Work Experience</h3>

        <div className="mt-5">
          <a
            href="/assets/Vedansh_Mishra Resume.pdf" // put your actual resume path here
            download
            className="text-sm bg-white text-black px-4 py-2 rounded-xl font-semibold hover:bg-gray-200 transition mt-10"
          >
            Download Resume
          </a>
        </div>
        <div className="mt-5 w-full">
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(
                ({ icon, name, pos, title, duration }, index) => (
                  <div key={index} className="work-content_container group">
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      {/* <div className="work-content_logo">
                        <img src={icon} alt="logo" className="w-full h-full" />
                      </div> */}

                      <div className="work-content_bar" />
                    </div>

                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{name}</p>
                      <p className="text-sm mb-5">
                        {pos} — {duration}
                      </p>

                      <ul className="list-disc pl-5 text-white/80 space-y-2 group-hover:text-white transition ease-in-out duration-500">
                        {title.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
