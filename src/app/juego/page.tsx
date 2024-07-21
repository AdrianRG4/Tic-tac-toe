"use client";

import { useState, useEffect } from "react";
const Juego = () => {
  const [counter, setCounter] = useState(0);
  const incrementar = () => {
    setCounter(counter + 1);
  };
  const personaje = "Mario";
  const [input, setInput] = useState("");
  const updateInput = (event) => {
    const value = event.target.value;
    setInput(value);
  };
  const [date, setDate] = useState("");
  const updateDate = () => {
    setDate(2024 - input);
  };
  const verificarSiEsPar = () => {
    if (input % 2 == 0) {
      console.log("Par");
    } else {
      console.log("Impar");
    }
  };
  const verificarSiEsMayor = () => {
    if (input >= 18) {
      console.log("Mayor de edad");
    } else {
      console.log("Menor de edad");
    }
  };
  const verificarEtapa = () => {
    if (input <= 5) {
      console.log("Bebe");
    } else if (5 < input && input <= 10) {
      console.log("Niño");
    } else if (10 < input && input <= 18) {
      console.log("Adolescente");
    } else if (18 < input && input <= 27) {
      console.log("Joven");
    } else if (27 < input && input <= 59) {
      console.log("Adulto");
    } else if (59 < input && input <= 100) {
      console.log("Anciano");
    }
  };
  const posibilidadesSuma = () => {};
  const multiplicadoNumero = () => {
    const numero = Number(input);
    const inputMultiplicado = (numero - 1) * numero * (numero + 1);
    console.log(inputMultiplicado);
  };
  return (
    <div>
      <span>{personaje}</span>
      <div>
        <button onClick={incrementar}>INCREMENTAR</button>
        <span>{counter}</span>
      </div>
      <div className="flex gap-5">
        <input onChange={updateInput} type="number" />
        <button onClick={updateDate}>CALCULAR NACIMIENTO</button>
        <div>EDAD AL CUADRADO:{input ** 2}</div>
        <button onClick={verificarSiEsPar}>EDAD PAR O IMPAR:</button>
        <div>FECHA DE NACIMIENTO:{date}</div>
        <button onClick={verificarSiEsMayor}>
          MAYOR DE EDAD O MENOR DE EDAD:
        </button>
        <button onClick={verificarEtapa} className="bg-red-200">
          EN QUE ETAPA ESTA:
        </button>
        <button onClick={posibilidadesSuma} className="bg-blue-200">
          POSIBILIDADES DE SUMA:
        </button>
        <button onClick={multiplicadoNumero} className="bg-green-200">
          MULTIPLICADO POR EL NUMERO ANTERIOR Y POSTERIOR:
        </button>
      </div>
    </div>
  );
};
export default Juego;

//Dar fecha y recibir edad (2024-input)
//90 = posibilidades de sumar para que de ese numero
//Dar numero y multiplicar ese numero por el numero anterior y el siguiente(string debe convertirse en numero)
//Dar edad si es un bebe, niño, adolescente, joven, adulto, anciano
