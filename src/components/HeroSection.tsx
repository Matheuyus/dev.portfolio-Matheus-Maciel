import { ArrowDown, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Code className="h-6 w-6 text-primary" />
            <span className="text-muted-foreground text-sm uppercase tracking-widest">
              Desenvolvedor de Software
            </span>
            <Zap className="h-6 w-6 text-primary" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text neon-text">Matheus Maciel</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Especialista em{" "}
            <span className="text-primary">Desenvolvimento Web</span>,{" "}
            <span className="text-primary">Automação</span>,{" "}
            <span className="text-primary">Bots</span> e{" "}
            <span className="text-primary">Sistemas</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 neon-border transition-all duration-300 hover:neon-border-strong"
              onClick={() => scrollToSection("#projetos")}
            >
              Ver Projetos
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              onClick={() => scrollToSection("#contato")}
            >
              Entrar em Contato
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
