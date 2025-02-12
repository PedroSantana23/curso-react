// Components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';

// CSS
import './App.css'




function App() {
  return (
    <div className="App">
      {/* Algum comentário */}
      <MyComponent />
      <TemplateExpressions />
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <Events />
    </div>
  );
};

export default App;
