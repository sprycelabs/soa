import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="kontakt" className="section-padding py-32 md:py-48">
      <div ref={ref} className="grid grid-cols-12 gap-4 md:gap-8">
        {/* Left side — heading & info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="col-span-12 md:col-span-5 mb-16 md:mb-0">
          
          <div className="luxury-divider mb-6" />
          <span className="luxury-label block mb-6">Kontakt</span>
          <h2 className="font-display text-4xl md:text-7xl lg:text-[7rem] font-light text-foreground leading-[0.82] mb-10">
            Kontaktujte
            <br />
            <span className="italic">nás</span>
          </h2>
          <p className="font-body text-sm md:text-base leading-[1.9] text-foreground/70 font-light max-w-md mb-16">
            Máte projekt nebo nápad, který byste chtěli realizovat? Rádi si s vámi domluvíme nezávaznou konzultaci.
          </p>

          {/* Contact details */}
          <div className="space-y-10">
            <div>
              <span className="luxury-label block mb-3">Email</span>
              <a
                href="mailto:studio@soa.cz"
                className="font-body text-base text-foreground hover:text-muted-foreground transition-colors duration-500 font-extralight">
                
                info@s-o-a.cz
              </a>
            </div>
            <div>
              <span className="luxury-label block mb-3">Telefon</span>
              <span className="font-body text-base text-foreground font-extralight">
                +420 774 322 109
              </span>
            </div>
            <div>
              <span className="luxury-label block mb-3">Adresa</span>
              <span className="font-body text-base text-foreground font-extralight">
                Václavské nám. 828/23
                <br />
                110 00 Praha, Česká Republika
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right side — form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-12 md:col-span-5 md:col-start-8">
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="font-body text-[11px] tracking-[0.25em] uppercase text-foreground/60 block mb-3">Jméno</label>
              <input
                type="text"
                required
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-border pb-3 font-body text-sm text-foreground font-light focus:outline-none focus:border-gold transition-colors duration-500 placeholder:text-foreground/35"
                placeholder="Vaše jméno" />
              
            </div>

            <div>
              <label className="font-body text-[11px] tracking-[0.25em] uppercase text-foreground/60 block mb-3">Email</label>
              <input
                type="email"
                required
                maxLength={255}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-border pb-3 font-body text-sm text-foreground font-light focus:outline-none focus:border-gold transition-colors duration-500 placeholder:text-foreground/35"
                placeholder="vas@email.cz" />
              
            </div>

            <div>
              <label className="font-body text-[11px] tracking-[0.25em] uppercase text-foreground/60 block mb-3">Telefon</label>
              <input
                type="tel"
                maxLength={20}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-transparent border-b border-border pb-3 font-body text-sm text-foreground font-light focus:outline-none focus:border-gold transition-colors duration-500 placeholder:text-foreground/35"
                placeholder="+420 ..." />
              
            </div>

            <div>
              <label className="font-body text-[11px] tracking-[0.25em] uppercase text-foreground/60 block mb-3">Zpráva</label>
              <textarea
                required
                maxLength={1000}
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-border pb-3 font-body text-sm text-foreground font-light focus:outline-none focus:border-gold transition-colors duration-500 placeholder:text-foreground/35 resize-none"
                placeholder="Popište váš projekt nebo nápad..." />
              
            </div>

            <button
              type="submit"
              className="inline-block px-12 py-5 border border-foreground text-foreground font-body text-[10px] tracking-[0.35em] uppercase hover:bg-foreground hover:text-primary-foreground transition-all duration-700 mt-4">
              
              Odeslat zprávu
            </button>

            {submitted &&
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-body text-sm text-gold font-extralight mt-4">
              
                Děkujeme za zprávu. Ozveme se vám co nejdříve.
              </motion.p>
            }
          </form>
        </motion.div>
      </div>
    </section>);

};

export default Contact;