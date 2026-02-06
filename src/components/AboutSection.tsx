import { User, Target, Lightbulb, Rocket } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Desenvolvimento orientado a soluções práticas e eficientes",
    },
    {
      icon: Lightbulb,
      title: "Aprendizado Contínuo",
      description: "Sempre atualizado com as últimas tecnologias do mercado",
    },
    {
      icon: Rocket,
      title: "Alta Performance",
      description: "Código limpo, escalável e de alta qualidade",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Sobre Mim</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Avatar/Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-violet-500 p-1 neon-border">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <User className="w-32 h-32 text-primary" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou um desenvolvedor apaixonado por tecnologia e inovação. Com
              experiência em desenvolvimento web, automação de processos e
              criação de sistemas, busco sempre entregar soluções que fazem a
              diferença.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Minha jornada na programação começou há alguns anos, e desde então
              venho me especializando em diversas tecnologias modernas. Acredito
              que a tecnologia tem o poder de transformar ideias em realidade.
            </p>

            <div className="grid gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-colors duration-300"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
