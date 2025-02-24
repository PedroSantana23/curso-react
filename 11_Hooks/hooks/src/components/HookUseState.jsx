import { useState } from "react"

const HookUseState = () => {
    // 1 - useState
    let userName = "João"

    const [name, setName] = useState("Pedro")

    const changeName = () => {

        userName = "João Silva"

        setName("Pedro Henrique")

        console.log(userName);
        console.log(name);

    };

    // 2 - useState input
    const [age, setAge] = useState(18);

    const handleSubmit = (e) => {
        e.preventDefault()

        // envio a uma API
        console.log(age)
    };

  return (
    <div>
        <hr />
        <h2>UseState</h2>
        <p>Nome: {userName}</p>
        <p>Nome: {name}</p>
        <button onClick={changeName}>Mudar nomes</button>
        {/* 2 - useState e input */}
        <h2>Digite sua idade:</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
            <button>Mudar</button>
            <p>Você tem: {age} anos</p>
        </form>
        <hr />
    </div>
  );
};

export default HookUseState ;