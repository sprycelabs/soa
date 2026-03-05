import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const members = [
  { img: team1, name: "Jan Novák", position: "Architekt, zakladatel" },
  { img: team2, name: "Petra Svobodová", position: "Architektka" },
  { img: team3, name: "Martin Dvořák", position: "Urbanista" },
];

const Team = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="tym" className="section-padding py-24 md:py-40 bg-secondary">
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="col-span-12 mb-16 md:mb-24"
        >
          <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">Lidé</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground mt-2 leading-[0.9]">
            Náš tým
          </h2>
        </motion.div>

        {/* Asymmetric team cards with vertical offsets */}
        {members.map((member, i) => (
          <MemberCard key={member.name} member={member} index={i} />
        ))}
      </div>
    </section>
  );
};

const MemberCard = ({ member, index }: { member: typeof members[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const colClasses = [
    "col-span-12 md:col-span-4 md:col-start-1",
    "col-span-12 md:col-span-3 md:col-start-6 md:mt-20",
    "col-span-12 md:col-span-4 md:col-start-9 md:-mt-8",
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className={colClasses[index]}
    >
      <div className="overflow-hidden">
        <img
          src={member.img}
          alt={member.name}
          className="w-full aspect-[3/4] object-cover transition-transform duration-[1.2s] ease-out hover:scale-105"
        />
      </div>
      <div className="mt-5">
        <h3 className="font-display text-xl md:text-2xl font-light text-foreground">{member.name}</h3>
        <span className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-1 block">
          {member.position}
        </span>
      </div>
    </motion.div>
  );
};

export default Team;
