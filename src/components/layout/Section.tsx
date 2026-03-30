import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-32", className)}>
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}
