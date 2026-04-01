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

const NOW_YEAR = 2026;
const NOW_MONTH = 3;

const timelineEntries: TimelineEntry[] = [
    {
    role: "SDC Chair",
    org: "Fairfax House Council",
    period: "Jan 2026 — Present",
    startMonth: 1,
    startYear: 2026,
    endMonth: 5,
    endYear: 2026,
    side: "right",
  },
  {
    role: "Research Assistant",
    org: "Augmented Perception Lab",
    period: "May 2025 — Present",
    startMonth: 5,
    startYear: 2025,
    endMonth: 5,
    endYear: 2026,
    side: "left",
  },
  {
    role: "Backend Dev Intern",
    org: "Castix LLC.",
    period: "Aug 2025 — Jan 2025",
    startMonth: 9,
    startYear: 2025,
    endMonth: 12,
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
const PIXELS_PER_YEAR = 180; // vertical pixels per year of duration
const MIN_CARD_HEIGHT = 55; // minimum card height in px
const CARD_WIDTH = 200; // fixed card width

const YEAR_MARKER_SIZE = 58;
const YEAR_TEXT_SIZE = 35;
const YEAR_LABEL_WIDTH = 120;

const YearMarker = ({ year, top }: { year: number; top: number }) => {
  return (
    <div
      // className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
      style={{ top }}
    >
      <div
        className="relative"
        style={{ width: YEAR_LABEL_WIDTH, height: YEAR_MARKER_SIZE }}
      >
        {/* Full year behind the circle: visible outside the marker */}
        <span
          className="absolute inset-0 flex items-center justify-center font-display leading-none tracking-tight text-primary"
          style={{ fontSize: `${YEAR_TEXT_SIZE}px` }}
        >
          {year}
        </span>

        {/* Circle */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
          style={{ width: YEAR_MARKER_SIZE, height: YEAR_MARKER_SIZE }}
        />

        {/* Same year again, but only visible inside the circle */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full"
          style={{ width: YEAR_MARKER_SIZE, height: YEAR_MARKER_SIZE }}
        >
          <span
            className="absolute inset-0 flex items-center justify-center font-display leading-none tracking-tight text-white"
            style={{ fontSize: `${YEAR_TEXT_SIZE}px` }}
          >
            {year}
          </span>
        </div>
      </div>
    </div>
  );
};

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
            A snapshot of my journey so far.
          </p>
        </motion.div>

        {/* Desktop duration timeline */}
        <div className="hidden md:block relative mx-auto" style={{ height: totalHeight + 24 }}>
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {/* Year tick marks */}
          {/* Year tick marks */}
            {yearTicks.map((year) => {
            const top = toTop(year);
            return <YearMarker key={year} year={year} top={top} />;
          })}
          {/* {yearTicks.map((year) => {
            const top = toTop(year);
            return (
              <div
                key={year}
                className="absolute left-1/2 -translate-x-1/2 flex items-center z-20"
                style={{ top }}
              >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm">
                  <span className="font-display text-[20px] text-primary-foreground font-semibold">
                    {year}
                  </span>
                </div>
              </div>
            );
          })} */}

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
            const connectorLength = 90;
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
                  // className={`absolute border border-border/60 rounded bg-background shadow-sm flex flex-col justify-center ${
                  //   isLeft ? "text-right" : "text-left"
                  className={`absolute border border-border/60 rounded bg-background shadow-sm flex flex-col justify-start ${
                    isLeft ? "text-right" : "text-left"
                  }`}
                //   style={{
                //     top: cardTop,
                //     left: cardLeft,
                //     width: CARD_WIDTH,
                //     minHeight: cardHeight,
                //     padding: "8px 12px",
                //   }}
                // >
                //   <p className="text-[11px] font-body text-primary/80 tracking-wide uppercase leading-none mb-0.5">
                //     {entry.period}
                //   </p>
                //   <h4 className="font-display text-[14px] text-foreground leading-tight">
                //     {entry.role}
                //   </h4>
                //   <p className="text-[12px] font-body text-muted-foreground leading-tight">
                //     {entry.org}
                //   </p>
                // </div>
                style={{
                  top: cardTop,
                  left: cardLeft,
                  width: CARD_WIDTH,
                  minHeight: cardHeight,
                  padding: "10px 14px",
                }}
              >
                <div
                  className="absolute top-0 bottom-0 w-1 bg-primary/35 rounded-full"
                  style={{
                    [isLeft ? "right" : "left"]: 0,
                  }}
                />

                <p className="text-[12px] font-body text-primary/80 tracking-wide uppercase leading-none mb-0.5">
                  {entry.period}
                </p>

                <h4 className="font-display text-[15px] text-foreground leading-tight">
                  {entry.role}
                </h4>

                <p className="text-[13px] font-body text-muted-foreground leading-tight">
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
          className="text-center mt-8 md:mt-16"
        >
          <Button size="lg" className="font-body" asChild>
                <a
                  href="/akulshrestha_resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
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