import { useState } from "react";
import { Github, Linkedin, Mail, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  message: z.string().trim().min(1, "Mensagem é obrigatória").max(1000, "Mensagem muito longa"),
});

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Matheuyus/Matheuyus",
    color: "hover:text-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/matheus-maciel-79764020b/",
    color: "hover:text-blue-500",
  },
 {
  icon: Mail,
  label: "Email",
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=mathesmaciel2021@gmail.com&su=Contato%20pelo%20Portfólio&body=Olá%20Matheus,%0D%0A%0D%0AVi%20seu%20portfólio%20e%20gostaria%20de%20conversar.",
  text: "Entrar em contato",
  color: "hover:text-primary",
}


];

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact", {
        body: validation.data,
      });

      if (error) throw error;

      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Responderei em breve!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Entre em Contato</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Tem um projeto em mente? Vamos conversar! Ficarei feliz em ajudar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-card border-border focus:border-primary"
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-card border-border focus:border-primary"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Sua mensagem..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-card border-border focus:border-primary resize-none"
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 neon-border hover:neon-border-strong transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Social Links & Info */}
          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Vamos nos conectar!
              </h3>
              <p className="text-muted-foreground mb-6">
                Estou sempre aberto a novas oportunidades e colaborações.
                Sinta-se à vontade para entrar em contato através do formulário
                ou pelas redes sociais.
              </p>

              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-lg bg-background border border-border text-muted-foreground ${link.color} hover:border-primary/50 transition-all duration-300 hover:neon-border`}
                    aria-label={link.label}
                  >
                    <link.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-violet-500/10 border border-primary/20">
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Disponível para projetos
              </h3>
              <p className="text-muted-foreground">
                Atualmente disponível para freelance e oportunidades de
                trabalho. Vamos criar algo incrível juntos!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
