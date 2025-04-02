//app/page.tsx

"use client";

import {
  BookOpen,
  Briefcase,
  ExternalLink,
  GraduationCap,
  Terminal
} from "lucide-react";
import Link from "next/link";
import { FaMedium } from "react-icons/fa6";
import { LuLinkedin } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiGithubLine } from "react-icons/ri";

const projects = [
  {
    title: "Cloud Drive",
    description: "A cloud storage solution with file management capabilities",
    tech: ["React.js", "Next.js", "TypeScript", "TailwindCSS", "Appwrite"],
    link: "https://icloud-drive.vercel.app/sign-in"
  },
  {
    title: "Github Readme Generator",
    description: "Create professional readme in seconds",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://readme-generator1.vercel.app/"
  },
  {
    title: "Bloom",
    description: "Your Personalized Productivity Buddy",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://www.bloomwithin.site/"
  }
];

const blogs = [
  {
    title: "How Golang Behaves Behind the Scenes",
    description:
      "Deep dive into Golang's internal workings and performance characteristics",
    link: "https://blog.stackademic.com/step-by-step-breakdown-of-how-golang-behaves-behind-the-scenes-eba1d5582b55"
  },
  {
    title: "Understanding Browser Storage",
    description: "Understanding different types of browser storage",
    link: "https://blog.stackademic.com/understanding-browser-storage-a9883d82f6ba"
  },
  {
    title: "Understanding the Basics of Next.js",
    description:
      "A comprehensive guide to getting started with Next.js framework",
    link: "https://blog.stackademic.com/understanding-the-basics-of-next-js-for-beginners-b2e542c3e6e1"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-green-500 p-10">
      {/* Header/Navigation */}
      <nav className="flex justify-between items-center mb-16">
        <div className="flex items-center gap-2">
          <Terminal className="w-6 h-6" />
          <span className="text-xl font-bold">ashwini@portfolio:~$</span>
        </div>
        <div className="flex items-center gap-6">
          {/* navlinks */}
          <div className="flex gap-4 navlinks">
            <Link
              href="https://github.com/AshwiniParaye1"
              className="hover:text-green-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGithubLine className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ashwini-paraye/"
              className="hover:text-green-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuLinkedin className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:ashwiniparaye1@email.com"
              className="hover:text-green-400"
            >
              <MdOutlineMailOutline className="w-6 h-6" />
            </Link>{" "}
            <Link
              href="https://medium.com/@ashwini-paraye"
              className="hover:text-green-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMedium className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mb-16">
        <div className="terminal-window border border-green-500 p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-4">
            <span className="text-purple-500">const</span>{" "}
            <span className="text-blue-500">developer</span> = {"{"}
          </h1>
          <div className="ml-8">
            <p className="mb-2">
              <span className="text-purple-500">name:</span> &quot;Ashwini
              Paraye&quot;,
            </p>
            <p className="mb-2">
              <span className="text-purple-500">role:</span> &quot;Full Stack
              Developer&quot;,
            </p>
            <p className="mb-4">
              <span className="text-purple-500">about:</span> &quot;A passionate
              Full Stack Developer with love for writing, based in the vibrant
              world of technology. With expertise in both front-end and back-end
              development, I craft seamless, user-focused web applications. When
              I&apos;m not coding, I share my knowledge and insights through
              writing.&quot; Let’s collaborate to bring your ideas to life with
              innovative solutions and engaging content.
            </p>
          </div>
          <p className="mt-4">{"}"}</p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">
          <span className="text-purple-500">const</span>{" "}
          <span className="text-blue-500">experience</span>= {"{"}
        </h2>
        <div className=" space-y-6">
          <div className="experience-card border border-green-500 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-5 h-5" />
              <h3 className="text-xl font-bold">
                Fullstack Developer | @ProjectBoard
              </h3>
            </div>
            <p className="text-gray-400 mb-2">
              June 2023 - May 2024 | Toronto, CA
            </p>
            <p className="text-gray-300">
              As a Fullstack developer in ProjectBoard I developed applications
              using React, Vue.js, JavaScript and Golang, created REST APIs,
              implemented state management and worked with the databases. I also
              collaborated on project management with Monday.com and followed
              best GitHub practices to ensure high-quality code through testing,
              debugging and optimization.
            </p>
          </div>
          <div className="experience-card border border-green-500 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-5 h-5" />
              <h3 className="text-xl font-bold">
                Software Engineer | @Infosys
              </h3>
            </div>
            <p className="text-gray-400 mb-2">
              June 2021 - Nov 2022 | Pune, IN
            </p>
            <p className="text-gray-300">
              As a software engineer in Infosys I developed frontend
              applications using React, JavaScript focusing on creating
              responsive and user-friendly interfaces. Contributed to the
              development of dynamic dashboards, enhancing data visualization
              and user engagement. Utilized Redux for state management to ensure
              seamless data flow across the application. Translated Figma
              designs into fully responsive and interactive user interfaces.
            </p>
          </div>
        </div>
        <p className="mt-4">{"}"}</p>
      </section>

      {/* Projects Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">
          <span className="text-purple-500">async function</span>{" "}
          <span className="text-blue-500">getProjects</span>() {"{"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card border border-green-500 p-6 rounded-lg hover:bg-green-500/5 transition-colors"
            >
              <Link
                href={project.link}
                rel="noopener noreferrer"
                target="_blank"
              >
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
        <div className="mt-8 ml-8">
          <Link
            href="/projects"
            className="inline-block border border-green-500 px-6 py-2 rounded hover:bg-green-500 hover:text-black transition-colors"
          >
            See More Projects
          </Link>
        </div>
        <p className="mt-4">{"}"}</p>
      </section>

      {/* Blogs Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">
          <span className="text-purple-500">async function</span>{" "}
          <span className="text-blue-500">getBlogs</span>() {"{"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="blog-card border border-green-500 p-6 rounded-lg hover:bg-green-500/5 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5" />
                <h3 className="text-xl font-bold">{blog.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{blog.description}</p>
              <Link
                href={blog.link}
                className="inline-flex items-center text-green-400 hover:text-green-300"
                rel="noopener noreferrer"
                target="_blank"
              >
                Read More <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8 ml-8">
          <Link
            href="https://medium.com/@ashwini-paraye"
            target="_blank"
            rel="noopener noreferrer "
            className="inline-flex items-center gap-2 border border-green-500 px-6 py-2 rounded hover:bg-green-500 hover:text-black transition-colors"
          >
            See More Blogs <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
        <p className="mt-4">{"}"}</p>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">
          <span className="text-purple-500">async function</span>{" "}
          <span className="text-blue-500">getEducation</span>() {"{"}
        </h2>
        <div className="mb-8">
          <div className="education-card border border-green-500 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5" />
              <h3 className="text-xl font-bold">Master of Science</h3>
            </div>{" "}
            <p className="text-gray-400"> 2022</p>
            <p className="text-gray-300">
              Marathwada Institute of Technology, Sambhajinagar
            </p>
          </div>
        </div>
        <div className="">
          <div className="education-card border border-green-500 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5" />
              <h3 className="text-xl font-bold">Bachelor of Science</h3>
            </div>
            <p className="text-gray-400">2020</p>
            <p className="text-gray-300">
              Marathwada Institute of Technology, Sambhajinagar
            </p>
          </div>
        </div>
        <p className="mt-4">{"}"}</p>
      </section>

      {/* Contact Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">
          <span className="text-purple-500">async function</span>{" "}
          <span className="text-blue-500">contactMe</span>() {"{"}
        </h2>
        <div className="border border-green-500 p-6 rounded-lg contact-card">
          <p className="mb-8">
            I&apos;d love to hear from you. Whether you have a question or just
            want to talk about tech or my work, projects, or anything else
            you&apos;d like. Just Drop a message over Linkedin or Email.
          </p>
          <div className="flex gap-4">
            <Link
              href="mailto:ashwiniparaye1@email.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-black px-6 py-2 rounded hover:bg-green-400 transition-colors"
            >
              Send Email
            </Link>
            <Link
              href="https://www.linkedin.com/in/ashwini-paraye/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-green-500 px-6 py-2 rounded hover:bg-green-500 hover:text-black transition-colors"
            >
              Connect on LinkedIn
            </Link>
          </div>
        </div>
        <p className="mt-4">{"}"}</p>
      </section>
    </main>
  );
}
