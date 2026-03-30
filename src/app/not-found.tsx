import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6 px-6">
        <h1 className="font-heading text-7xl md:text-9xl font-bold text-accent/20">
          404
        </h1>
        <p className="text-text-muted text-lg">Page not found</p>
        <Button href="/">Back Home</Button>
      </div>
    </div>
  );
}
