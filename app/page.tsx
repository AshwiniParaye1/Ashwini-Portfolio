import {
  BookOpen,
  Briefcase,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Terminal
} from "lucide-react";
import Link from "next/link";
import { FaMedium } from "react-icons/fa6";

const projects = [
  {
    title: "Cloud Drive",
    description:
      "A cloud storage solution with advanced file management capabilities",
    tech: ["Vue.js", "Golang", "REST API", "PostgreSQL"],
    link: "https://github.com/username/cloud-drive"
  },
  {
    title: "Clip AI",
    description: "AI-powered video editing and clipping tool",
    tech: ["React", "Node.js", "Machine Learning", "FFmpeg"],
    link: "https://github.com/username/clip-ai"
  },
  {
    title: "Whack a Mole",
    description: "Interactive browser-based game with real-time scoring",
    tech: ["JavaScript", "HTML5", "CSS3", "WebSocket"],
    link: "https://github.com/username/whack-a-mole"
  }
];

const blogs = [
  {
    title: "Boost Your Development Speed with Golang",
    description:
      "Learn how to optimize your development workflow using Golang's powerful features",
    link: "#"
  },
  {
    title: "How Golang Behaves Behind the Scenes",
    description:
      "Deep dive into Golang's internal workings and performance characteristics",
    link: "#"
  },
  {
    title: "What Does Enumerable Mean in JavaScript?",
    description:
      "Understanding JavaScript's enumerable properties and their implications",
    link: "#"
  },
  {
    title: "Understanding the Basics of Next.js",
    description:
      "A comprehensive guide to getting started with Next.js framework",
    link: "#"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-green-500 p-8">
      {/* Header/Navigation */}
      <nav className="flex justify-between items-center mb-16">
        <div className="flex items-center gap-2">
          <Terminal className="w-6 h-6" />
          <span className="text-xl font-bold">ashwini@portfolio:~$</span>
        </div>
        <div className="flex items-center gap-6">
          {/* <Link
            href="/resume.pdf"
            className="flex items-center gap-2 border border-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-black transition-colors"
            download
          >
            <FileDown className="w-5 h-5" />
          </Link> */}
          <div className="flex gap-4">
            <Link
              href="https://medium.com/@your-username"
              className="hover:text-green-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMedium className="w-6 h-6" />
            </Link>
            <Link href="https://github.com" className="hover:text-green-400">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="https://linkedin.com" className="hover:text-green-400">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="mailto:your@email.com" className="hover:text-green-400">
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mb-16">
        <div className="terminal-window border border-green-500 p-6 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-purple-500">const</span>{" "}
            <span className="text-blue-500">developer</span> = {"{"}
          </h1>
          <div className="ml-8">
            <p className="mb-2">
              <span className="text-purple-500">name:</span> &quot;Ashwini
              Parage&quot;,
            </p>
            <p className="mb-2">
              <span className="text-purple-500">role:</span> &quot;Full Stack
              Developer&quot;,
            </p>
            <p className="mb-2">
              <span className="text-purple-500">location:</span> &quot;Toronto,
              CA&quot;,
            </p>
            <p className="mb-4">
              <span className="text-purple-500">bio:</span> &quot;A passionate
              Full Stack Developer with a love for writing, based in the vibrant
              world of technology. With expertise in both front-end and back-end
              development, I craft seamless, user-focused web applications. When
              I&apos;m not coding, I share my knowledge and insights through
              writing.&quot;
            </p>
          </div>
          <p className="mt-4">{"}"}</p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">
          <span className="text-purple-500">class</span>{" "}
          <span className="text-blue-500">Experience</span> {"{"}
        </h2>
        <div className="ml-8 space-y-6">
          <div className="border border-green-500 p-6 rounded-lg">
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
              using Vue.js and Golang, created REST APIs, implemented state
              management with Vuex and worked with the databases. I also
              collaborated on project management with Monday.com and followed
              best GitHub practices to ensure high-quality code through testing,
              debugging and optimization.
            </p>
          </div>
          <div className="border border-green-500 p-6 rounded-lg">
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
              applications using React, focusing on creating responsive and
              user-friendly interfaces. Contributed to the development of
              dynamic dashboards, enhancing data visualization and user
              engagement. Utilized Redux for state management to ensure seamless
              data flow across the application. Translated Figma designs into
              fully responsive and interactive user interfaces.
            </p>
          </div>
        </div>
        <p className="mt-4">{"}"}</p>
      </section>

      {/* Projects Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">
          <span className="text-purple-500">function</span>{" "}
          <span className="text-blue-500">getProjects</span>() {"{"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-8">
          {projects.map((project, index) => (
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="border border-green-500 p-6 rounded-lg hover:bg-green-500/5 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5" />
                <h3 className="text-xl font-bold">{blog.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{blog.description}</p>
              <Link
                href={blog.link}
                className="inline-flex items-center text-green-400 hover:text-green-300"
              >
                Read More <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8 ml-8">
          <Link
            href="https://medium.com/@your-username"
            target="_blank"
            rel="noopener noreferrer"
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
          <span className="text-purple-500">const</span>{" "}
          <span className="text-blue-500">education</span> = {"{"}
        </h2>
        <div className="ml-8">
          <div className="border border-green-500 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5" />
              <h3 className="text-xl font-bold">Master of Science</h3>
            </div>
            <p className="text-gray-400">2022</p>
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
        <div className="ml-8 border border-green-500 p-6 rounded-lg">
          <p className="mb-4">Let&apos;s collaborate on your next project!</p>
          <div className="flex gap-4">
            <Link
              href="mailto:your@email.com"
              className="inline-block bg-green-500 text-black px-6 py-2 rounded hover:bg-green-400 transition-colors"
            >
              Send Email
            </Link>
            <Link
              href="https://linkedin.com"
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
