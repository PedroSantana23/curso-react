import { useState } from "react";


const ConditionalRender = () => {
    const [x] = useState(false);

    const [ name, setName ] = useState("Jonas");

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        <h1>If ternário</h1>
        {name === "Pedro" ? (<p>Oi, Pedro</p>) : (<p>Qual o seu nome?</p>) }
        <button onClick={(() => setName("Pedro"))}>Clique aqui</button>
    </div>
  )
};

export default ConditionalRender;