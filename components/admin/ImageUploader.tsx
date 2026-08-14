"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { adminFetch } from "@/lib/adminApi";

export default function ImageUploader({
  images,
  onChange,
  max = 10,
}: {
  images: string[];
  onChange: (urls: string[]) => void;
  max?: number;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFilesSelected(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    const remaining = max - images.length;
    if (remaining <= 0) {
      setError(`You can upload up to ${max} image${max === 1 ? "" : "s"}.`);
      if (inputRef.current) inputRef.current.value = "";
      return;
    }

    const toUpload = files.slice(0, remaining);
    setUploading(true);
    setError("");

    try {
      const formData = new FormData();
      toUpload.forEach((file) => formData.append("images", file));

      const res = await adminFetch("/api/uploads", { method: "POST", body: formData });
      const body = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(body.error || "Upload failed");

      onChange([...images, ...body.urls]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  function removeImage(url: string) {
    onChange(images.filter((u) => u !== url));
  }

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {images.map((url, i) => (
          <div
            key={url}
            className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg border border-border-soft"
          >
            <Image src={url} alt={`Image ${i + 1}`} fill className="object-cover" sizes="96px" />
            {i === 0 && max > 1 ? (
              <span className="absolute left-1 top-1 rounded bg-crimson px-1.5 py-0.5 text-[10px] font-semibold text-white">
                Cover
              </span>
            ) : null}
            <button
              type="button"
              onClick={() => removeImage(url)}
              aria-label="Remove image"
              className="absolute right-1 top-1 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-black/60 text-xs leading-none text-white"
            >
              ×
            </button>
          </div>
        ))}

        {images.length < max ? (
          <label className="flex h-24 w-24 flex-shrink-0 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border-soft px-2 text-center text-xs text-ink-muted transition-colors duration-200 [@media(hover:hover)]:hover:border-crimson [@media(hover:hover)]:hover:text-crimson">
            {uploading ? "Uploading…" : "+ Add photo"}
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              multiple={max > 1}
              className="hidden"
              onChange={handleFilesSelected}
              disabled={uploading}
            />
          </label>
        ) : null}
      </div>

      <p className="mt-2 text-xs text-ink-muted">
        {max === 1
          ? `${images.length}/1 image uploaded.`
          : `${images.length}/${max} images uploaded. The first photo is used as the cover image — drag isn't supported yet, so remove and re-add in order if you need to change the cover.`}
      </p>
      {error ? <p className="mt-1 text-sm text-crimson">{error}</p> : null}
    </div>
  );
}
