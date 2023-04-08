import React from "react";

export default function styles() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen items-center justify-center gap-8 p-24 pt-24">
      <div className="h-60 w-full border-2 border-gray-900 rounded-xl flex flex-col items-center justify-center bg-cyan">
        <p className="font-bold text-xl text-center">cyan</p>
        <p className="font-bold text-xl text-center">#2acfcf</p>
      </div>
      <div className="h-60 w-full border-2 border-gray-900 rounded-xl flex flex-col items-center justify-center bg-dark-violet">
        <p className="font-bold text-xl text-center">dark-violett</p>
        <p className="font-bold text-xl text-center">#3b3054</p>
      </div>
      <div className="h-60 w-full border-2 border-gray-900 rounded-xl flex flex-col items-center justify-center bg-secondary-red">
        <p className="font-bold text-xl text-center">secondary-red</p>
        <p className="font-bold text-xl text-center">#f46262</p>
      </div>
      <div className="h-60 w-full border-2 border-gray-900 rounded-xl flex flex-col items-center justify-center bg-light">
        <p className="font-bold text-xl text-center">light</p>
        <p className="font-bold text-xl text-center">#bfbfbf</p>
      </div>
      <div className="h-60 w-full border-2 border-gray-900 rounded-xl flex flex-col items-center justify-center bg-gray-violet">
        <p className="font-bold text-xl text-center">gray-violet</p>
        <p className="font-bold text-xl text-center">#9e9aa7</p>
      </div>
      <div className="h-60 w-full border-2 border-gray-900 rounded-xl flex flex-col items-center justify-center bg-very-dark-blue">
        <p className="font-bold text-xl text-center">very-dark-blue</p>
        <p className="font-bold text-xl text-center">#35323e</p>
      </div>
      <div className="h-60 w-full border-2 border-gray-900 rounded-xl flex flex-col items-center justify-center bg-very-dark-violet">
        <p className="font-bold text-xl text-center">very-dark-violet</p>
        <p className="font-bold text-xl text-center">#232127</p>
      </div>
    </div>
  );
}
