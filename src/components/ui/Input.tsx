import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, className, id, ...props }: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-2">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-text-muted"
      >
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          "w-full rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-3 text-text placeholder:text-text-muted/50",
          "focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50",
          "transition-colors duration-200",
          className
        )}
        {...props}
      />
    </div>
  );
}
