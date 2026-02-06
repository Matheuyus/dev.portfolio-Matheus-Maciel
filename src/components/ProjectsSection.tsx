import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Plataforma completa de e-commerce com carrinho, pagamentos e painel admin.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Bot de Automação",
    description:
      "Bot inteligente para automação de tarefas repetitivas e integração com APIs.",
    technologies: ["Python", "Selenium", "Docker", "Redis"],
    github: "https://github.com",
    demo: null,
  },
  {
    title: "Dashboard Analytics",
    description:
      "Dashboard interativo para visualização de dados e métricas em tempo real.",
    technologies: ["React", "TypeScript", "D3.js", "Firebase"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "API RESTful",
    description:
      "API robusta e escalável para gerenciamento de recursos com autenticação JWT.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com",
    demo: null,
  },
  {
    title: "App de Tarefas",
    description:
      "Aplicativo de gerenciamento de tarefas com drag-and-drop e sincronização.",
    technologies: ["React Native", "TypeScript", "Supabase"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Sistema de Chat",
    description:
      "Sistema de chat em tempo real com salas, mensagens privadas e notificações.",
    technologies: ["React", "Socket.io", "Node.js", "Redis"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Meus Projetos</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvi, demonstrando minhas
            habilidades em diferentes tecnologias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:neon-border"
            >
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-border hover:border-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                {project.demo && (
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
