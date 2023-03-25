import React from "react";

export default function Calculator() {
  return (
    <React.Fragment>
      <sectioin>
        <div className="bg-[#000300] h-screen w-96 mx-auto  overflow-hidden mt-10">
          <div className="w-full h-20">
          <input type="text" placeholder="0" className="w-full h-full border rounded-lg border-white bg-[#000300] text-4xl text-right pr-5"/>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-10 mx-3">
            <button className="text-gray w-20 h-20 bg-[#59dda8] rounded-lg font-bold text-4xl flex justify-center items-center shadow">AC</button>
            <button className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow">C</button>
            <button className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow">/</button>
            <button className="text-white w-20 h-42 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow row-span-2">+</button>

            <button className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow">9</button>
            <button className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow">8</button>
            <button className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow">7</button>

            <button className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow">4</button>
            <button className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow">5</button>
            <button className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow">6</button>
            <button className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow">-</button>

            <button className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow">1</button>
            <button className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow">2</button>
            <button className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow">3</button>
            <button className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow">*</button>

            <button className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow">.</button>
            <button className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow">0</button>
            <button className="text-white w-44 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow col-span-2">*</button>
          </div>
        </div>
      </sectioin>
    </React.Fragment>
  );
}
