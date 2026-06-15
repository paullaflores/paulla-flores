"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface GaleriaImage {
  src: string;
  alt: string;
  contain?: boolean;
}

export default function GaleriaLightbox({ images }: { images: GaleriaImage[] }) {
  const [selectedImage, setSelectedImage] = useState<GaleriaImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-3 gap-2 h-full">
        {images.map((img) => (
          <button
            key={img.src}
            onClick={() => setSelectedImage(img)}
            className={`relative min-h-0 overflow-hidden rounded-lg cursor-pointer group${img.contain ? " bg-[#FDF0E8]" : ""}`}
            aria-label={`Ver ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className={`${img.contain ? "object-contain p-3" : "object-cover"} group-hover:opacity-90 transition-opacity duration-200`}
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Fechar"
          >
            <X size={32} />
          </button>
          <div onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="object-contain max-h-[90vh] max-w-[90vw]"
            />
          </div>
        </div>
      )}
    </>
  );
}
