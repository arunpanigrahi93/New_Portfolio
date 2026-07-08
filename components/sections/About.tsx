"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";

const competencies = [
  "Front-end Development",
  "Back-end Development",
  "API Integration",
  "Responsive Design",
  "Performance Optimization",
  "Agile way of working",
  "Team Collaboration",
  "Cross-Browser Compatibility",
  "Modular Architecture",
  "State Management",
  "RESTful APIs",
  "Code Splitting",
  "AWS Cloud",
];

const highlights = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "~35% Faster Frontend",
    desc: "Improved performance using code splitting, lazy loading, useMemo, useCallback, debouncing, throttling, image optimization, and Core Web Vitals best practices.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "~45% Faster APIs",
    desc: "Built scalable REST APIs with Node.js & Express using JWT authentication, caching, pagination, database indexing, async processing, and reusable service architecture.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Enterprise-Grade Security",
    desc: "Implemented JWT, protected routes, API authorization, input validation, CORS, Helmet, XSS prevention, and secure auth for enterprise applications.",
  },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="about"
      className="pt-16 pb-24 sm:pt-20 sm:pb-28 relative"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
          <SectionTitle
            eyebrow="About Me"
            title="Crafting experiences, not just code"
            subtitle="A builder at heart with a love for clean architecture and pixel-perfect UIs."
            align="center"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left — Bio text */}
          <div
            className={`lg:col-span-3 reveal ${isVisible ? "visible" : ""} reveal-delay-1`}
          >
            <div
              className="rounded-3xl p-8 lg:p-10 h-full"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <div className="prose max-w-none space-y-6">
                <p
                  className="text-base sm:text-lg leading-8"
                  style={{ color: "var(--text-2)" }}
                >
                  I&apos;m{" "}
                  <strong style={{ color: "var(--primary)", fontWeight: 700 }}>
                    Venkata Arunakumar Panigrahi
                  </strong>
                  , a <span>Senior Full-Stack Developer</span> based in
                  Hyderabad with{" "}
                  <span style={{ color: "var(--primary)", fontWeight: 700 }}>
                    7+ years of experience
                  </span>{" "}
                  delivering scalable web applications for enterprise
                  businesses. My expertise spans{" "}
                  <strong style={{ color: "var(--primary)", fontWeight: 700 }}>
                    React.js, Next.js, TypeScript, JavaScript, Node.js,
                    Express.js, MongoDB, HTML5, CSS3, Tailwind CSS and modern
                    web development and CSS Frameworks
                  </strong>
                  .
                </p>

                <p
                  className="text-base leading-8"
                  style={{ color: "var(--text-2)" }}
                >
                  I specialize in building{" "}
                  <span style={{ color: "var(--primary)", fontWeight: 700 }}>
                    high-performance frontends
                  </span>
                  ,{" "}
                  <span style={{ color: "var(--primary)", fontWeight: 700 }}>
                    secure REST APIs
                  </span>
                  , and{" "}
                  <span style={{ color: "var(--primary)", fontWeight: 700 }}>
                    scalable web applications
                  </span>{" "}
                  that solve real business problems. Every project is engineered
                  with a focus on{" "}
                  <span style={{ color: "var(--primary)", fontWeight: 700 }}>
                    performance
                  </span>
                  ,{" "}
                  <span style={{ color: "var(--primary)", fontWeight: 700 }}>
                    security
                  </span>
                  ,{" "}
                  <span style={{ color: "var(--primary)", fontWeight: 700 }}>
                    clean architecture
                  </span>
                  , and{" "}
                  <span style={{ color: "var(--primary)", fontWeight: 700 }}>
                    maintainability
                  </span>{" "}
                  to ensure long-term{" "}
                  <span style={{ color: "var(--primary)", fontWeight: 700 }}>
                    reliability
                  </span>{" "}
                  and{" "}
                  <span style={{ color: "var(--primary)", fontWeight: 700 }}>
                    scalability
                  </span>
                  .
                </p>

                <p
                  className="text-base leading-8"
                  style={{ color: "var(--text-2)" }}
                >
                  From{" "}
                  <span style={{ color: "var(--primary)", fontWeight: 700 }}>
                    modern user interfaces
                  </span>{" "}
                  to{" "}
                  <span style={{ color: "var(--primary)", fontWeight: 700 }}>
                    backend services
                  </span>
                  , I enjoy transforming{" "}
                  <span style={{ color: "var(--primary)", fontWeight: 700 }}>
                    complex requirements
                  </span>{" "}
                  into{" "}
                  <span style={{ color: "var(--primary)", fontWeight: 700 }}>
                    intuitive, production-ready solutions
                  </span>{" "}
                  that deliver{" "}
                  <span style={{ color: "var(--primary)", fontWeight: 700 }}>
                    measurable value
                  </span>{" "}
                  for both users and businesses.
                </p>

                <div
                  className="flex items-center gap-2 pt-5 text-sm font-medium"
                  style={{
                    color: "var(--accent)",
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>

                  <span>Hyderabad, Telangana, India</span>
                </div>
              </div>

              {/* Core competencies */}
              <div
                className="mt-8 pt-6"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <p
                  className="text-xs font-mono font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "var(--muted)" }}
                >
                  Core Competencies
                </p>
                <div className="flex flex-wrap gap-2">
                  {competencies.map((c) => (
                    <span key={c} className="skill-badge">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — Highlights */}
          <div
            className={`lg:col-span-2 flex flex-col gap-4 reveal ${isVisible ? "visible" : ""} reveal-delay-2`}
          >
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className={`card-hover rounded-2xl p-6 reveal ${isVisible ? "visible" : ""} reveal-delay-${i + 2}`}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: "var(--primary-light)",
                    color: "var(--primary)",
                  }}
                  aria-hidden="true"
                >
                  {h.icon}
                </div>
                <h3
                  className="font-display font-bold text-base mb-1"
                  style={{ color: "var(--text)" }}
                >
                  {h.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
