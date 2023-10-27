import React from "react";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("white");
  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("Tomato")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Tomato" }}
          >
            Tomato
          </button>
          <button
            onClick={() => setColor("SlateBlue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "SlateBlue" }}
          >
            SlateBlue
          </button>
          <button
            onClick={() => setColor("MediumSeaGreen")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "MediumSeaGreen" }}
          >
            MediumSeaGreen
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            olive
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            orange
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            purple
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
