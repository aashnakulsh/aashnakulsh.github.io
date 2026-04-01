// // import { motion } from "framer-motion";
// // import { FileText } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { Badge } from "@/components/ui/badge";

// // interface TimelineEntry {
// //   role: string;
// //   org: string;
// //   description: string;
// //   tags: string[];
// //   period: string;
// // }

// // const workTimeline: TimelineEntry[] = [
// //   {
// //     role: "Undergraduate Research Assistant",
// //     org: "HCI & Spatial Computing Lab",
// //     description:
// //       "Designing and evaluating VR interaction techniques for spatial navigation. Running user studies and co-authoring publications.",
// //     tags: ["VR", "User Studies", "Python"],
// //     period: "2024 — Present",
// //   },
// //   {
// //     role: "Software Engineering Intern",
// //     org: "Infrastructure Team — [Company]",
// //     description:
// //       "Built internal tooling for deployment pipelines and observability dashboards used across 12 engineering teams.",
// //     tags: ["Go", "Kubernetes", "Grafana"],
// //     period: "Summer 2024",
// //   },
// //   {
// //     role: "Teaching Assistant",
// //     org: "Intro to Computer Science",
// //     description:
// //       "Led weekly lab sections, held office hours, and helped redesign autograder infrastructure for 300+ students.",
// //     tags: ["Java", "Mentorship", "Curriculum"],
// //     period: "Spring 2024",
// //   },
// // ];

// // const extracurricularTimeline: TimelineEntry[] = [
// //   {
// //     role: "President",
// //     org: "Women in Computing",
// //     description:
// //       "Scaled org membership 3× and launched a mentorship program pairing underclassmen with industry professionals.",
// //     tags: ["Leadership", "Community", "Events"],
// //     period: "2024 — Present",
// //   },
// //   {
// //     role: "Design Lead",
// //     org: "HackClub University Chapter",
// //     description:
// //       "Directed branding, web presence, and event design for a 200-member student hacker community.",
// //     tags: ["Figma", "Branding", "Web"],
// //     period: "2023 — 2024",
// //   },
// //   {
// //     role: "Volunteer Instructor",
// //     org: "Code for Good Initiative",
// //     description:
// //       "Taught introductory programming workshops to high school students from underrepresented backgrounds.",
// //     tags: ["Teaching", "Outreach", "Python"],
// //     period: "2022 — 2023",
// //   },
// // ];

// // const TimelineColumn = ({
// //   title,
// //   entries,
// //   delay = 0,
// // }: {
// //   title: string;
// //   entries: TimelineEntry[];
// //   delay?: number;
// // }) => (
// //   <div>
// //     <motion.h3
// //       initial={{ opacity: 0, y: 12 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true }}
// //       transition={{ duration: 0.4, delay }}
// //       className="font-display text-2xl text-foreground mb-8"
// //     >
// //       {title}
// //     </motion.h3>

// //     <div className="relative pl-8">
// //       {/* Vertical line */}
// //       <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

// //       <div className="space-y-8">
// //         {entries.map((entry, i) => (
// //           <motion.div
// //             key={entry.role + entry.org}
// //             initial={{ opacity: 0, y: 16 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.4, delay: delay + i * 0.1 }}
// //             className="relative"
// //           >
// //             {/* Node */}
// //             <div className="absolute -left-8 top-3 w-[15px] h-[15px] rounded-full border-2 border-primary bg-card z-10" />
// //             {/* Connector */}
// //             <div className="absolute -left-[17px] top-[9px] w-[17px] h-px bg-border" />

// //             {/* Card */}
// //             <div className="rounded-lg bg-card p-5 shadow-card">
// //               <h4 className="font-display text-lg text-foreground leading-snug">
// //                 {entry.role}
// //               </h4>
// //               <p className="text-sm font-body text-muted-foreground mt-0.5">
// //                 {entry.org}
// //               </p>
// //               <p className="text-sm font-body text-muted-foreground leading-relaxed mt-2">
// //                 {entry.description}
// //               </p>
// //               <div className="flex flex-wrap gap-1.5 mt-3">
// //                 {entry.tags.map((tag) => (
// //                   <Badge
// //                     key={tag}
// //                     variant="secondary"
// //                     className="text-[11px] font-body font-medium px-2 py-0.5"
// //                   >
// //                     {tag}
// //                   </Badge>
// //                 ))}
// //               </div>
// //               <p className="text-xs font-body text-primary mt-3 tracking-wide">
// //                 {entry.period}
// //               </p>
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </div>
// //   </div>
// // );

// // const Resume = () => {
// //   return (
// //     <section id="resume" className="py-28 bg-card">
// //       <div className="max-w-5xl mx-auto section-padding">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, margin: "-80px" }}
// //           transition={{ duration: 0.5 }}
// //           className="mb-14"
// //         >
// //           <p className="text-sm font-body tracking-widest uppercase text-muted-foreground mb-3">
// //             Experience
// //           </p>
// //           <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
// //             Timeline
// //           </h2>
// //           <p className="font-body text-muted-foreground max-w-lg leading-relaxed">
// //             A snapshot of my professional and extracurricular journey so far.
// //           </p>
// //         </motion.div>

// //         {/* Dual timelines */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 mb-12">
// //           <TimelineColumn title="Work & Research" entries={workTimeline} delay={0} />
// //           <TimelineColumn
// //             title="Leadership & Community"
// //             entries={extracurricularTimeline}
// //             delay={0.15}
// //           />
// //         </div>

// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.4, delay: 0.3 }}
// //         >
// //           <Button size="lg" className="font-body" asChild>
// //             <a href="/resume.pdf" download>
// //               <FileText className="mr-2 h-4 w-4" />
// //               Download Full Resume
// //             </a>
// //           </Button>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Resume;
// import { motion } from "framer-motion";
// import { FileText } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";

// interface TimelineEntry {
//   role: string;
//   org: string;
//   description?: string;
//   tags: string[];
//   period: string;
//   year: string;
//   side: "left" | "right";
// }

// const timelineEntries: TimelineEntry[] = [
//   {
//     role: "Research Assistant",
//     org: "Augmented Perception Lab",
//     tags: ["VR", "EEG", "C#"],
//     period: "2025 — Present",
//     year: "2025",
//     side: "left",
//   },
//   {
//     role: "President",
//     org: "Women in Computing",
//     tags: ["Leadership", "Community", "Events"],
//     period: "2024 — Present",
//     year: "2024",
//     side: "right",
//   },
//   {
//     role: "Software Engineering Intern",
//     org: "Infrastructure Team — [Company]",
//     tags: ["Go", "Kubernetes", "Grafana"],
//     period: "Summer 2024",
//     year: "2024",
//     side: "left",
//   },
//   {
//     role: "Teaching Assistant",
//     org: "Intro to Computer Science",
//     tags: ["Java", "Mentorship", "Curriculum"],
//     period: "Spring 2024",
//     year: "2024",
//     side: "right",
//   },
//   {
//     role: "Design Lead",
//     org: "HackClub University Chapter",
//     tags: ["Figma", "Branding", "Web"],
//     period: "2023 — 2024",
//     year: "2023",
//     side: "left",
//   },
//   {
//     role: "Volunteer Instructor",
//     org: "Code for Good Initiative",
//     tags: ["Teaching", "Outreach", "Python"],
//     period: "2022 — 2023",
//     year: "2022",
//     side: "right",
//   },
// ];

// // Group entries by year to place year markers
// const years = [...new Set(timelineEntries.map((e) => e.year))];

// const Resume = () => {
//   return (
//     <section id="resume" className="py-28 bg-card">
//       <div className="max-w-5xl mx-auto section-padding">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-80px" }}
//           transition={{ duration: 0.5 }}
//           className="mb-14 text-center"
//         >
//           <p className="text-sm font-body tracking-widest uppercase text-muted-foreground mb-3">
//             Experience
//           </p>
//           <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
//             Timeline
//           </h2>
//           <p className="font-body text-muted-foreground max-w-lg leading-relaxed mx-auto">
//             A snapshot of my professional and extracurricular journey so far.
//           </p>
//         </motion.div>

//         {/* Timeline */}
//         <div className="relative">
//           {/* Central vertical line */}
//           <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
//           {/* Mobile line */}
//           <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:hidden" />

//           <div className="space-y-0">
//             {years.map((year, yi) => {
//               const entriesForYear = timelineEntries.filter((e) => e.year === year);
//               return (
//                 <div key={year}>
//                   {/* Year marker */}
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.4, delay: yi * 0.1 }}
//                     className="relative flex items-center justify-center mb-8 mt-4"
//                   >
//                     {/* Desktop: centered marker */}
//                     <div className="hidden md:flex items-center justify-center relative z-10">
//                       <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-md">
//                         <span className="font-display text-sm text-primary-foreground font-semibold">
//                           {year}
//                         </span>
//                       </div>
//                     </div>
//                     {/* Mobile: left-aligned marker */}
//                     <div className="md:hidden flex items-center relative z-10 w-full">
//                       <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md">
//                         <span className="font-display text-xs text-primary-foreground font-semibold">
//                           {year}
//                         </span>
//                       </div>
//                     </div>
//                   </motion.div>

//                   {/* Entries for this year */}
//                   {entriesForYear.map((entry, i) => (
//                     <motion.div
//                       key={entry.role + entry.org}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
//                       className={`relative mb-10 md:flex md:items-start ${
//                         entry.side === "left"
//                           ? "md:justify-start"
//                           : "md:justify-end"
//                       }`}
//                     >
//                       {/* Desktop: node on center line */}
//                       <div className="hidden md:block absolute left-1/2 top-5 -translate-x-1/2 z-10">
//                         <div className="w-3 h-3 rounded-full bg-primary border-2 border-card" />
//                       </div>

//                       {/* Mobile: node on left line */}
//                       <div className="md:hidden absolute left-6 top-5 -translate-x-1/2 z-10">
//                         <div className="w-3 h-3 rounded-full bg-primary border-2 border-card" />
//                       </div>

//                       {/* Connector line desktop */}
//                       <div
//                         className={`hidden md:block absolute top-[26px] h-px bg-border ${
//                           entry.side === "left"
//                             ? "left-[calc(50%-40px)] w-10"
//                             : "left-[calc(50%+6px)] w-10"
//                         }`}
//                       />

//                       {/* Card */}
//                       <div
//                         className={`ml-14 md:ml-0 md:w-[calc(50%-40px)] rounded-lg bg-background p-5 shadow-card ${
//                           entry.side === "left" ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
//                         }`}
//                       >
//                         <p className="text-xs font-body text-primary tracking-wide uppercase mb-1">
//                           {entry.period}
//                         </p>
//                         <h4 className="font-display text-lg text-foreground leading-snug">
//                           {entry.role}
//                         </h4>
//                         <p className="text-sm font-body text-muted-foreground mt-0.5">
//                           {entry.org}
//                         </p>
//                         <p className="text-sm font-body text-muted-foreground leading-relaxed mt-2">
//                           {entry.description}
//                         </p>
//                         <div
//                           className={`flex flex-wrap gap-1.5 mt-3 ${
//                             entry.side === "left" ? "md:justify-end" : ""
//                           }`}
//                         >
//                           {entry.tags.map((tag) => (
//                             <Badge
//                               key={tag}
//                               variant="secondary"
//                               className="text-[11px] font-body font-medium px-2 py-0.5"
//                             >
//                               {tag}
//                             </Badge>
//                           ))}
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.4, delay: 0.3 }}
//           className="text-center mt-14"
//         >
//           <Button size="lg" className="font-body" asChild>
//             <a href="/resume.pdf" download>
//               <FileText className="mr-2 h-4 w-4" />
//               Download Full Resume
//             </a>
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Resume;

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TimelineEntry {
  role: string;
  org: string;
  period: string;
  startMonth: number; // 1-12
  startYear: number;
  endMonth: number | null; // null = present
  endYear: number | null;
  side: "left" | "right";
}

const NOW_YEAR = 2025;
const NOW_MONTH = 4;

const timelineEntries: TimelineEntry[] = [
    {
    role: "SDC Chair",
    org: "Fairfax House Council",
    period: "Jan 2026 — Present",
    startMonth: 1,
    startYear: 2026,
    endMonth: 3,
    endYear: 2026,
    side: "right",
  },
  {
    role: "Research Assistant",
    org: "Augmented Perception Lab",
    period: "May 2025 — Present",
    startMonth: 5,
    startYear: 2025,
    endMonth: 3,
    endYear: 2026,
    side: "left",
  },
  {
    role: "Backend Server Developer Intern",
    org: "Castix LLC.",
    period: "Aug 2025 — Jan 2025",
    startMonth: 9,
    startYear: 2025,
    endMonth: 10,
    endYear: 2025,
    side: "right",
  },
  {
    role: "Desk Attendant",
    org: "Highmark Athletics & Wellness Center",
    period: "Oct 2024 — April 2025",
    startMonth: 10,
    startYear: 2024,
    endMonth: 4,
    endYear: 2025,
    side: "left",
  },
  {
    role: "Tutor",
    org: "PLUS Tutors",
    period: "Oct 2023 — May 2024",
    startMonth: 10,
    startYear: 2023,
    endMonth: 5,
    endYear: 2024,
    side: "right",
  },
  {
    role: "Teaching Assistant",
    org: "Leonard Gelfand Center",
    period: "Aug 2023 — Dec 2023",
    startMonth: 8,
    startYear: 2023,
    endMonth: 12,
    endYear: 2023,
    side: "left",
  },
  {
    role: "System Engineer Intern",
    org: "STOL | Leidos Inc.",
    period: "Sep 2022 — May 2023",
    startMonth: 1,
    startYear: 2023,
    endMonth: 2,
    endYear: 2023,
    side: "right",
  },
];

// Convert year+month to a fractional year value for positioning
function toFractional(year: number, month: number): number {
  return year + (month - 1) / 12;
}

// Calculate layout constants
const PIXELS_PER_YEAR = 160; // vertical pixels per year of duration
const MIN_CARD_HEIGHT = 52; // minimum card height in px
const CARD_WIDTH = 220; // fixed card width

const Resume = () => {
  // Determine the full time range
  const allStarts = timelineEntries.map((e) => toFractional(e.startYear, e.startMonth));
  const allEnds = timelineEntries.map((e) =>
    e.endYear && e.endMonth
      ? toFractional(e.endYear, e.endMonth)
      : toFractional(NOW_YEAR, NOW_MONTH)
  );
  const timelineStart = Math.min(...allStarts);
  const timelineEnd = Math.max(...allEnds);
  const totalYears = timelineEnd - timelineStart;
  const totalHeight = totalYears * PIXELS_PER_YEAR;

  // Generate year tick marks
  const firstFullYear = Math.ceil(timelineStart);
  const lastFullYear = Math.floor(timelineEnd);
  const yearTicks: number[] = [];
  for (let y = firstFullYear; y <= lastFullYear; y++) {
    yearTicks.push(y);
  }

  // Position helper: fractional year → px from top (timeline goes top=latest, bottom=earliest)
  // Actually let's go top=earliest, bottom=latest (chronological top-down)
  // Wait, conventional timelines often go newest on top. Let's do newest on top.
  const toTop = (fractionalYear: number) => {
    return (timelineEnd - fractionalYear) * PIXELS_PER_YEAR;
  };

  return (
    <section id="resume" className="py-12 bg-card">
      <div className="max-w-5xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <p className="text-sm font-body tracking-widest uppercase text-muted-foreground mb-2">
            Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
            Timeline
          </h2>
          <p className="font-body text-muted-foreground max-w-lg leading-relaxed mx-auto">
            A snapshot of my professional and extracurricular journey so far.
          </p>
        </motion.div>

        {/* Desktop duration timeline */}
        <div className="hidden md:block relative mx-auto" style={{ height: totalHeight + 24 }}>
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {/* Year tick marks */}
          {yearTicks.map((year) => {
            const top = toTop(year);
            return (
              <div
                key={year}
                className="absolute left-1/2 -translate-x-1/2 flex items-center z-20"
                style={{ top }}
              >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm">
                  <span className="font-display text-[10px] text-primary-foreground font-semibold">
                    {year}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Entry cards */}
          {timelineEntries.map((entry, i) => {
            const startF = toFractional(entry.startYear, entry.startMonth);
            const endF =
              entry.endYear && entry.endMonth
                ? toFractional(entry.endYear, entry.endMonth)
                : toFractional(NOW_YEAR, NOW_MONTH);
            const durationYears = endF - startF;
            const cardHeight = Math.max(MIN_CARD_HEIGHT, durationYears * PIXELS_PER_YEAR);
            const cardTop = toTop(endF); // top of card = end date (newest on top)

            const isLeft = entry.side === "left";
            // Card offset from center: gap for connector
            const connectorLength = 20;
            const cardLeft = isLeft
              ? `calc(50% - ${CARD_WIDTH + connectorLength + 4}px)`
              : `calc(50% + ${connectorLength + 4}px)`;

            // Connector vertical center of card
            const connectorTop = cardTop + cardHeight / 2;

            return (
              <motion.div
                key={entry.role + entry.org}
                initial={{ opacity: 0, x: isLeft ? -12 : 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
              >
                {/* Connector line */}
                <div
                  className="absolute h-px bg-border"
                  style={{
                    top: connectorTop,
                    left: isLeft ? `calc(50% - ${connectorLength + 4}px)` : "calc(50% + 4px)",
                    width: connectorLength,
                  }}
                />
                {/* Node dot */}
                <div
                  className="absolute w-2 h-2 rounded-full bg-primary border-2 border-card z-10"
                  style={{
                    top: connectorTop - 4,
                    left: "calc(50% - 4px)",
                  }}
                />
                {/* Card */}
                <div
                  className={`absolute border border-border/60 rounded bg-background shadow-sm flex flex-col justify-center ${
                    isLeft ? "text-right" : "text-left"
                  }`}
                  style={{
                    top: cardTop,
                    left: cardLeft,
                    width: CARD_WIDTH,
                    minHeight: cardHeight,
                    padding: "8px 12px",
                  }}
                >
                  <p className="text-[10px] font-body text-primary/80 tracking-wide uppercase leading-none mb-0.5">
                    {entry.period}
                  </p>
                  <h4 className="font-display text-[13px] text-foreground leading-tight">
                    {entry.role}
                  </h4>
                  <p className="text-[11px] font-body text-muted-foreground leading-tight">
                    {entry.org}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: simple stacked list */}
        <div className="md:hidden relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
          {timelineEntries.map((entry, i) => (
            <motion.div
              key={entry.role + entry.org}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="relative mb-3 flex items-start"
            >
              <div className="absolute left-5 top-3 -translate-x-1/2 z-10">
                <div className="w-2 h-2 rounded-full bg-primary border-2 border-card" />
              </div>
              <div className="ml-10 border border-border/60 rounded bg-background shadow-sm px-3 py-2">
                <p className="text-[10px] font-body text-primary/80 tracking-wide uppercase leading-none mb-0.5">
                  {entry.period}
                </p>
                <h4 className="font-display text-[13px] text-foreground leading-tight">
                  {entry.role}
                </h4>
                <p className="text-[11px] font-body text-muted-foreground leading-tight">
                  {entry.org}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mt-8"
        >
          <Button size="lg" className="font-body" asChild>
            <a href="/resume.pdf" download>
              <FileText className="mr-2 h-4 w-4" />
              Download Full Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;