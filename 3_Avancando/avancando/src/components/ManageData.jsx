import { useState } from "react";

const ManageData = () => {
  const [number, setNumber] = useState(1); 
  /* 
  Crio duas variáveis e faço um destructuring
  number: Variável
  setNumber: Altera o estado da variável
  useState(Aqui você coloca o valor inicial da variável) 
  */

  return (
    <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(2)}>Aumentar</button>
    </div>
  )
};

export default ManageData;