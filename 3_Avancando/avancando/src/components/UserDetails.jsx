import React from 'react'

const UserDetails = () => {

    const users = [
        { id:1, name: "Pedro", age: 21, job: "Estudante" },
        { id:2, name: "Isabella", age: 3, job: "Estudante" },
        { id:3, name: "Anny", age: 19, job: "Estágio" },
    ];

  return (
    <div>
        <h1>Desafio 4</h1>
        <ul>
        {users.map((user) => (
            <li key={user.id}>
                Nome: {user.name} - 
                Idade: {user.age} - 
                Profissão: {user.job} - 
                {user.age >= 18 ? <p>Pode tirar a carteira</p> : <p>Não pode tirar a carteira</p> } 
            </li>
        ))}
        </ul>
    </div>
  );
};

export default UserDetails;