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
    category: "VR / XR / AR",
    description:
      // "Built and designed VR study scenes with handtracking to study P300 signals in VR via an oddball paradigm. Synchronized Quest 3 with EEG pipelines and ran human studies.",
        "I designed + piloted an immersive VR and electroencephalography paradigm to measure how the brain responds when expected touch fails. Broadly, the impact is towards more sensitive neural evaluation of VR realism, multisensory design, + HCI.",
      skills: [
      "Experiment design",
      "XR prototyping",
      "Signal collection",
      "Interaction research",
    ],
    tools: ["Unity", "C#", "Quest 3", "EEG", "Research", "Interaction SDK"],
    featured: true,
    image: "/thumbnails/ResearchAssistant_APL_thumbnail.JPEG",

    links: [{ label: "Lab Site", url: "https://augmented-perception.org/" }],
  },
  {
    title: "Backend Server Developer Intern — Castix LLC.",
    category: "Backend / Systems",
    description:
      // "Modified a 40k+ LOC C codebase to support deterministic time across maps through changes to map initialization, .def parsing, and client-server synchronization without regressions.",
    "Built backend features for a large 40k+ LOC C multiplayer game server, with a focus on time-based world systems. Implemented a map-level frozen time feature across parsing, game logic, and client-server communication.",
      skills: [
      "Systems design",
      "Performance optimization",
      "Legacy code work",
      "Debugging",
    ],
    tools: ["C", "Linux", "Git"],
    featured: true,
    image: "/thumbnails/ML-thumbnail.png",
    links: [{ label: "Project Site", url: "https://www.medievallands.com/" }],
  },
  {
    title: "Experiencing the World of the Blind",
    category: "VR / XR / AR",
    description:
      "Built a Quest-based accessibility prototype for blindness simulation and assistive navigation. Implemented multi-stage shader pipelines, audio and haptic cane feedback, and spatial interaction systems for obstacle awareness across 4 vision modes.",
    skills: [
      "Accessibility design",
      "Sensory feedback",
      "Spatial interaction",
      "Immersive prototyping",
    ],
    tools: ["Unity", "Quest 3", "Accessibility"],
    featured: true,
    image: "/thumbnails/WorldOfBlind-thumbnail.png",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/aashnakulsh/IXR_ExperiencingWorldOfTheBlind",
      },
      {label: "Demo", url: "https://drive.google.com/file/d/14QMc8Y821gnnEq3_DEo6GSlzH3EpP5dx/view?usp=sharing"}
    ],
  },
  {
    title: "Malloc Lab",
    category: "Backend / Systems",
    description:
      "Built a custom memory allocator in C for dynamic memory management. Designed explicit and segregated free lists with coalescing strategies, built a custom heap checker, and balanced throughput against fragmentation.",
    skills: [
      "Allocator design",
      "Heap debugging",
      "Memory management",
      "Throughput tuning",
    ],
    tools: ["C", "GDB", "Heap checker"],
    featured: true,
    image: "/thumbnails/Malloc_thumbnail.png",
  },
  {
    title: "Goalden Co-Founder — Project Olympus",
    category: "Startup / Product",
    description:
      "Led an early-stage product focused on goal-setting and skill development. Led a small team, ran 150+ user interviews, built a Figma-based prototype, and iterated on product direction through structured customer discovery.",
    skills: [
      "Product strategy",
      "Team leadership",
      "User research",
      "Rapid prototyping",
    ],
    tools: ["Wix", "Interviews", "Wireframes"],
    image: "/thumbnails/Goalden-thumbnail.png",
    links: [
      {
        label: "Prototype",
        url: "https://www.figma.com/proto/Dc4BGUQCx918DEv8MD8xZs/Goalden-Prototype-Mockup?t=garwbzxfMSyHl2Tc-1",
      },
    ],
  },
  {
    title: "Full-Stack Software Engineer — Osophy",
    category: "Game Development",
    description:
      "Built a multiplayer AR card game by developing frontend game (in accordance to design team's vision), synchronizing systems in Unity, and implemented scene transitions as well as player actions.",
    skills: [
      "Frontend programming",
      "Real-time synchronization",
      "Game development",
      "Backend design",
    ],
    tools: ["Unity", "C#", "AR frameworks"],
    featured: true,
    image: "/thumbnails/Osophy-thumbnail.png",
    links: [{ label: "GitHub", url: "https://github.com/Raeshana/Osophy" }],
  },
  {
    title: "Ratatouille — Tartan Hacks",
    category: "VR / XR / AR",
    description:
      "Built an XR cooking tutor that uses screenshot-based AI feedback to help users follow recipes and correct mistakes in real time.",
    skills: [
      "APIs",
      "Networking",
      "Backend integration",
      "Feedback design",
    ],
    tools: ["Unity", "TextMeshPro", "XR Interaction", "Local server APIs"],
    image: "/thumbnails/Ratatouille_thumbnail.png",
    links: [
      { label: "GitHub", url: "https://github.com/aashnakulsh/Ratatouille" },
    ],
  },
  {
  title: "Tiny Shell (tsh)",
  category: "Backend / Systems",
  description:
    "Built a Unix shell in C with job control and signal handling. Implemented fg/bg/jobs commands, managed foreground and background processes, and reaped zombie children.",
  skills: [
    "Process control",
    "Signal handling",
    "Job control",
    "Systems debugging",
  ],
  tools: ["C", "Unix", "GDB"],
  featured: true,
  image: "/thumbnails/TshLab_thumbnail.png",
},
{
  title: "Proxy Lab",
  category: "Backend / Systems",
  description:
    "Built a multithreaded web proxy in C for HTTP request forwarding and caching. Parsed browser requests, handled concurrent connections, and added an LRU cache for recently fetched objects.",
  skills: [
    "Network programming",
    "Concurrency",
    "Request parsing",
    "Cache design",
  ],
  tools: ["C", "Sockets", "HTTP", "Pthreads"],
    image: "/thumbnails/ProxyLab-thumbnail.png",
},
{
  title: "Cache Lab",
  category: "Backend / Systems",
  description:
    "Built a cache simulator. Implemented LRU eviction, tracked hits and misses from memory traces, and used blocking to reduce cache misses.",
  skills: [
    "Cache simulation",
    "Memory management",
    "Locality analysis",
    "Blocking",
  ],
  tools: ["C", "getopt", "gdb"],
  image: "/thumbnails/CacheLab_thumbnail.png",
},
{
  title: "Custom Game Controller",
  category: "Hardware",
  description:
    "Built and designed a physical input device (game controller) and mapped it to game actions through a hands-on play interface.",
  skills: [
    "Physical computing",
    "Hardware prototyping",
    "Interaction design",
    "Input mapping",
  ],
  tools: ["Arduino", "Prototype wiring"],
  image: "/thumbnails/GameController-thumbnail.png",
  links: [
    {
      label: "Demo",
      url: "https://drive.google.com/file/d/160UYRC3DzeN_VRv-QJ0QmbWtLUodAtVk/view?usp=drive_link",
    },
  ],
},
{
  title: "PogoStink",
  category: "Game Development",
  description:
    "Built a side-scrolling platformer in Python about surviving a polluted world on a pogo stick. Implemented random level generation, collision logic, powerups, enemies, and a projectile-based phoenix encounter.",
  skills: [
    "Game logic",
    "Random Level generation",
    "Collision systems",
    "State management",
  ],
  tools: ["Python", "Random level generator", "Custom Physics Collision System"],
  image: "/thumbnails/PogoStink-thumbnail.png",
  links: [{ label: "GitHub", url: "https://github.com/aashnakulsh/PogoStink" }],
},
{
  title: "Meal Prep Helper App",
  category: "Startup / Product",
  description:
    "Designed a meal prep app prototype for Scotty’s Market in Figma. Created flows for customizable meals, cost estimates, prep time, and nutrition tracking.",
  skills: [
    "UI design",
    "User flows",
    "Information architecture",
    "Product thinking",
  ],
  tools: ["Figma", "Product Design"],
  image: "/thumbnails/MealPrep-thumbnail.png",
  links: [{label: "Video Demo", url: "https://drive.google.com/file/d/13jr1YLKXNOU-_thxP6WGEyav_d17E686/view?usp=sharing"},
          {label: "Figma Demo", url: "https://www.figma.com/proto/4gKnxKBHejgLyyajYkECTX/Premium-Meal-Prep-App--ITERATED-?node-id=1-230&t=RFAEvIwKzvBhIk5B-1"}]
},
{
  title: "Computer Vision ISpy Game",
  category: "Hackathon",
  description:
    "Developed a computer-vision version of ISpy in Python. Used image analysis to detect and categorize objects in video frames and won First Penguin at Hack112.",
  skills: [
    "Computer vision",
    "Object recognition",
    "Rapid prototyping",
    "Hackathon development",
  ],
  tools: ["Python", "OpenCV"],
    image: "/thumbnails/Hack112-thumbnail.png",
},
{
  title: "2024 AWAP Hackathon",
  category: "Hackathon",
  description:
    "Coded an adaptive strategy in Python for a tower defense game simulator. Modeled game state, tuned decision rules, and placed in the top 20% of the Beginners Bracket.",
  skills: [
    "Algorithm design",
    "Simulation strategy",
    "Game theory",
    "Adaptive systems",
  ],
  tools: ["Python", "AI", "Computer Vision"],
    image: "/thumbnails/AWAP-thumbnail.png",
  links: [{ label: "Hackathon Site", url: "https://awap.acmatcmu.com/" }],
},
];
// // Categories: 
// // VR / XR / AR
// // Backend / Systems
// // Startup
// export const projects: Project[] = [
//   {
//     title: "Research Assistant — Augmented Perception Lab",
//     category: "VR / XR / AR",
//     description:
//       "VR research on hand-tracked reach-and-touch interaction and neural response. Built Unity study scenes, synchronized Quest 3 with EEG pipelines, and led human studies to  how interaction timing affects signal quality.",
    
//       skills: [
//       "Experiment design",
//       "XR prototyping",
//       "Signal collection",
//       "Interaction research",
//     ],
//     tools: ["Unity", "C#", "Quest 3", "EEG"],
//     featured: true,
//     links: [{ label: "Lab Site", url: "https://augmented-perception.org/" }],
//   },
//   {
//     title: "Backend Server Developer Intern — Castix LLC.",
//     category: "Backend / Systems",
//     description:
//       "Core server work for a live multiplayer game. Extended a 40k+ LOC C codebase to support deterministic time across maps by modifying map initialization, .def parsing, and client-server synchronization without regressions.",
//     skills: [
//       "Systems design",
//       "Performance optimization",
//       "Legacy code work",
//       "Debugging",
//     ],
//     tools: ["C", "Linux", "Git"],
//     featured: true,
//     links: [{ label: "Project Site", url: "https://www.medievallands.com/" }],
//   },
//   {
//     title: "Experiencing the World of the Blind",
//     category: "VR / XR / AR",
//     description:
//       "Quest-based accessibility prototype simulating vision impairments and assistive navigation. Implemented multi-stage shader pipelines, audio and haptic cane feedback, and spatial interaction systems for obstacle awareness across 4 vision modes.",
//     skills: [
//       "Accessibility design",
//       "Sensory feedback",
//       "Spatial interaction",
//       "Immersive prototyping",
//     ],
//     tools: ["Unity", "Meta Quest", "OpenXR", "URP"],
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
//     category: "Backend / Systems",
//     description:
//       "Custom memory allocator in C implementing malloc, free, realloc, and calloc. Designed explicit and segregated free lists with coalescing strategies, built a heap checker for correctness, and balanced throughput against fragmentation under systems constraints.",
//     skills: [
//       "Allocator design",
//       "Heap debugging",
//       "Memory management",
//       "Throughput tuning",
//     ],
//     tools: ["C", "GDB", "Heap checker"],
//     featured: true,
//   },
//   {
//     title: "Co-Founder — Goalden",
//     category: "Startup",
//     description:
//       "Early-stage product focused on goal-setting and skill development. Led a 5-person team, ran 150+ user interviews, built a Wix-based prototype, and iterated on product direction through structured customer discovery.",
//     skills: [
//       "Product strategy",
//       "Team leadership",
//       "User research",
//       "Rapid prototyping",
//     ],
//     tools: ["Wix", "Interviews", "Wireframes"],
//     links: [
//       {
//         label: "Prototype",
//         url: "https://www.figma.com/proto/Dc4BGUQCx918DEv8MD8xZs/Goalden-Prototype-Mockup?t=garwbzxfMSyHl2Tc-1",
//       },
//     ],
//   },
//   {
//     title: "Full-Stack Software Engineer — Osophy",
//     category: "VR / XR / AR",
//     description:
//       "Multiplayer AR card game with real-time cooperative play. Built backend game logic and synchronization systems in Unity/C#, implemented scene transitions and player actions, and supported consistent state across multiple players.",
//     skills: [
//       "Gameplay programming",
//       "Real-time synchronization",
//       "Frontend implementation",
//       "Backend architecture",
//     ],
//     tools: ["Unity", "C#", "AR frameworks"],
//     links: [{ label: "GitHub", url: "https://github.com/Raeshana/Osophy" }],
//   },
//   {
//     title: "Ratatouille — Tartan Hacks",
//     category: "VR / XR / AR",
//     description:
//       "XR interaction prototype with step-by-step guidance and backend feedback. Built a state-driven interaction loop with screenshot capture, integrated Quest input with local server APIs, and connected real-time responses to the user flow.",
//     skills: [
//       "Interaction flow",
//       "State handling",
//       "Backend integration",
//       "Feedback design",
//     ],
//     tools: ["Unity", "TextMeshPro", "XR Interaction", "Local server APIs"],
//     links: [
//       { label: "GitHub", url: "https://github.com/aashnakulsh/Ratatouille" },
//     ],
//   },
// ];

export const categories = Array.from(new Set(projects.map((p) => p.category)));