'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import LogoFetcher from './LogoFetcher';

interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  techStack: { name: string; color: string }[];
  links: { name: string; href: string }[];
  about: string;
  learn: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  image,
  techStack,
  links,
  about,
  learn,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      {/* Project Card */}
      <div className="flex flex-col bg-okbg justify-between border-4 border-okfg p-4 rounded-md">
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
          className="w-full bg-okfg text-oktext rounded-md py-2 hover:bg-oka transition-transform transform hover:scale-105"
          aria-label="Read More"
        >
          Read More
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-okbg border-4 border-okfg p-4 m-4 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-5xl font-bold text-oktext2">{name}</h2>
              <button
                onClick={toggleModal}
                className="text-oktext2 hover:text-oka transition-colors duration-300"
                aria-label="Close Modal"
              >
                <FontAwesomeIcon icon={faXmark} className="text-3xl" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="flex flex-col items-start gap-4">
                {/* Image */}
                <Image
                  src={image}
                  alt={`${name} project screenshot`}
                  className="w-full h-60 object-cover rounded-lg"
                  width={500}
                  height={250}
                />
                {/* Description */}
                <div>
                  <h3 className="text-3xl font-semibold">About the Project</h3>
                  <p className="text-base mt-2">{about}</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-4">
                {/* What I Learned */}
                <div>
                  <h3 className="text-3xl font-semibold">What Did I Learn</h3>
                  <p className="text-base mt-2">{learn}</p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-3xl font-semibold">Tech Stack</h3>
                  <LogoFetcher techStack={techStack} />
                  <div className="flex gap-2 mt-6">
                    {links.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className={`flex w-full items-center justify-center gap-2 px-4 py-2 rounded-md text-xl text-oktext font-semibold transition-transform transform hover:scale-105 ${
                          index === 0
                            ? 'bg-okfg hover:bg-[#583f75]'
                            : 'bg-okfg hover:bg-oka'
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={index === 0 ? faGithub : faExternalLink}
                          className="text-xl"
                        />
                        {index === 0 ? 'GitHub' : 'Live'}
                      </Link>
                    ))}
                  </div>
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
