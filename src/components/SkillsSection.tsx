import { Code, Database, Globe, Server, Settings, Smartphone } from "lucide-react";

const skillCategories = [
  {
    title: "Linguagens",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS"],
  },
  {
    title: "Frameworks",
    icon: Globe,
    skills: ["React", "Node.js", "Express", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Banco de Dados",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
  },
  {
    title: "DevOps",
    icon: Server,
    skills: ["Docker", "Git", "CI/CD", "AWS", "Linux"],
  },
  {
    title: "Ferramentas",
    icon: Settings,
    skills: ["VS Code", "Postman", "Figma", "Jira", "GitHub"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["React Native", "PWA", "Responsive Design"],
  },
];

const SkillsSection = () => {
  return (
    <section id="habilidades" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Habilidades</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo no dia a dia para criar
            soluções inovadoras.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 group hover:neon-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 rounded-full text-sm bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
