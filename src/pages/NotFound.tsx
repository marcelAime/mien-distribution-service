import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-brand-blue/5 to-brand-orange/5">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="fade-in-up">
          <h1 className="mb-4 text-9xl font-bold text-accent">404</h1>
          <h2 className="mb-4 text-2xl font-semibold text-primary">Page introuvable</h2>
          <p className="mb-8 text-muted-foreground">
            Désolé, la page que vous cherchez n'existe pas ou a été déplacée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-gradient">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Retour à l'accueil
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Page précédente
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
