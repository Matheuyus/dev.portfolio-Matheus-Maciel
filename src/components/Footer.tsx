import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Dev.Portfolio. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Feito com <Heart className="h-4 w-4 text-primary fill-primary" /> usando React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
