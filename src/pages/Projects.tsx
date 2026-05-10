import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import horuscastImg from "@/assets/horuscast.png";
import agenticAiInsuranceImg from "@/assets/agentic-ai-insurance.png";
import customChatbotImg from "@/assets/custom-chatbot.jpg";
import pathPlanningImg from "@/assets/path-planning.png";
import localRagImg from "@/assets/local-rag-assistant.jpg";
import iotMachiningImg from "@/assets/iot-machining.png";
import roboticArmImg from "@/assets/robotic-arm.png";
import autonomousOvertakingImg from "@/assets/autonomous-overtaking.png";
import movieSearchImg from "@/assets/movie-search.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Github, Play, ExternalLink, FileText } from "lucide-react";

type ProjectCategory = "Selected" | "AI/ML Experiments" | "Web/Mobile Apps" | "Hardware/IoT";
interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  tags: string[];
  viewMoreUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  githubUrl?: string;
  categories: ProjectCategory[];
}

const categories: ProjectCategory[] = [
  "Selected",
  "AI/ML Experiments",
  "Web/Mobile Apps",
  "Hardware/IoT",
];

const projects: Project[] = [
  {
    id: 1,
    name: "Agentic Financial Claim Assistant",
    description:
      "A modular multi-agent system in Python using LangGraph and LLaMA 3.2, designed to resolve health insurance claim queries. Integrates a RAG pipeline for policy document understanding, an NL-to-SQL engine with graph-based schema traversal, and an automated email drafting agent. RAG achieved 88% answer correctness; NL-to-SQL hit 100% accuracy across all evaluated schemas.",
    image: agenticAiInsuranceImg,
    tags: ["Python", "LangGraph", "LLaMA 3.2", "RAG", "NL-to-SQL"],
    viewMoreUrl: "https://drive.google.com/file/d/1JP7RQRm-4GNahKEbpCaVNlaz58WeppNz/view?usp=sharing",
    githubUrl: "https://github.com/SushyamNagallapati/Agentic-Financial-Claim-Assistant-MCP-RAG",
    categories: ["Selected", "AI/ML Experiments"],
  },
  {
    id: 5,
    name: "AI Powered SaaS Chatbot",
    description:
      "A full-stack AI chatbot exploring how large language models integrate into production web applications. The TypeScript/Node.js backend handles multi-turn conversations with context tracking, input validation, and a clean layered architecture across routes, controllers, services, and repositories. The React frontend features typing indicators, markdown rendering, and auto-scroll.",
    image: customChatbotImg,
    tags: ["React", "TypeScript", "Node.js", "LLM", "REST API"],
    liveUrl: "https://custom-chatbot-tau-swart.vercel.app/",
    githubUrl: "https://github.com/SushyamNagallapati/Custom-ChatBot",
    categories: ["Web/Mobile Apps", "Selected"],
  },
  {
    id: 9,
    name: "HorusCast Weather and Trail Planning App",
    description:
      "A geospatial web app for planning outdoor activities, combining trail discovery with hyper-local weather forecasts. The Node.js/Express.js backend aggregates three external APIs: Mapbox for maps and geocoding, the OpenStreetMap Overpass API for trail data, and the NASA POWER API for climate history, all composed into a single structured response for the frontend.",
    image: horuscastImg,
    tags: ["Node.js", "Express.js", "Mapbox", "NASA API", "Geospatial"],
    liveUrl: "https://horus-cast-nasa-hackathon.vercel.app/",
    githubUrl: "https://github.com/SushyamNagallapati/HorusCast-NASA-Hackathon",
    categories: ["Web/Mobile Apps"],
  },
  {
    id: 10,
    name: "Movie Search Web Application",
    description:
      "A React app that pulls live movie data from a REST API, with real-time search, favorites management, and a reusable component architecture. State is handled with useState and useEffect, keeping UI updates responsive and predictable.",
    image: movieSearchImg,
    tags: ["React", "REST API", "JavaScript", "CSS"],
    liveUrl: "https://movie-application-inky.vercel.app/",
    githubUrl: "https://github.com/SushyamNagallapati/Movie-Application",
    categories: ["Web/Mobile Apps"],
  },
  {
    id: 2,
    name: "Local RAG Assistant with LLaMA 3.2",
    description:
      "A privacy-first, fully local RAG assistant that lets users ask natural language questions over their own PDF documents using an on-device LLM. Explores what it takes to run accurate retrieval and grounded generation without sending any data to an external service.",
    image: localRagImg,
    tags: ["Python", "LLaMA 3.2", "RAG", "Ollama", "FAISS"],
    githubUrl: "https://github.com/SushyamNagallapati/RAG",
    categories: ["AI/ML Experiments"],
  },
  {
    id: 3,
    name: "Autonomous Overtaking with SAC-MPC and Vision-Based Perception",
    description:
      "An autonomous driving system for opposite-lane overtaking on two-way roads, combining vision-based perception, soft actor-critic reinforcement learning, and model predictive control. Focused on producing safe, human-like overtaking behavior under tight spatial constraints using only onboard cameras, with no reliance on HD maps or external sensors.",
    image: autonomousOvertakingImg,
    tags: ["Python", "Reinforcement Learning", "MPC", "Computer Vision", "CARLA"],
    viewMoreUrl: "https://drive.google.com/file/d/1kFC-D7zrsPnd96tIv8DZh7WrauieD6Ge/view?usp=sharing",
    categories: ["Selected"],
  },
  {
    id: 4,
    name: "Path Planning with Classical, Learning-Based, and RL Methods",
    description:
      "A comparative study of classical planners, CNN-based models, and reinforcement learning for mobile robot navigation in obstacle-dense environments. Evaluated where traditional algorithms break down, how well learning-based models generalize to unseen layouts, and whether RL can meaningfully refine planned paths under realistic dynamics.",
    image: pathPlanningImg,
    tags: ["Python", "PyTorch", "CNN", "A*", "Reinforcement Learning"],
    viewMoreUrl: "https://drive.google.com/file/d/1NObQ4eHOOZXq_Eaq2_VeIma8n2_n4giv/view?usp=sharing",
    githubUrl: "https://github.com/SushyamNagallapati/path-planning-cnn/tree/master",
    categories: ["AI/ML Experiments"],
  },
  {
    id: 7,
    name: "IoT Based Control of Machining Process",
    description:
      "A remote monitoring and control system connecting a Delta PLC to an ESP32 microcontroller over Wi-Fi for real-time machining data acquisition. Hardware interfacing spans sensors, relay modules, and the PLC, replacing manual operation with a wireless interface. Evaluation covered data transmission accuracy, remote command responsiveness, and overall system reliability.",
    image: iotMachiningImg,
    tags: ["ESP32", "PLC", "IoT", "C++", "Wi-Fi"],
    viewMoreUrl: "https://drive.google.com/file/d/1l86K94k6X1TRprfh9AVbgrFCd-S3wJwT/view?usp=sharing",
    githubUrl: "https://github.com/SushyamNagallapati/IOT-BASED-CONTROL-OF-MACHINING-PROCESS-USING-PLC-AND-ESP32",
    categories: ["Hardware/IoT"],
  },
  {
    id: 8,
    name: "5 DOF Robotic Arm",
    description:
      "A 5-degree-of-freedom robotic arm for pick-and-place tasks, controlled via Arduino, servo motors, and Bluetooth. Uses inverse kinematics to compute joint angles and reach target positions across varying object sizes and orientations, with hands-on work spanning robotics, motion control, and embedded systems.",
    image: roboticArmImg,
    tags: ["Arduino", "Servo Motors", "Bluetooth", "Inverse Kinematics", "C++"],
    viewMoreUrl: "https://drive.google.com/file/d/1bUUpsJsVT-K2xgDWUHSZJhYoxI_heK86/view?usp=sharing",
    videoUrl: "https://docs.google.com/videos/d/1_kb1BwpyCrv-dZ0lvJdkU0YRG1yVs3SdY_Vkv6-jXrY/edit?usp=sharing",
    categories: ["Hardware/IoT"],
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("Selected");

  const filteredProjects = projects.filter((project) =>
    project.categories.includes(activeCategory)
  );


  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <Header />

      <main className="flex-1 pt-24 sm:pt-28 pb-28 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">

          {/* Page Title */}
          <FadeIn>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2">
              Projects
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10">
              A selection of things I've built, researched, and shipped.
            </p>
          </FadeIn>

          {/* Category Tabs */}
          <FadeIn delay={80}>
            <div className="flex flex-nowrap sm:flex-wrap gap-2 mb-12 sm:mb-16 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full whitespace-nowrap flex-shrink-0 ${
                    activeCategory === category
                      ? "bg-foreground text-background"
                      : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Projects List */}
          {filteredProjects.length > 0 ? (
            <div className="space-y-0">
              {filteredProjects.map((project, index) => (
                <FadeIn key={project.id} delay={Math.min(index * 80, 200)}>
                  {/* Divider (not before first) */}
                  {index > 0 && (
                    <div className="border-t border-border/50 my-14 sm:my-16" />
                  )}

                  <div
                    className={`flex flex-col gap-8 md:gap-12 lg:gap-16 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } items-center`}
                  >
                    {/* Text Content */}
                    <div className="w-full md:flex-1 md:max-w-sm lg:max-w-md">
                      {/* Project index number */}
                      <div className="mb-3">
                        <span className="font-serif text-4xl sm:text-5xl font-bold text-muted-foreground/20 leading-none select-none">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
                        {project.name}
                      </h2>
                      <p className="text-[0.875rem] sm:text-sm md:text-[0.9rem] text-muted-foreground leading-relaxed mb-5 sm:mb-6">
                        {project.description}
                      </p>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6 sm:mb-7">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[0.7rem] font-medium px-2.5 py-1 rounded-full bg-background border border-border text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {project.viewMoreUrl && (
                          <a
                            href={project.viewMoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 h-9 px-5 sm:px-6 text-xs sm:text-sm font-medium rounded-full bg-foreground text-background hover:opacity-75 transition-all duration-200"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            View Report
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 h-9 px-5 sm:px-6 text-xs sm:text-sm font-medium rounded-full bg-foreground text-background hover:opacity-75 transition-all duration-200"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Live Demo
                          </a>
                        )}
                        {project.videoUrl && (
                          <a
                            href={project.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 h-9 px-5 sm:px-6 text-xs sm:text-sm font-medium rounded-full border border-border text-foreground hover:bg-muted transition-all duration-200"
                          >
                            <Play className="w-3.5 h-3.5" />
                            Video
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 h-9 px-5 sm:px-6 text-xs sm:text-sm font-medium rounded-full border border-border text-foreground hover:bg-muted transition-all duration-200"
                          >
                            <Github className="w-3.5 h-3.5" />
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Project Image */}
                    <div className="w-full md:flex-1 flex items-center justify-center">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto"
                          aria-label={`Open live view of ${project.name}`}
                        >
                          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-background shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:border-border">
                            <img
                              src={project.image}
                              alt={project.name}
                              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300 flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-semibold tracking-wide uppercase text-background bg-foreground px-4 py-2 rounded-full flex items-center gap-2">
                                <ExternalLink className="w-3 h-3" />
                                Open Live
                              </span>
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto overflow-hidden rounded-2xl border border-border/60 bg-background shadow-md">
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-base sm:text-lg text-foreground mb-2">
                No projects in this category yet.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                Have questions? Feel free to{" "}
                <a
                  href="https://www.linkedin.com/in/sushyamnagallapati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  reach out
                </a>
                . I'd love to hear from you!
              </p>
            </div>
          )}
        </div>
      </main>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Projects;
