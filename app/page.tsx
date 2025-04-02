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
    <main
      className="min-h-screen p-10"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)"
      }}
    >
      {/* Header/Navigation */}
      <nav className="flex justify-between items-center mb-16">
        <div className="flex items-center gap-2">
          <Terminal
            className="w-6 h-6"
            style={{ color: "var(--palette-50)" }}
          />
          <span
            className="text-xl font-bold"
            style={{ color: "var(--foreground)" }}
          >
            ashwini@portfolio:~$
          </span>
        </div>
        <div className="flex items-center gap-6">
          {/* navlinks */}
          <div className="flex gap-4 navlinks">
            <Link
              href="https://github.com/AshwiniParaye1"
              className="transition-colors"
              style={{ color: "var(--palette-50)" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGithubLine className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ashwini-paraye/"
              className="transition-colors"
              style={{ color: "var(--palette-50)" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuLinkedin className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:ashwiniparaye1@email.com"
              className="transition-colors"
              style={{ color: "var(--palette-50)" }}
            >
              <MdOutlineMailOutline className="w-6 h-6" />
            </Link>{" "}
            <Link
              href="https://medium.com/@ashwini-paraye"
              className="transition-colors"
              style={{ color: "var(--palette-50)" }}
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
        <div
          className="terminal-window p-6 rounded-lg"
          style={{
            backgroundColor: "var(--card)",
            color: "var(--card-foreground)",
            border: "1px solid var(--border)"
          }}
        >
          <h1
            className="text-2xl font-bold mb-4"
            style={{ color: "var(--foreground)" }}
          >
            <span style={{ color: "var(--primary)" }}>const</span>{" "}
            <span style={{ color: "var(--primary)" }}>developer</span> = {"{"}
          </h1>
          <div className="ml-8">
            <p className="mb-2" style={{ color: "var(--foreground)" }}>
              <span style={{ color: "var(--primary)" }}>name:</span>{" "}
              &quot;Ashwini Paraye&quot;,
            </p>
            <p className="mb-2" style={{ color: "var(--foreground)" }}>
              <span style={{ color: "var(--primary)" }}>role:</span> &quot;Full
              Stack Developer&quot;,
            </p>
            <p className="mb-4" style={{ color: "var(--foreground)" }}>
              <span style={{ color: "var(--primary)" }}>about:</span> &quot;A
              passionate Full Stack Developer with love for writing, based in
              the vibrant world of technology. With expertise in both front-end
              and back-end development, I craft seamless, user-focused web
              applications. When I&apos;m not coding, I share my knowledge and
              insights through writing.&quot; Let’s collaborate to bring your
              ideas to life with innovative solutions and engaging content.
            </p>
          </div>
          <p className="mt-4" style={{ color: "var(--foreground)" }}>
            {"}"}
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2
          className="text-2xl font-bold mb-8"
          style={{ color: "var(--foreground)" }}
        >
          <span style={{ color: "var(--primary)" }}>const</span>{" "}
          <span style={{ color: "var(--primary)" }}>experience</span>= {"{"}
        </h2>
        <div className=" space-y-6">
          <div
            className="experience-card p-6 rounded-lg"
            style={{
              backgroundColor: "var(--card)",
              color: "var(--card-foreground)",
              border: "1px solid var(--border)"
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Briefcase
                className="w-5 h-5"
                style={{ color: "var(--primary)" }}
              />
              <h3
                className="text-xl font-bold"
                style={{ color: "var(--foreground)" }}
              >
                Fullstack Developer | @ProjectBoard
              </h3>
            </div>
            <p className="mb-2" style={{ color: "var(--muted-foreground)" }}>
              June 2023 - May 2024 | Toronto, CA
            </p>
            <p style={{ color: "var(--foreground)" }}>
              As a Fullstack developer in ProjectBoard I developed applications
              using React, Vue.js, JavaScript and Golang, created REST APIs,
              implemented state management and worked with the databases. I also
              collaborated on project management with Monday.com and followed
              best GitHub practices to ensure high-quality code through testing,
              debugging and optimization.
            </p>
          </div>
          <div
            className="experience-card p-6 rounded-lg"
            style={{
              backgroundColor: "var(--card)",
              color: "var(--card-foreground)",
              border: "1px solid var(--border)"
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Briefcase
                className="w-5 h-5"
                style={{ color: "var(--primary)" }}
              />
              <h3
                className="text-xl font-bold"
                style={{ color: "var(--foreground)" }}
              >
                Software Engineer | @Infosys
              </h3>
            </div>
            <p className="mb-2" style={{ color: "var(--muted-foreground)" }}>
              June 2021 - Nov 2022 | Pune, IN
            </p>
            <p style={{ color: "var(--foreground)" }}>
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
        <p className="mt-4" style={{ color: "var(--foreground)" }}>
          {"}"}
        </p>
      </section>

      {/* Projects Section */}
      <section className="mb-16">
        <h2
          className="text-2xl font-bold mb-8"
          style={{ color: "var(--foreground)" }}
        >
          <span style={{ color: "var(--primary)" }}>async function</span>{" "}
          <span style={{ color: "var(--primary)" }}>getProjects</span>() {"{"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card p-6 rounded-lg"
              style={{
                backgroundColor: "var(--card)",
                color: "var(--card-foreground)",
                border: "1px solid var(--border)"
              }}
            >
              <Link
                href={project.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ color: "var(--foreground)" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="mb-4"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 rounded"
                        style={{
                          backgroundColor: "var(--primary)",
                          color: "var(--primary-foreground)"
                        }}
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
            className="inline-block px-6 py-2 rounded"
            style={{
              color: "var(--foreground)",
              border: "1px solid var(--border)"
            }}
          >
            See More Projects
          </Link>
        </div>
        <p className="mt-4" style={{ color: "var(--foreground)" }}>
          {"}"}
        </p>
      </section>

      {/* Blogs Section */}
      <section className="mb-16">
        <h2
          className="text-2xl font-bold mb-8"
          style={{ color: "var(--foreground)" }}
        >
          <span style={{ color: "var(--primary)" }}>async function</span>{" "}
          <span style={{ color: "var(--primary)" }}>getBlogs</span>() {"{"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="blog-card p-6 rounded-lg"
              style={{
                backgroundColor: "var(--card)",
                color: "var(--card-foreground)",
                border: "1px solid var(--border)"
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <BookOpen
                  className="w-5 h-5"
                  style={{ color: "var(--primary)" }}
                />
                <h3
                  className="text-xl font-bold"
                  style={{ color: "var(--foreground)" }}
                >
                  {blog.title}
                </h3>
              </div>
              <p className="mb-4" style={{ color: "var(--muted-foreground)" }}>
                {blog.description}
              </p>
              <Link
                href={blog.link}
                className="inline-flex items-center"
                style={{ color: "var(--primary)" }}
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
            className="inline-flex items-center gap-2 px-6 py-2 rounded"
            style={{
              color: "var(--foreground)",
              border: "1px solid var(--border)"
            }}
          >
            See More Blogs <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
        <p className="mt-4" style={{ color: "var(--foreground)" }}>
          {"}"}
        </p>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <h2
          className="text-2xl font-bold mb-8"
          style={{ color: "var(--foreground)" }}
        >
          <span style={{ color: "var(--primary)" }}>async function</span>{" "}
          <span style={{ color: "var(--primary)" }}>getEducation</span>() {"{"}
        </h2>
        <div className="mb-8">
          <div
            className="education-card p-6 rounded-lg"
            style={{
              backgroundColor: "var(--card)",
              color: "var(--card-foreground)",
              border: "1px solid var(--border)"
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap
                className="w-5 h-5"
                style={{ color: "var(--primary)" }}
              />
              <h3
                className="text-xl font-bold"
                style={{ color: "var(--foreground)" }}
              >
                Master of Science
              </h3>
            </div>{" "}
            <p style={{ color: "var(--muted-foreground)" }}> 2022</p>
            <p style={{ color: "var(--foreground)" }}>
              Marathwada Institute of Technology, Sambhajinagar
            </p>
          </div>
        </div>
        <div className="">
          <div
            className="education-card p-6 rounded-lg"
            style={{
              backgroundColor: "var(--card)",
              color: "var(--card-foreground)",
              border: "1px solid var(--border)"
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap
                className="w-5 h-5"
                style={{ color: "var(--primary)" }}
              />
              <h3
                className="text-xl font-bold"
                style={{ color: "var(--foreground)" }}
              >
                Bachelor of Science
              </h3>
            </div>
            <p style={{ color: "var(--muted-foreground)" }}>2020</p>
            <p style={{ color: "var(--foreground)" }}>
              Marathwada Institute of Technology, Sambhajinagar
            </p>
          </div>
        </div>
        <p className="mt-4" style={{ color: "var(--foreground)" }}>
          {"}"}
        </p>
      </section>

      {/* Contact Section */}
      <section className="mb-16">
        <h2
          className="text-2xl font-bold mb-8"
          style={{ color: "var(--foreground)" }}
        >
          <span style={{ color: "var(--primary)" }}>async function</span>{" "}
          <span style={{ color: "var(--primary)" }}>contactMe</span>() {"{"}
        </h2>
        <div
          className="p-6 rounded-lg contact-card"
          style={{
            backgroundColor: "var(--card)",
            color: "var(--card-foreground)",
            border: "1px solid var(--border)"
          }}
        >
          <p className="mb-8" style={{ color: "var(--muted-foreground)" }}>
            I&apos;d love to hear from you. Whether you have a question or just
            want to talk about tech or my work, projects, or anything else
            you&apos;d like. Just Drop a message over Linkedin or Email.
          </p>
          <div className="flex gap-4">
            <Link
              href="mailto:ashwiniparaye1@email.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 rounded"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)"
              }}
            >
              Send Email
            </Link>
            <Link
              href="https://www.linkedin.com/in/ashwini-paraye/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 rounded"
              style={{
                color: "var(--foreground)",
                border: "1px solid var(--border)"
              }}
            >
              Connect on LinkedIn
            </Link>
          </div>
        </div>
        <p className="mt-4" style={{ color: "var(--foreground)" }}>
          {"}"}
        </p>
      </section>
    </main>
  );
}
