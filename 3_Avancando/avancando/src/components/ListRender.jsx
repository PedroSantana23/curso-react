import { useState } from 'react'

const ListRender = () => {

    const [users, setUsers] = useState([
        { id:1, name: "Pedro Henrique", age: 21 },
        { id:2, name: "Pedro Henrique2", age: 22 },
        { id:3, name: "Pedro Henrique3", age: 20 },
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        });
    };

  return (
    <div>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender;