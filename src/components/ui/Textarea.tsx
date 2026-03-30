import { cn } from "@/lib/utils";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export default function Textarea({
  label,
  className,
  id,
  ...props
}: TextareaProps) {
  const textareaId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-2">
      <label
        htmlFor={textareaId}
        className="block text-sm font-medium text-text-muted"
      >
        {label}
      </label>
      <textarea
        id={textareaId}
        className={cn(
          "w-full rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-3 text-text placeholder:text-text-muted/50",
          "focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50",
          "transition-colors duration-200 resize-y min-h-[120px]",
          className
        )}
        {...props}
      />
    </div>
  );
}
