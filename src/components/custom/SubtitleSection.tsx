import React from "react";

export default function SubtitleSection({ text }: { text: string }) {
  return (
    <div className="flex justify-center items-center mb-10">
      <p className="max-w-3xl text-center mb-10">{text}</p>
    </div>
  );
}
