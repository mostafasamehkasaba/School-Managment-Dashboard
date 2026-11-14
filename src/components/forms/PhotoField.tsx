"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FieldError } from "react-hook-form";

type PhotoFieldProps = {
  field: any;
  error?: FieldError;
  defaultImage?: string;
};

const PhotoField = ({ field, error, defaultImage }: PhotoFieldProps) => {
  const [preview, setPreview] = useState<string | null>(defaultImage ?? null);

  useEffect(() => {
    return () => {
      if (preview?.startsWith("blob:")) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div className="flex flex-col gap-2 md:col-span-2">
      <span className="text-sm font-medium text-gray-700">Photo</span>
      <label
        htmlFor="img"
        className={`group flex cursor-pointer items-center gap-4 rounded-xl border-2 border-dashed bg-gray-50/70 p-4 transition ${
          error
            ? "border-red-300 hover:border-red-400"
            : "border-gray-200 hover:border-sky-300 hover:bg-sky-50/50"
        }`}
      >
        <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-gray-200">
          {preview ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={preview}
              alt="Selected photo"
              className="h-full w-full object-cover"
            />
          ) : (
            <Image src="/upload.png" alt="" width={26} height={26} />
          )}
        </span>
        <span className="flex flex-col">
          <span className="text-sm font-medium text-gray-700">
            {preview ? "Change photo" : "Upload a photo"}
          </span>
          <span className="text-xs text-gray-400">
            PNG or JPG, up to 2 MB
          </span>
        </span>
        <input
          id="img"
          type="file"
          accept="image/*"
          className="hidden"
          name={field?.name}
          ref={field?.ref}
          onBlur={field?.onBlur}
          onChange={(event) => {
            field?.onChange(event);
            const file = event.target.files?.[0];
            setPreview(file ? URL.createObjectURL(file) : null);
          }}
        />
      </label>
      {error?.message && (
        <p className="text-xs font-medium text-red-500">
          {error.message.toString()}
        </p>
      )}
    </div>
  );
};

export default PhotoField;
