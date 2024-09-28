"use client";

import React, { useRef, useState } from "react";
import { HiCamera } from "react-icons/hi";
import { Button } from "./ui/button";

const Modal = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const filePickerRef = useRef<HTMLInputElement | null>(null);

  // Manage the array of image URLs
  const [images, setImages] = useState<string[]>([]);

  const addImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      // Generate image preview URL
      const imagePreviewUrl = URL.createObjectURL(file);

      // Add the new image URL to the images array
      setImages((prevImages) => [...prevImages, imagePreviewUrl]);
    }
  };

  const deleteImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full h-full ">
      <div ref={modalRef} className="">
        {images.length > 0 ? (
          <div className="flex flex-col gap-2">
            <div className=" h-full w-full m-2 p-2 cursor-pointer object-cover">
              <div className="flex flex-row gap-2">
                {images.map((image, index) => (
                  <div>
                    <img
                      key={index}
                      src={image}
                      alt={`Uploaded preview ${index + 1}`}
                      className="w-24 h-24 object-cover rounded"
                    />
                    {index === images.length - 1 && (
                      <Button onClick={() => deleteImage(index)}>
                        Delete Image
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div
              className="border h-[150px] w-[50%] border-accent hover:text-accent-hover bg-transparent text-accent hover:border-accent-hover cursor-pointer rounded-lg flex justify-center items-center "
              onClick={() => filePickerRef.current?.click()}
            >
              <HiCamera className="text-3xl text-accent-hover cursor-pointer" />
              <input
                hidden
                ref={filePickerRef}
                type="file"
                accept="image/*"
                onChange={addImage}
              />
            </div>
          </div>
        ) : (
          <div
            className="border h-[150px] w-full border-accent hover:text-accent-hover bg-transparent text-accent hover:border-accent-hover cursor-pointer rounded-lg flex justify-center items-center "
            onClick={() => filePickerRef.current?.click()}
          >
            <HiCamera className="text-3xl text-accent-hover cursor-pointer" />
            <input
              hidden
              ref={filePickerRef}
              type="file"
              accept="image/*"
              onChange={addImage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
