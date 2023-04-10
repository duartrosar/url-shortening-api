import React from "react";
import tailwindConfig from "../tailwind.config";

// type Color = keyof typeof tailwindConfig.theme.extend.colors;

export default function styles() {
  // const colors = Object.entries(tailwindConfig.theme.extend.colors);
  const config = tailwindConfig;

  const colors = Object.entries(config.theme?.extend?.colors || {});

  console.log();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen items-center justify-center gap-8 p-24 pt-24">
      {colors.map(([key, value]) => (
        <div
          key={key}
          className={`h-60 w-full border-2 border-gray-900 rounded-xl flex flex-col items-center justify-center bg-${key}`}
        >
          <p className="font-bold text-xl text-center">{key}</p>
          <p className="font-bold text-xl text-center">{value}</p>
        </div>
      ))}
    </div>
  );
}
