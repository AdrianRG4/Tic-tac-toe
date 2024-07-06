"use client";

import { useState, useEffect } from "react";

const Button = ({ changeState, state }) => {
  return (
    <button
      onClick={changeState}
      className="h-10 w-10 bg-amber-200 p-1 rounded mr-2"
    >
      {state == "X" ? (
        <img src="https://www.zarla.com/images/zarla-x-1x1-2400x2400-20211122-p3xg3v4cb9p9vvktbcpj.png?crop=1:1,smart&width=250&dpr=2"></img>
      ) : state == "O" ? (
        <img src="https://www.zarla.com/images/zarla-o-1x1-2400x2400-20211122-xc4d79yvwpxdxk8yvw3w.png?crop=1:1,smart&width=250&dpr=2"></img>
      ) : null}
    </button>
  );
};

const VersionTwo = () => {
  const [mark, setMark] = useState("O");
  const [state1, setState1] = useState("");
  const verificarGanador = () => {
    if (state1 === "O" && state2 === "O" && state3 === "O") {
      console.log("GANO JUGADOR OOOOOOO");
    }
  };

  const changeState1 = (event) => {
    setState1(mark);
    event.currentTarget.disabled = true;
    console.log(event);
    if (mark == "O") {
      setMark("X");
    } else {
      setMark("O");
    }
  };
  const [state2, setState2] = useState("");
  const changeState2 = (event) => {
    setState2(mark);
    event.currentTarget.disabled = true;
    if (mark == "O") {
      setMark("X");
    } else {
      setMark("O");
    }
  };
  const [state3, setState3] = useState("");
  const changeState3 = (event) => {
    setState3(mark);
    event.currentTarget.disabled = true;
    if (mark == "O") {
      setMark("X");
    } else {
      setMark("O");
    }
  };
  const [state4, setState4] = useState("");
  const changeState4 = (event) => {
    setState4(mark);
    event.currentTarget.disabled = true;
    if (mark == "O") {
      setMark("X");
    } else {
      setMark("O");
    }
  };
  const [state5, setState5] = useState("");
  const changeState5 = (event) => {
    setState5(mark);
    event.currentTarget.disabled = true;
    if (mark == "O") {
      setMark("X");
    } else {
      setMark("O");
    }
  };
  const [state6, setState6] = useState("");
  const changeState6 = (event) => {
    setState6(mark);
    event.currentTarget.disabled = true;
    if (mark == "O") {
      setMark("X");
    } else {
      setMark("O");
    }
  };
  const [state7, setState7] = useState("");
  const changeState7 = (event) => {
    setState7(mark);
    event.currentTarget.disabled = true;
    if (mark == "O") {
      setMark("X");
    } else {
      setMark("O");
    }
  };
  const [state8, setState8] = useState("");
  const changeState8 = (event) => {
    setState8(mark);
    event.currentTarget.disabled = true;
    if (mark == "O") {
      setMark("X");
    } else {
      setMark("O");
    }
  };
  const [state9, setState9] = useState("");
  const changeState9 = (event: any) => {
    setState9(mark);
    event.currentTarget.disabled = true;
    if (mark == "O") {
      setMark("X");
    } else {
      setMark("O");
    }
  };
  useEffect(() => {
    console.log("cambio estado ");
    verificarGanador();
  }, [state1, state2, state3, state4, state5, state6, state7, state8, state9]);

  return (
    <body className="bg-cyan-700">
      <div className="flex-row place-content-center grid bg-slate-500 w-full h-screen gap-y-2">
        <div>
          <Button state={state1} changeState={changeState1} />
          <Button state={state2} changeState={changeState2} />
          <Button state={state3} changeState={changeState3} />
        </div>
        <div>
          <Button state={state4} changeState={changeState4} />
          <Button state={state5} changeState={changeState5} />
          <Button state={state6} changeState={changeState6} />
        </div>
        <div>
          <Button state={state7} changeState={changeState7} />
          <Button state={state8} changeState={changeState8} />
          <Button state={state9} changeState={changeState9} />
        </div>
      </div>
    </body>
  );
};
export default VersionTwo;
