import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function ServiceCard({ title, description, icon: Icon, className }: ServiceCardProps) {
  return (
    <div 
      className={cn(
        "group p-8 rounded-xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300",
        className
      )}
    >
      <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary text-primary group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-serif font-semibold mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
