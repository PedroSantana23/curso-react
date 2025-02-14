import { useState } from "react";
import styles from "./Form.module.css";

const Form = ({ user }) => {
  {
    /* 3 - Gerenciamento de dados */
  }
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  console.log(name);
  console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, bio, role);
  
    // 7 - Limpar form 
    setName("");
    setEmail("");
  };

  return (
    <div>
      {/* 5 - Envio de form */}
      {/* 1 - Criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="text"
            placeholder="Digite seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 2 - Label envolvendo input */}
        <label>
          <span>E-mail</span>
          {/* 4 - Simplificação de manipulação de State */}
          <input
            type="email"
            className="email"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* 8 - textarea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* 9 - Select */}
        <label>
          <span>Select</span>
          <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="student">Estudante</option>
            <option value="clt">CLT</option>
            <option value="pj">PJ</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Form;
