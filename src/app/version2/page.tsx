"use client";

import { useState } from "react";

const VersionTwo = () => {
  const [mark, setMark] = useState("O");
  const [click, setClick] = useState("");
  const [state1, setState1] = useState("");
  const changeClick = () => {
    setClick(click);
    if (click == "true") setClick("disabled");
  };
  const changeState1 = () => {
    setState1(mark);
    if (mark == "O") {
      setMark("next.vsg");
    } else {
      setMark("");
    }
  };
  const [state2, setState2] = useState("");
  const changeState2 = () => {
    setState2(mark);
    if (mark == "O") {
      setMark("next.svg");
    } else {
      setMark("vercel.vsg");
    }
  };
  const [state3, setState3] = useState("");
  const changeState3 = () => {
    setState3(mark);
    if (mark == "O") {
      setMark("X");
    } else {
      setMark("O");
    }
  };
  const [state4, setState4] = useState("");
  const changeState4 = () => {
    setState4(mark);
    if (mark == "O") {
      setMark("X");
    } else {
      setMark("O");
    }
  };
  const [state5, setState5] = useState("");
  const changeState5 = () => {
    setState5(mark);
    if (mark == "O") {
      setMark("X");
    } else {
      setMark("O");
    }
  };
  const [state6, setState6] = useState("");
  const changeState6 = () => {
    setState6(mark);
    if (mark == "O") {
      setMark("X");
    } else {
      setMark("O");
    }
  };
  const [state7, setState7] = useState("");
  const changeState7 = () => {
    setState7(mark);
    if (mark == "O") {
      setMark("X");
    } else {
      setMark("O");
    }
  };
  const [state8, setState8] = useState("");
  const changeState8 = () => {
    setState8(mark);
    if (mark == "O") {
      setMark("X");
    } else {
      setMark("O");
    }
  };
  const [state9, setState9] = useState("");
  const changeState9 = () => {
    setState9(mark);
    if (mark == "O") {
      setMark("X");
    } else {
      setMark("O");
    }
  };

  return (
    <body className="bg-cyan-700">
      <div className="flex-row place-content-center grid bg-slate-500 w-full h-screen">
        <div>
          <button
            onClick={changeState1}
            className="h-10 w-10 border-b-8 border-r-8"
          >
            {state1}
          </button>
          <button
            onClick={changeState2}
            className="h-10 w-10 border-r-8 border-b-8"
          >
            {state2}
          </button>
          <button onClick={changeState3} className="h-10 w-10 border-b-8">
            {state3}
          </button>
        </div>
        <div>
          <button
            onClick={changeState4}
            className="h-10 w-10 border-r-8 border-b-8"
          >
            {state4}
          </button>
          <button
            onClick={changeState5}
            className="h-10 w-10 border-r-8 border-b-8 "
          >
            {state5}
          </button>
          <button onClick={changeState6} className="h-10 w-10 border-b-8">
            {state6}
          </button>
        </div>
        <div>
          <button onClick={changeState7} className="h-10 w-10 border-r-8 ">
            {state7}
          </button>
          <button onClick={changeState8} className="h-10 w-10 border-r-8 ">
            {state8}
          </button>
          <button onClick={changeState9} className="h-10 w-10 ">
            {state9}
          </button>
        </div>
      </div>
    </body>
  );
};
export default VersionTwo;
