"use client";

import React, { useEffect, useRef, useState } from "react";
import { HiCamera } from "react-icons/hi";


const Modal = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const filePickerRef = useRef<HTMLInputElement | null>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");

  const addImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setSelectedFile(file);
      const imagePreviewUrl = URL.createObjectURL(file);
      setImageUrl(imagePreviewUrl);
    }
  };

  return (
    <div className="w-full h-full ">
      <div ref={modalRef} className="">
        {selectedFile ? (
          <div className="flex flex-row">
            <div className=" h-full w-full m-2 p-2 cursor-pointer object-cover">
              <img
                className="border border-accent rounded-lg p-2"
                src={imageUrl}
                alt="selected file"
                onClick={() => setSelectedFile(null)}
                height={100}
                width={200}
              />
            </div>
            <div
              className="border h-[150px] w-[50%] border-accent hover:text-accent-hover  bg-transparent text-accent hover:border-accent-hover    cursor-pointer rounded-lg flex justify-center items-center "
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
            className="border h-[150px] w-full border-accent hover:text-accent-hover  bg-transparent text-accent hover:border-accent-hover    cursor-pointer rounded-lg flex justify-center items-center "
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
