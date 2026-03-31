// export interface ProjectLink {
//   label: string;
//   url: string;
// }

// export interface Project {
//   title: string;
//   category: string;
//   description: string;
//   skills: string[];
//   tools: string[];
//   impact: string;
//   featured?: boolean;
//   image?: string;
//   links?: ProjectLink[];
// }

// export const projects: Project[] = [
//   {
//     title: "Research Assistant — Augmented Perception Lab",
//     category: "VR / Research",
//     description:
//       "VR research on hand-tracked reach-and-touch interaction and neural response. Built Unity study scenes, synchronized Quest 3 with EEG pipelines, and ran P300 experiments to analyze how interaction timing affects signal quality.",
//     skills: [
//       "Experiment design",
//       "XR prototyping",
//       "Signal collection",
//       "Interaction research",
//     ],
//     tools: ["Unity", "C#", "Quest 3", "EEG"],
//     impact:
//       "Built study environments for P300 experiments, synchronized Unity with EEG and Quest hardware, learned how timing and interaction design affect signal quality.",
//     featured: true,
//     links: [
//       { label: "Lab Site", url: "https://augmented-perception.org/" },
//     ],
//   },
//   {
//     title: "Backend Server Developer Intern — Castix LLC.",
//     category: "Backend / Systems",
//     description:
//       "Core server work for a live multiplayer game. Extended a 40k+ LOC C codebase to support deterministic time across maps, modifying map initialization, .def parsing, and client-server synchronization without regressions.",
//     skills: [
//       "Systems design",
//       "Performance optimization",
//       "Legacy code work",
//       "Debugging",
//     ],
//     tools: ["C", "Linux", "Git"],
//     impact:
//       "Worked in a 40k+ LOC codebase, shipped deterministic time behavior with zero regressions, learned how to make safe changes in a large legacy system.",
//     featured: true,
//     links: [
//       { label: "Project Site", url: "https://www.medievallands.com/" },
//     ],
//   },
//   {
//     title: "Experiencing the World of the Blind",
//     category: "XR / Accessibility",
//     description:
//       "Quest-based accessibility prototype simulating vision impairments and assistive navigation. Implemented multi-stage shader pipelines, audio and haptic cane feedback, and spatial interaction systems for obstacle awareness.",
//     skills: [
//       "Accessibility design",
//       "Sensory feedback",
//       "Spatial interaction",
//       "Immersive prototyping",
//     ],
//     tools: ["Unity", "Meta Quest", "OpenXR", "URP"],
//     impact:
//       "Built support for 4 vision modes, added audio and haptic cane feedback for obstacle awareness, learned how immersive systems can model both impairment and assistance.",
//     featured: true,
//     links: [
//       {
//         label: "GitHub",
//         url: "https://github.com/aashnakulsh/IXR_ExperiencingWorldOfTheBlind",
//       },
//     ],
//   },
//   {
//     title: "Malloc Lab",
//     category: "Systems / C",
//     description:
//       "Custom memory allocator in C implementing malloc, free, realloc, and calloc. Designed explicit and segregated free lists with coalescing strategies, balancing throughput and fragmentation under systems constraints.",
//     skills: [
//       "Allocator design",
//       "Heap debugging",
//       "Memory management",
//       "Throughput tuning",
//     ],
//     tools: ["C", "GDB", "Heap checker"],
//     impact:
//       "Implemented malloc, free, realloc, and calloc, built a heap checker for correctness, improved throughput and space use with explicit and segregated free lists.",
//     featured: true,
//   },
//   {
//     title: "Co-Founder — Goalden",
//     category: "Startup / Product",
//     description:
//       "Early-stage product focused on goal-setting and skill development. Led 150+ user interviews, built a Wix-based prototype, and iterated on product direction through structured customer discovery.",
//     skills: [
//       "Product strategy",
//       "Team leadership",
//       "User research",
//       "Rapid prototyping",
//     ],
//     tools: ["Wix", "Interviews", "Wireframes"],
//     impact:
//       "Led a team, ran 150+ customer interviews, built an early website prototype, learned how user feedback changes product direction early.",
//     links: [
//       {
//         label: "Prototype",
//         url: "https://www.figma.com/proto/Dc4BGUQCx918DEv8MD8xZs/Goalden-Prototype-Mockup?t=garwbzxfMSyHl2Tc-1",
//       },
//     ],
//   },
//   {
//     title: "Full-Stack Software Engineer — Osophy",
//     category: "AR / Game Development",
//     description:
//       "Multiplayer AR card game with real-time cooperative play. Built backend game logic and synchronization systems in Unity/C#, enabling scene transitions and consistent state across multiple players.",
//     skills: [
//       "Gameplay programming",
//       "Real-time synchronization",
//       "Frontend implementation",
//       "Backend architecture",
//     ],
//     tools: ["Unity", "C#", "AR frameworks"],
//     impact:
//       "Built software infrastructure for the prototype, implemented scene changes and player actions, learned how synchronization shapes real-time multiplayer interaction.",
//     links: [
//       { label: "GitHub", url: "https://github.com/Raeshana/Osophy" },
//     ],
//   },
//   {
//     title: "Ratatouille — Tartan Hacks",
//     category: "XR / Interaction",
//     description:
//       "XR interaction prototype with step-by-step guidance and backend feedback. Built a state-driven interaction loop with screenshot capture and integrated Quest input with local server APIs for real-time responses.",
//     skills: [
//       "Interaction flow",
//       "State handling",
//       "Backend integration",
//       "Feedback design",
//     ],
//     tools: ["Unity", "TextMeshPro", "XR Interaction", "Local server APIs"],
//     impact:
//       "Built a multi-step instruction loop with screenshot capture and server responses, connected Quest input to a backend feedback pipeline, learned how XR frontends can drive real-time guidance.",
//     links: [
//       { label: "GitHub", url: "https://github.com/aashnakulsh/Ratatouille" },
//     ],
//   },
// ];

// export const categories = Array.from(new Set(projects.map((p) => p.category)));

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  skills: string[];
  tools: string[];
  featured?: boolean;
  image?: string;
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    title: "Research Assistant — Augmented Perception Lab",
    category: "VR / Research",
    description:
      "VR research on hand-tracked reach-and-touch interaction and neural response. Built Unity study scenes, synchronized Quest 3 with EEG pipelines, and ran P300 experiments to study how interaction timing affects signal quality.",
    skills: [
      "Experiment design",
      "XR prototyping",
      "Signal collection",
      "Interaction research",
    ],
    tools: ["Unity", "C#", "Quest 3", "EEG"],
    featured: true,
    links: [{ label: "Lab Site", url: "https://augmented-perception.org/" }],
  },
  {
    title: "Backend Server Developer Intern — Castix LLC.",
    category: "Backend / Systems",
    description:
      "Core server work for a live multiplayer game. Extended a 40k+ LOC C codebase to support deterministic time across maps by modifying map initialization, .def parsing, and client-server synchronization without regressions.",
    skills: [
      "Systems design",
      "Performance optimization",
      "Legacy code work",
      "Debugging",
    ],
    tools: ["C", "Linux", "Git"],
    featured: true,
    links: [{ label: "Project Site", url: "https://www.medievallands.com/" }],
  },
  {
    title: "Experiencing the World of the Blind",
    category: "XR / Accessibility",
    description:
      "Quest-based accessibility prototype simulating vision impairments and assistive navigation. Implemented multi-stage shader pipelines, audio and haptic cane feedback, and spatial interaction systems for obstacle awareness across 4 vision modes.",
    skills: [
      "Accessibility design",
      "Sensory feedback",
      "Spatial interaction",
      "Immersive prototyping",
    ],
    tools: ["Unity", "Meta Quest", "OpenXR", "URP"],
    featured: true,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/aashnakulsh/IXR_ExperiencingWorldOfTheBlind",
      },
    ],
  },
  {
    title: "Malloc Lab",
    category: "Systems / C",
    description:
      "Custom memory allocator in C implementing malloc, free, realloc, and calloc. Designed explicit and segregated free lists with coalescing strategies, built a heap checker for correctness, and balanced throughput against fragmentation under systems constraints.",
    skills: [
      "Allocator design",
      "Heap debugging",
      "Memory management",
      "Throughput tuning",
    ],
    tools: ["C", "GDB", "Heap checker"],
    featured: true,
  },
  {
    title: "Co-Founder — Goalden",
    category: "Startup / Product",
    description:
      "Early-stage product focused on goal-setting and skill development. Led a 5-person team, ran 150+ user interviews, built a Wix-based prototype, and iterated on product direction through structured customer discovery.",
    skills: [
      "Product strategy",
      "Team leadership",
      "User research",
      "Rapid prototyping",
    ],
    tools: ["Wix", "Interviews", "Wireframes"],
    links: [
      {
        label: "Prototype",
        url: "https://www.figma.com/proto/Dc4BGUQCx918DEv8MD8xZs/Goalden-Prototype-Mockup?t=garwbzxfMSyHl2Tc-1",
      },
    ],
  },
  {
    title: "Full-Stack Software Engineer — Osophy",
    category: "AR / Game Development",
    description:
      "Multiplayer AR card game with real-time cooperative play. Built backend game logic and synchronization systems in Unity/C#, implemented scene transitions and player actions, and supported consistent state across multiple players.",
    skills: [
      "Gameplay programming",
      "Real-time synchronization",
      "Frontend implementation",
      "Backend architecture",
    ],
    tools: ["Unity", "C#", "AR frameworks"],
    links: [{ label: "GitHub", url: "https://github.com/Raeshana/Osophy" }],
  },
  {
    title: "Ratatouille — Tartan Hacks",
    category: "XR / Interaction",
    description:
      "XR interaction prototype with step-by-step guidance and backend feedback. Built a state-driven interaction loop with screenshot capture, integrated Quest input with local server APIs, and connected real-time responses to the user flow.",
    skills: [
      "Interaction flow",
      "State handling",
      "Backend integration",
      "Feedback design",
    ],
    tools: ["Unity", "TextMeshPro", "XR Interaction", "Local server APIs"],
    links: [
      { label: "GitHub", url: "https://github.com/aashnakulsh/Ratatouille" },
    ],
  },
];

export const categories = Array.from(new Set(projects.map((p) => p.category)));