import './App.css'
import Form from './components/Form';

function App() {

  return (
    <div>
      <h1>Forms</h1>
      <Form user={{ name: "Pedro", email: "pedro@gmail.com" }} />
    </div>
  );
};

export default App
