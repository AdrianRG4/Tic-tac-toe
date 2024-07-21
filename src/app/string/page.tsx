"use client";
import { useState, useEffect } from "react";
const String = () => {
  const [input, setInput] = useState("");
  const changeInput = (event) => {
    const value = event.target.value;
    setInput(value);
  };
  const capitalize = (input) => {
    if (input.length < 2) {
      return input;
    }
    const firstCapital = input[0].toUpperCase();
    const rest = input.slice(1).toLowerCase();
    return firstCapital + rest;
  };
  const longitudLetras = (input) => {
    const longitud = input.length;
    const number = Number(longitud);
    return number;
  };
  const checkVowels = (input) => {};
  return (
    <div className="p-8">
      <div className="gap-x-5">
        <input
          type="text"
          onChange={changeInput}
          placeholder="Escribe aqui"
          className="border"
        />
        <button>Googlear</button>
      </div>
      <div className="bg-blue-800 rounded">
        <div>{input}</div>
        <div>{input.toUpperCase()}</div>
        <div>{input.toLowerCase()}</div>
        <div>{capitalize(input)}</div>
        <div>{longitudLetras(input)}</div>
        <div>{checkVowels(input)}</div>
      </div>
    </div>
  );
};
export default String;

//texto al revez (Buscar Array.prototype.reverse() en mdn web docs)
//Estudiar map, filter
