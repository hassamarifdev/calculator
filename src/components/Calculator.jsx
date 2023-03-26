import React, {useState} from "react";

export default function Calculator() {


  const [number, setNumber] = useState('')

  // Handle click
  const handleClick=(e)=>{
    setNumber(number.concat(e.target.value))
  }

  //Handle Answer
  const handleAnswer=()=>{
    try{
      setNumber(eval(number).toString())
    }catch(error){
      setNumber('Invalid')
    }
  }
  return ( 
    <React.Fragment>
      <sectioin>
        <div className="w-96 mx-auto  overflow-hidden -m-6">
          <div className="w-full h-20">
          <input 
          type="text" 
          placeholder="0" 
          value= {number} 
          className="w-full h-full border rounded-lg border-white bg-[#000300] text-white text-4xl text-right pr-5"/>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-10 mx-3">
            <button onClick={()=>{setNumber('')}} className="text-gray w-20 h-20 bg-[#59dda8] rounded-lg font-bold text-4xl flex justify-center items-center shadow">AC</button>
            <button onClick={()=>{setNumber(number.slice(0,-1))}} className="text-gray w-20 h-20 bg-[#59dda8] rounded-lg font-bold text-4xl flex justify-center items-center shadow">C</button>
            <button value='/' onClick={handleClick} className="text-gray w-20 h-20 bg-[#59dda8] rounded-lg font-bold text-4xl flex justify-center items-center shadow">/</button>
            <button value='+' onClick={handleClick} className="text-gray w-20 h-42 bg-[#59dda8] rounded-lg font-bold text-4xl flex justify-center items-center shadow row-span-2">+</button>

            <button value='9' onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow">9</button>
            <button value='8' onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow">8</button>
            <button value='7' onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow">7</button>

            <button value='4' onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow">4</button>
            <button value='5' onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow">5</button>
            <button value='6' onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow">6</button>
            <button value='-' onClick={handleClick} className="text-gray w-20 h-20 bg-[#59dda8] rounded-lg font-bold text-4xl flex justify-center items-center shadow">-</button>

            <button value='1' onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow">1</button>
            <button value='2' onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow">2</button>
            <button value='3' onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow">3</button>
            <button value='*' onClick={handleClick} className="text-gray w-20 h-20 bg-[#59dda8] rounded-lg font-bold text-4xl flex justify-center items-center shadow">*</button>

            <button value='.' onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow">.</button>
            <button value='0' onClick={handleClick} className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow">0</button>
            <button onClick={handleAnswer} className="text-gray w-[171px] h-20 bg-[#59dda8] rounded-lg font-bold text-4xl flex justify-center items-center shadow col-span-2">=</button>
          </div>
        </div>
      </sectioin>
    </React.Fragment>
  );
}
