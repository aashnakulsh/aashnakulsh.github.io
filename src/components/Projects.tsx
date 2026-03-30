import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  skills: string[];
  tools: string[];
  impact: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Research Assistant — Augmented Perception Lab",
    category: "VR / Research",
    description:
      "VR research on hand tracking, reach-and-touch interaction, and neural response. Built study scenes and linked them with Quest 3 and EEG hardware.",
    skills: ["Experiment design", "XR prototyping", "signal collection", "interaction research"],
    tools: ["Unity", "C#", "Quest 3", "EEG"],
    impact: "Built study environments for P300 experiments, synchronized Unity with EEG and Quest hardware, learned how timing and interaction design affect signal quality.",
    link: "https://augmented-perception.org/"
  },
  {
    title: "Backend Server Developer Intern — Castix LLC.",
    category: "Backend / Systems",
    description: "Core server work for a live multiplayer game. Built systems for map setup, admin tooling, and deterministic time behavior across maps.",
    skills: ["Systems design", "performance optimization", "legacy code work", "debugging"],
    tools: ["C", "Linux", "Git"],
    impact: "Worked in a 40k+ LOC codebase, shipped deterministic time behavior with zero regressions, learned how to make safe changes in a large legacy system.",
    link: "https://www.medievallands.com/"
  },
  {
    title: "Experiencing the World of the Blind",
    category: "XR / Accessibility",
    description:
      "Quest-based accessibility prototype for blindness simulation and assistive navigation. Built visual impairment modes and cane feedback using audio and haptics.",
    skills: ["Accessibility design", "sensory feedback", "spatial interaction", "immersive prototyping"],
    tools: ["Unity", "Meta Quest", "OpenXR", "URP"],
    impact:"Built support for 4 vision modes, added audio and haptic cane feedback for obstacle awareness, learned how immersive systems can model both impairment and assistance.",
    link: "https://github.com/aashnakulsh/IXR_ExperiencingWorldOfTheBlind",
  },
  // {
  //   title: "Online Tutor",
  //   category: "Teaching / Education",
  //   description:
  //     "Math tutoring for middle school students in one-on-one and small group settings. Focused on clear explanations, steady support, and adapting to different learners.",
  //   skills: ["Instruction", "communication", "lesson planning", "student support"],
  //   tools: ["Practice problems", "worksheets", "small-group sessions"],
  //   impact:
  //     "Led 100+ tutoring sessions, supported 20 regular students, learned how to explain the same concept in ways that fit different students.",
  // },
  // {
  //   title: "System Engineer Intern",
  //   category: "Data / Systems",
  //   description:
  //     "Dashboard and research support for transportation and telematics work. Built data views, reviewed literature, and helped test UI systems for deployment.",
  //   skills: ["Data analysis", "visual communication", "interface testing", "technical writing"],
  //   tools: ["Grafana", "Flux", "Telematics UI"],
  //   impact:
  //     "Built 4 dashboards, wrote 2 literature reviews, helped refine a telematics UI and user guide, learned how to present technical data in a usable way.",
  // },
  {
    title: "Malloc Lab",
    category: "Systems / C",
    description:
      "Custom memory allocator built for dynamic memory management. Focused on allocator design, correctness, and performance under systems-level constraints.",
    skills: ["Allocator design", "heap debugging", "memory management", "throughput tuning"],
    tools: ["C", "GDB", "heap checker"],
    impact:
      "Implemented malloc, free, realloc, and calloc, built a heap checker for correctness, improved throughput and space use with explicit and segregated free lists.",
  },
  {
    title: "Co-Founder — Goalden",
    category: "Startup / Product",
    description:
      "Early-stage startup focused on goal-setting, project completion, and technical skill-building. Led team work, customer discovery, and early prototyping.",
    skills: ["Product strategy", "team leadership", "user research", "rapid prototyping"],
    tools: ["Wix", "interviews", "wireframes"],
    impact: "Led a team, ran 150+ customer interviews, built an early website prototype, learned how user feedback changes product direction early.",
    link: "https://www.figma.com/proto/Dc4BGUQCx918DEv8MD8xZs/Goalden-Prototype-Mockup?t=garwbzxfMSyHl2Tc-1"
  },
    {
    title: "Full-Stack Software Engineer — Osophy",
    category: "AR / Game Development",
    description:
      "cARd game where philosophers throughout time assemble to battle the world's most powerful AI supercomputer. Worked across game logic, interface implementation, and systems for real-time cooperative play.",
    skills: ["Gameplay programming", "real-time synchronization", "frontend implementation", "backend architecture"],
    tools: ["Unity", "C#", "AR frameworks"],
    impact: "Built software infrastructure for the prototype, implemented scene changes and player actions, learned how synchronization shapes real-time multiplayer interaction.",
    link: "https://github.com/Raeshana/Osophy",
  },

  {
    title: "Ratatouille — Tartan Hacks ",
    category: "XR / Interaction",
    description:
      "Step-by-step Quest prototype built around guided interaction and screenshot-based feedback. Advanced instructions through XR input and connected the app to a local backend.",
    skills: ["Interaction flow", "state handling", "backend integration", "feedback design"],
    tools: ["Unity", "TextMeshPro", "XR Interaction", "local server APIs"],
    impact: "Built a multi-step instruction loop with screenshot capture and server responses, connected Quest input to a backend feedback pipeline, learned how XR frontends can drive real-time guidance.",
    link: "https://github.com/aashnakulsh/Ratatouille",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="py-28">
      <div className="max-w-6xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm font-body tracking-widest uppercase text-muted-foreground mb-3">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Featured Projects
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInUp}
              className="group grid md:grid-cols-12 gap-6 bg-card rounded-lg border border-border p-6 md:p-8 shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              {/* Image placeholder */}
              <div className="md:col-span-4 aspect-[4/3] rounded-md bg-muted overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center text-muted-foreground/40 font-body text-sm group-hover:scale-[1.02] transition-transform duration-500">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-8 flex flex-col justify-between gap-4">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-body tracking-widest uppercase text-primary mb-1">
                        {project.category}
                      </p>
                      <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors duration-200">
                        {project.title}
                      </h3>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      >
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </a>
                    )}
                  </div>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-body tracking-wide uppercase text-muted-foreground mb-1.5">
                      Skills
                    </p>
                    <p className="text-sm font-body text-foreground">
                      {project.skills.join(" · ")}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-body px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm font-body text-muted-foreground italic">
                    {project.impact}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
