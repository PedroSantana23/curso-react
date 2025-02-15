// CSS
import './App.css'

// React
import { useCallback, useState, useEffect } from 'react';

// Data
import { wordList } from './data/words';

// Componentes
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

const guessesQty = 3

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    // Lógica de escolher uma categoria aleatória
    const categories = Object.keys(words);                                                   // Pega todas as categorias e armazena
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]; // Pega uma categoria aleatória de "categories" que estão armazenadas

    console.log(category)

    // Lógica de escolher uma palavra aleatória da categoria escolhida
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    console.log(word);

    return {word, category};
  }, [words]);


  // Start the game
  const startGame = useCallback(() => {
    // clear all letters
    clearLetterStates();

    // pick word and category
    const { word, category } = pickWordAndCategory();

    // create an array of letters
    let wordLetters = word.split(""); // Separa as letras e coloca em um array

    wordLetters = wordLetters.map((l) => l.toLowerCase()); // Colocar todas as letras da palavra em minúscula

    console.log(word, category)
    console.log(wordLetters);

    // fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters)

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  // Verify letter
  const verifyLetter = (letter) => {
      const normalizedLetter = letter.toLowerCase();

      // Verifica se a letra já foi utilizada
      if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
        return;
      } 

      // push guessed letter or remove a guess
      if (letters.includes(normalizedLetter)) {
        setGuessedLetters((actualGuessedLetters) => [
          ...actualGuessedLetters,
          normalizedLetter,
        ]);
      } else {
        setWrongLetters((actualWrongLetters) => [
          ...actualWrongLetters,
          normalizedLetter,
        ]);
        setGuesses((actualGuesses => actualGuesses - 1));
      }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  useEffect(() => {

    if (guesses <= 0) {
      // Reset all states
      clearLetterStates();

      setGameStage(stages[2].name)
    };

  }, [guesses]);

  // check win conditions
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    // win condition
    if (guessedLetters.length === uniqueLetters.length) {
      // add score
      setScore((actualScore) => actualScore += 100)

      // restart new game
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  // Restart the game
  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);

    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game 
        verifyLetter={verifyLetter} 
        pickedWord={pickedWord} 
        pickedCategory={pickedCategory} 
        letters={letters} 
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
      />}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
};

export default App;
