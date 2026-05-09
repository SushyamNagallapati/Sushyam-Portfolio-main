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
import { Button } from "@/components/ui/button";
import { Github, Play, ExternalLink } from "lucide-react";

type ProjectCategory = "Selected" | "AI/ML Experiments" | "Web/Mobile Apps" | "Hardware/IoT";

const categories: ProjectCategory[] = [
  "Selected",
  "AI/ML Experiments",
  "Web/Mobile Apps",
  "Hardware/IoT",
];

const projects = [
  {
    id: 1,
    name: "Agentic Financial Claim Assistant",
    description:
      "A modular multi-agent system in Python using LangGraph and LLaMA 3.2, designed to resolve health insurance claim queries. Integrates a RAG pipeline for policy document understanding, an NL-to-SQL engine with graph-based schema traversal, and an automated email drafting agent. RAG achieved 88% answer correctness; NL-to-SQL hit 100% accuracy across all evaluated schemas.",
    image: agenticAiInsuranceImg,
    viewMoreUrl: "https://drive.google.com/file/d/1JP7RQRm-4GNahKEbpCaVNlaz58WeppNz/view?usp=sharing",
    githubUrl: "https://github.com/SushyamNagallapati/Agentic-Financial-Claim-Assistant-MCP-RAG",
    categories: ["Selected", "AI/ML Experiments"] as ProjectCategory[],
  },
  {
    id: 5,
    name: "AI Powered SaaS Chatbot",
    description:
      "A full-stack AI chatbot exploring how large language models integrate into production web applications. The TypeScript/Node.js backend handles multi-turn conversations with context tracking, input validation, and a clean layered architecture across routes, controllers, services, and repositories. The React frontend features typing indicators, markdown rendering, and auto-scroll.",
    image: customChatbotImg,
    viewMoreUrl: "",
    liveUrl: "https://custom-chatbot-tau-swart.vercel.app/",
    githubUrl: "https://github.com/SushyamNagallapati/Custom-ChatBot",
    categories: ["Web/Mobile Apps", "Selected"] as ProjectCategory[],
  },
  {
    id: 9,
    name: "HorusCast Weather and Trail Planning App",
    description:
      "A geospatial web app for planning outdoor activities, combining trail discovery with hyper-local weather forecasts. The Node.js/Express.js backend aggregates three external APIs: Mapbox for maps and geocoding, the OpenStreetMap Overpass API for trail data, and the NASA POWER API for climate history, all composed into a single structured response for the frontend.",
    image: horuscastImg,
    viewMoreUrl: "",
    liveUrl: "https://horus-cast-nasa-hackathon.vercel.app/",
    githubUrl: "https://github.com/SushyamNagallapati/HorusCast-NASA-Hackathon",
    categories: ["Web/Mobile Apps"] as ProjectCategory[],
  },
  {
    id: 10,
    name: "Movie Search Web Application",
    description:
      "A React app that pulls live movie data from a REST API, with real-time search, favorites management, and a reusable component architecture. State is handled with useState and useEffect, keeping UI updates responsive and predictable.",
    image: movieSearchImg,
    viewMoreUrl: "",
    liveUrl: "https://movie-application-inky.vercel.app/",
    githubUrl: "https://github.com/SushyamNagallapati/Movie-Application",
    categories: ["Web/Mobile Apps"] as ProjectCategory[],
  },
  {
    id: 2,
    name: "Local RAG Assistant with LLaMA 3.2",
    description:
      "A privacy-first, fully local RAG assistant that lets users ask natural language questions over their own PDF documents using an on-device LLM. Explores what it takes to run accurate retrieval and grounded generation without sending any data to an external service.",
    image: localRagImg,
    viewMoreUrl: "",
    githubUrl: "https://github.com/SushyamNagallapati/RAG",
    categories: ["AI/ML Experiments"] as ProjectCategory[],
  },
  {
    id: 3,
    name: "Autonomous Overtaking with SAC-MPC and Vision-Based Perception",
    description:
      "An autonomous driving system for opposite-lane overtaking on two-way roads, combining vision-based perception, soft actor-critic reinforcement learning, and model predictive control. Focused on producing safe, human-like overtaking behavior under tight spatial constraints using only onboard cameras, with no reliance on HD maps or external sensors.",
    image: autonomousOvertakingImg,
    viewMoreUrl: "https://drive.google.com/file/d/1kFC-D7zrsPnd96tIv8DZh7WrauieD6Ge/view?usp=sharing",
    githubUrl: "#",
    categories: ["Selected"] as ProjectCategory[],
  },
  {
    id: 4,
    name: "Path Planning with Classical, Learning-Based, and RL Methods",
    description:
      "A comparative study of classical planners, CNN-based models, and reinforcement learning for mobile robot navigation in obstacle-dense environments. Evaluated where traditional algorithms break down, how well learning-based models generalize to unseen layouts, and whether RL can meaningfully refine planned paths under realistic dynamics.",
    image: pathPlanningImg,
    viewMoreUrl: "https://drive.google.com/file/d/1NObQ4eHOOZXq_Eaq2_VeIma8n2_n4giv/view?usp=sharing",
    githubUrl: "https://github.com/SushyamNagallapati/path-planning-cnn/tree/master",
    categories: ["AI/ML Experiments"] as ProjectCategory[],
  },
  {
    id: 7,
    name: "IoT Based Control of Machining Process",
    description:
      "A remote monitoring and control system connecting a Delta PLC to an ESP32 microcontroller over Wi-Fi for real-time machining data acquisition. Hardware interfacing spans sensors, relay modules, and the PLC, replacing manual operation with a wireless interface. Evaluation covered data transmission accuracy, remote command responsiveness, and overall system reliability.",
    image: iotMachiningImg,
    viewMoreUrl: "https://drive.google.com/file/d/1l86K94k6X1TRprfh9AVbgrFCd-S3wJwT/view?usp=sharing",
    githubUrl: "https://github.com/SushyamNagallapati/IOT-BASED-CONTROL-OF-MACHINING-PROCESS-USING-PLC-AND-ESP32",
    categories: ["Hardware/IoT"] as ProjectCategory[],
  },
  {
    id: 8,
    name: "5 DOF Robotic Arm",
    description:
      "A 5-degree-of-freedom robotic arm for pick-and-place tasks, controlled via Arduino, servo motors, and Bluetooth. Uses inverse kinematics to compute joint angles and reach target positions across varying object sizes and orientations, with hands-on work spanning robotics, motion control, and embedded systems.",
    image: roboticArmImg,
    viewMoreUrl: "https://drive.google.com/file/d/1bUUpsJsVT-K2xgDWUHSZJhYoxI_heK86/view?usp=sharing",
    videoUrl: "https://docs.google.com/videos/d/1_kb1BwpyCrv-dZ0lvJdkU0YRG1yVs3SdY_Vkv6-jXrY/edit?usp=sharing",
    githubUrl: "",
    categories: ["Hardware/IoT"] as ProjectCategory[],
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
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 sm:mb-8">
              Projects
            </h1>
          </FadeIn>

          {/* Category Tabs — scrollable on mobile */}
          <FadeIn delay={80}>
          <div className="flex flex-nowrap sm:flex-wrap gap-2 mb-10 sm:mb-16 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-full whitespace-nowrap flex-shrink-0 ${
                  activeCategory === category
                    ? "bg-foreground text-background"
                    : "bg-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          </FadeIn>

          {/* Projects List */}
          {filteredProjects.length > 0 ? (
            <div className="space-y-16 sm:space-y-20">
              {filteredProjects.map((project, index) => (
                <FadeIn key={project.id} delay={Math.min(index * 100, 200)}>
                <div
                  className={`flex flex-col gap-8 md:gap-12 lg:gap-16 ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  } items-center`}
                >
                  {/* Text Content */}
                  <div className="w-full md:flex-1 md:max-w-sm lg:max-w-md">
                    <h2 className="font-serif text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                      {project.name}
                    </h2>
                    <p className="text-[0.875rem] sm:text-sm md:text-[0.9rem] text-muted-foreground leading-relaxed mb-5 sm:mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {project.viewMoreUrl && (
                        <a
                          href={project.viewMoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center h-9 px-5 sm:px-6 text-xs sm:text-sm font-medium rounded-full bg-foreground text-background hover:opacity-75 transition-all duration-200"
                        >
                          View more
                        </a>
                      )}
                      {"liveUrl" in project && (project as any).liveUrl && (
                        <a
                          href={(project as any).liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 h-9 px-5 sm:px-6 text-xs sm:text-sm font-medium rounded-full bg-foreground text-background hover:opacity-75 transition-all duration-200"
                        >
                          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          Live View
                        </a>
                      )}
                      {"videoUrl" in project && (project as any).videoUrl && (
                        <Button variant="outline" size="sm" className="rounded-full px-5 sm:px-6 gap-2 text-xs sm:text-sm" asChild>
                          <a href={(project as any).videoUrl} target="_blank" rel="noopener noreferrer">
                            <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            Video
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" className="rounded-full px-5 sm:px-6 gap-2 text-xs sm:text-sm" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            Open in Github
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="w-full md:flex-1 flex items-center justify-center">
                    {"liveUrl" in project && (project as any).liveUrl ? (
                      <a
                        href={(project as any).liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto cursor-pointer transition-transform hover:scale-[1.02]"
                        aria-label={`Open live view of ${project.name}`}
                      >
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-auto object-contain shadow-lg rounded-sm"
                        />
                      </a>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-contain shadow-lg mx-auto rounded-sm"
                      />
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
                <a href="https://www.linkedin.com/in/sushyamnagallapati" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
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
