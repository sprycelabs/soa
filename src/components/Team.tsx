import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const members = [
  { img: "/uploads/4df07721-2ec1-48b2-bed4-4f7c27560c8a.jpg", name: "Štefan Šulek", position: "Architekt|zakladatel" },
  { img: "/uploads/97daf54d-0028-44de-b377-fc4765d2b495.jpg", name: "Ondřej Píhrt", position: "Architekt|zakladatel" },
  { img: "/uploads/ec7171bb-804a-4e51-bc73-1d6717064de4.jpg", name: "Ondřej Laciga", position: "Architekt|zakladatel" },
];

const Team = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="tym" className="section-padding py-32 md:py-48 bg-secondary">
      <div className="grid grid-cols-12 gap-4 md:gap-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="col-span-12 mb-20 md:mb-28"
        >
          <div className="luxury-divider mb-6" />
          <span className="luxury-label block mb-4">Lidé</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-[0.85]">
            Náš <span className="italic">tým</span>
          </h2>
        </motion.div>

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

  const cardRef = useRef<HTMLDivElement>(null!);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [120, -120]);

  const colClasses = [
    "col-span-12 md:col-span-4 md:col-start-1",
    "col-span-12 md:col-span-3 md:col-start-6 md:mt-24",
    "col-span-12 md:col-span-4 md:col-start-9 md:-mt-8",
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={colClasses[index]}
    >
      <div ref={cardRef} className="overflow-hidden">
        <motion.img
          style={{ y: imgY }}
          src={member.img}
          alt={member.name}
          className="w-full aspect-[3/4] object-cover scale-[1.35] transition-transform duration-[1.5s] ease-out hover:scale-[1.4] grayscale hover:grayscale-0"
        />
      </div>
      <div className="mt-6">
        <h3 className="font-display text-xl md:text-2xl font-light text-foreground">{member.name}</h3>
        <span className="luxury-label text-muted-foreground mt-2 block">{member.position}</span>
      </div>
    </motion.div>
  );
};

export default Team;
