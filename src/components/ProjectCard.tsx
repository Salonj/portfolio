'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUpRightFromSquare,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import TechStackGrid from './TechStackGrid';

interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  techStack: { name: string; color: string }[];
  links: { name: string; href: string; icon: string }[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  image,
  techStack,
  links,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      {/* Project Card */}
      <div className="flex flex-col justify-between border-4 border-foreground p-4 rounded-md">
        {/* Project Image */}
        <div className="flex flex-col mb-10">
          <Image
            src={image}
            alt={`${name} project screenshot`}
            className="w-full h-40 object-cover rounded-md mb-4"
            width={400}
            height={200}
          />
          <h3 className="text-3xl font-bold">{name}</h3>
          <p className="text-lg">{description}</p>
        </div>

        {/* Read More Button */}
        <button
          onClick={toggleModal}
          className="w-full bg-foreground text-background rounded-md py-2"
          aria-label="Read More"
        >
          Read More
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-background max-h-full p-4 rounded-lg shadow-lg max-w-3xl w-full">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-5xl font-bold">{name}</h2>
              <button
                onClick={toggleModal}
                className="hover:text-accent"
                aria-label="Close Modal"
              >
                <FontAwesomeIcon icon={faXmark} className="text-3xl" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex flex-row gap-2">
              <div className="w-1/2">
                {/* Image */}
                <Image
                  src={image}
                  alt={`${name} project screenshot`}
                  className="w-full h-40 rounded-md"
                  width={500}
                  height={250}
                />
                {/* Description */}
                <h3 className="text-3xl font-bold">About the project</h3>
                <p className="text-base">
                  A word game designed for aphasia patients to improve
                  vocabulary and cognitive skills. Developed as part of the
                  COMP.SWE.100 course, this project focuses on creating a
                  user-friendly experience for a specialized audience.
                </p>
              </div>
              <div className="w-1/2">
                <h3 className="text-3xl font-bold">What did I Learn</h3>
                <p>
                  Developing larger applications with a team, integrating
                  IndexedDB for efficient data management, and collaborating
                  effectively with multiple developers on GitHub.
                </p>
                <h3 className="text-3xl font-bold">Challenges faced</h3>
                <ul>
                  <li>
                    Ensuring accessibility for users with cognitive impairments.
                  </li>
                  <li>
                    Designing a responsive UI that works across multiple
                    devices.
                  </li>
                  <li>Debugging database interactions in IndexedDB.</li>
                </ul>
                <h3 className="text-3xl font-bold">Tech Stack</h3>
                <div className="flex justify-between gap-2 font-bold">
                  <button className="bg-foreground w-full text-xl text-background2 px-4 py-2 rounded-md">
                    Github
                  </button>
                  <button className="bg-foreground w-full text-xl text-background2 px-4 py-2 rounded-md">
                    Live
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
