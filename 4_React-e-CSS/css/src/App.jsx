import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {
  const n = 15;

  const redTitle = false;

  return (
    <div className='App'>
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      {/* Inline CSS */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Elemento estilizado de forma inline
      </p>
      {/* Inline CSS dinâmico */}
      <h2 style={n < 10 ? ({color: "blue"}) : ({color: "black"}) }>
        CSS Dinâmico
      </h2>
      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title" }>Título de classe dinâmica</h2>
      {/* CSS Modules */}
      <Title />
    </div>
  )
}

export default App
