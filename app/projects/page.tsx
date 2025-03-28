"use client";

import { ArrowLeft, Terminal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { RiGithubLine } from "react-icons/ri";

const allProjects = [
  {
    title: "Clip AI",
    description: "AI-powered assistant for creating amazing short videos",
    tech: [
      "Next.js",
      "React.js",
      "JavaScript",
      "Clerk",
      "Drizzle",
      "Gemini AI"
    ],
    link: "https://clip-ai.vercel.app/"
  },
  {
    title: "Webpage Summarizer",
    description:
      "A Chrome extension that allows you to generate concise summaries of the content from any webpage using AI.",
    tech: ["HTML", "CSS", "JavaScript", "OpenAI"],
    link: "https://github.com/AshwiniParaye1/AI-Summarizer"
  },
  {
    title: "Whack-a-Mole!",
    description:
      "A classic and fun game built using JavaScript, where you need to whack the moles as they pop up, scoring points for every successful hit!",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://1whackamole.netlify.app/"
  },
  {
    title: "SnapShotz",
    description:
      "Simple and efficient Chrome extension for instant webpage screenshots.",
    tech: ["React.js", "JavaScript", "Manifest v3", "Tailwind CSS"],
    link: "https://github.com/AshwiniParaye1/SnapShotz"
  },
  {
    title: "BookVerse",
    description:
      "A RESTful Node.js API for managing books, users, and borrowing records with authentication and role-based access.",
    tech: ["React.js", "JavaScript", "Manifest v3", "Tailwind CSS"],
    link: "https://github.com/AshwiniParaye1/BookVerse"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("");

  const filteredProjects = allProjects.filter(
    (project) =>
      project.title.toLowerCase().includes(filter.toLowerCase()) ||
      project.description.toLowerCase().includes(filter.toLowerCase()) ||
      project.tech.some((tech) =>
        tech.toLowerCase().includes(filter.toLowerCase())
      )
  );

  return (
    <main className="min-h-screen bg-black text-green-500 p-8">
      <nav className="flex items-center gap-4 mb-16">
        <Link href="/" className="hover:text-green-400">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <div className="flex items-center gap-2">
          <Terminal className="w-6 h-6" />
          <span className="text-xl font-bold">
            ashwini@portfolio:/projects$
          </span>
        </div>
      </nav>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Search projects..."
          className="w-full max-w-md px-4 py-2 bg-transparent border border-green-500 rounded text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="project-card border border-green-500 p-6 rounded-lg hover:bg-green-500/5 transition-colors"
          >
            <Link href={project.link} rel="noopener noreferrer" target="_blank">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-8 mb-8">
        <Link
          href="https://github.com/AshwiniParaye1"
          target="_blank"
          rel="noopener noreferrer "
          className="inline-flex items-center gap-2 border border-green-500 px-6 py-2 rounded hover:bg-green-500 hover:text-black transition-colors"
        >
          Check Out More Projects on Github <RiGithubLine className="w-4 h-4" />
        </Link>
      </div>
    </main>
  );
}
