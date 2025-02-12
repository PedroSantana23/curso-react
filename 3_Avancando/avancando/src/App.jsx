
import "./App.css";

import Ceub from "./assets/ceub.jpg";
import CarDetails from "./components/CarDetails";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import { useState } from "react";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function App() {
  const name = "Pedro";

  const cars = [
    { id: 1, brand: "Ferrari", color: "Vermelha", newCar: true, km: 0 },
    { id: 2, brand: "Chevrolet", color: "Amarelo", newCar: true, km: 0 },
    { id: 3, brand: "VW", color: "Preto", newCar: false, km: 23000 },
    { id: 4, brand: "BMW", color: "Branca", newCar: true, km: 0 },
    { id: 5, brand: "Nissan", color: "Grafite", newCar: false, km: 10000 },
    { id: 6, brand: "VW", color: "Prata", newCar: true, km: 0 },
  ];

  function showMessage() {
    console.log("Evento do componente pai!")
  }

  const [message, setMessage ] = useState("");
  
  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/ceub.jpg" alt="Programing" />
      </div>
      <div>
        {/* Imagem em assets */}
        <img src={Ceub} alt="Foto de perfil" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />

      {/* props */}
      <ShowUserName name={name} />

      {/* destructuring */}
      <CarDetails brand="BMW" km={10000} color="White" />

      {/* reaproveitando */}
      <CarDetails brand="VW" km={15000} color="Azul" />

      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
        />
      ))}

      {/* Fragment */}
      <Fragment propFragment="teste" />

      {/* children */}
      <Container myValue="teste" >
        <p>Esse é um parágrafo</p>
      </Container>

      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />

      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      <UserDetails />
    </div>
  );
}

export default App;
