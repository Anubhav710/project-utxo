"use client";
import React, { useEffect, useRef, useState } from "react";

interface DynamicInputProps {
  placeholder: string;
  value: string;
  name: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const DynamicInput: React.FC<DynamicInputProps> = ({
  placeholder,
  value,
  onChange,
  name,
  type,
  className = "",
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (spanRef.current && inputRef.current && containerRef.current) {
      const newWidth = `${spanRef.current.offsetWidth + 2}px`;
      inputRef.current.style.width = newWidth;
      containerRef.current.style.width = newWidth;
    }
  }, [value]);

  return (
    <div
      ref={containerRef}
      className={`z-10   md:min-w-[20ch] min-w-[16ch]  border-b   border-b-gray-500  text-left md:h-[3.5rem] h-[3rem] mb-[-0.55rem] ml-0 mr-[0.5ch] pl-2 inline-block relative ${className} `}
    >
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="text-left z-10 !placeholder-gray-300   bg-transparent pt-3  outline-none h-full ml-0 mr-[0.5ch] pl-0 pr-0 inline  absolute"
        ref={inputRef}
        required
      />
      <span
        ref={spanRef}
        className="invisible absolute whitespace-pre"
        aria-hidden="true"
      >
        {value || placeholder}
      </span>
    </div>
  );
};

export default DynamicInput;
