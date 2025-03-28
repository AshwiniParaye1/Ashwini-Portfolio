"use client";

import { ArrowLeft, Terminal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const allProjects = [
  {
    title: "Project Alpha",
    description:
      "A real-time collaboration platform built with Next.js and WebSocket",
    tech: ["Next.js", "TypeScript", "WebSocket", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "Project Beta",
    description: "AI-powered content management system",
    tech: ["React", "Node.js", "OpenAI", "MongoDB"],
    link: "#"
  },
  {
    title: "Project Gamma",
    description: "E-commerce platform with advanced analytics",
    tech: ["Next.js", "PostgreSQL", "Redis", "AWS"],
    link: "#"
  },
  {
    title: "Project Delta",
    description: "Mobile-first social networking app",
    tech: ["React Native", "Firebase", "Redux", "Node.js"],
    link: "#"
  },
  {
    title: "Project Epsilon",
    description: "Blockchain-based voting system",
    tech: ["Solidity", "Web3.js", "React", "Node.js"],
    link: "#"
  },
  {
    title: "Project Zeta",
    description: "Machine learning-powered recommendation engine",
    tech: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
    link: "#"
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
          <span className="text-xl font-bold">dev@portfolio:/projects$</span>
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
            className="border border-green-500 p-6 rounded-lg hover:bg-green-500/5 transition-colors"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
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
        ))}
      </div>
    </main>
  );
}
