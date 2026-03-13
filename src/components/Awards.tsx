import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  { name: "Martin Kořínek", role: "Majitel rezidence", rating: 5, text: "Profesionální přístup od prvního setkání. Výsledek předčil naše očekávání." },
  { name: "Kateřina Blažková", role: "Majitelka kavárny", rating: 5, text: "Studio LAstudio dokázalo přetavit naši vizi do dokonalého prostoru." },
  { name: "Tomáš Hrubý", role: "Developer", rating: 5, text: "Spolupráce na projektu ateliérů byla bezchybná. Dodržení termínů i rozpočtu." },
  { name: "Jana Veselá", role: "Majitelka bistra", rating: 4, text: "Kreativní řešení interiéru Bistra Skleník překvapilo nás i naše hosty." },
  { name: "Petr Šimánek", role: "Zástupce města", rating: 5, text: "Lávka přes Moravu je ukázkou citlivého přístupu k veřejnému prostoru." },
];

const Awards = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding py-32 md:py-48">
      <div className="grid grid-cols-12 gap-4 md:gap-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="col-span-12 md:col-span-4 mb-16 md:mb-0"
        >
          <div className="luxury-divider mb-6" />
          <span className="luxury-label block mb-4">Ohlasy</span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-[0.85]">
            Recenze
            <br />
            <span className="italic text-muted-foreground">& reference</span>
          </h2>
        </motion.div>

        <div className="col-span-12 md:col-span-7 md:col-start-6">
          {reviews.map((review, i) => (
            <ReviewRow key={review.name} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ReviewRow = ({ review, index }: { review: typeof reviews[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="py-6 border-b border-border group hover:bg-accent/30 transition-colors duration-500 -mx-4 px-4"
    >
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${i < review.rating ? "fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" : "text-muted-foreground/30"}`}
          />
        ))}
      </div>
      <p className="font-body text-sm md:text-base font-light text-foreground/80 mb-4 leading-relaxed italic">
        „{review.text}"
      </p>
      <div className="flex items-baseline justify-between">
        <span className="font-display text-lg md:text-xl font-light text-foreground">{review.name}</span>
        <span className="font-body text-xs text-muted-foreground font-extralight tracking-wider">{review.role}</span>
      </div>
    </motion.div>
  );
};

export default Awards;
