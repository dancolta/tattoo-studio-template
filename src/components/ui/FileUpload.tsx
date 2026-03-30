"use client";

import { useState, useRef } from "react";
import { Upload, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  label: string;
  accept?: string;
  onChange?: (file: File | null) => void;
  className?: string;
}

export default function FileUpload({
  label,
  accept = "image/*",
  onChange,
  className,
}: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFile(f: File | null) {
    setFile(f);
    onChange?.(f);

    if (f && f.type.startsWith("image/")) {
      const url = URL.createObjectURL(f);
      setPreview(url);
    } else {
      setPreview(null);
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  }

  function clear() {
    setFile(null);
    setPreview(null);
    onChange?.(null);
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div className={cn("space-y-2", className)}>
      <label className="block text-sm font-medium text-text-muted">
        {label}
      </label>

      {file ? (
        <div className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-xl p-3">
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-12 h-12 rounded object-cover"
            />
          )}
          <span className="text-sm text-text truncate flex-1">{file.name}</span>
          <button
            type="button"
            onClick={clear}
            aria-label="Remove file"
            className="text-text-muted hover:text-text transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className={cn(
            "border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors duration-200",
            isDragging
              ? "border-accent bg-accent/5"
              : "border-white/[0.06] hover:border-accent/30"
          )}
        >
          <Upload className="w-8 h-8 text-text-muted mx-auto mb-3" />
          <p className="text-sm text-text-muted">
            Drag and drop or{" "}
            <span className="text-accent font-medium">browse</span>
          </p>
          <p className="text-xs text-text-muted/50 mt-1">
            PNG, JPG up to 10MB
          </p>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={(e) => handleFile(e.target.files?.[0] || null)}
        className="hidden"
      />
    </div>
  );
}
