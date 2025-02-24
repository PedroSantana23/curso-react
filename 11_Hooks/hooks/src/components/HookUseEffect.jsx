import { useEffect, useState } from "react";

const HookUseEffect = () => {
    // 1 - useEffect sem dependências
    useEffect(() => {
        console.log("Estou sendo executado!")
    })

    const [number, setNumber] = useState(1);

    // 2 - array de deps. vazio
    useEffect(() => {
        console.log("Serei executado apenas uma vez")
    }, []);

    const [anotherNumber, setAnotherNumber] = useState(1)

    // 3 - utilizando o array de dependências
    useEffect(() => {
        console.log("Serei executado sempre que anotherNumber for alterado")
    }, [anotherNumber])

    // 4 - cleanup do useEffect
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("Hello, World!");
        }, 2000);

    }, [anotherNumber]);

  return (
    <div>
        <h2>useEffect</h2>
        <p>Número: {number}</p>
        <button onClick={() => setNumber(number + 1)}>Aumentar</button>
        <p>Another Number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Aumentar</button>
        <hr />
    </div>
  )
}

export default HookUseEffect;