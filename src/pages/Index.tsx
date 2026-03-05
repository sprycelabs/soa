import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import About from "@/components/About";
import Awards from "@/components/Awards";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Projects />
      <Philosophy />
      <Services />
      <Process />
      <About />
      <Awards />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
