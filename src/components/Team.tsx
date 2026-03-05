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
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">Lidé</span>
        <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mt-2">Náš tým</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <img
        src={member.img}
        alt={member.name}
        className="w-full aspect-[3/4] object-cover mb-4"
      />
      <h3 className="font-display text-xl md:text-2xl font-light text-foreground">{member.name}</h3>
      <span className="font-body text-sm text-muted-foreground font-light">{member.position}</span>
    </motion.div>
  );
};

export default Team;
