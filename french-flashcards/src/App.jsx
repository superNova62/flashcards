import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Controlled from './components/Controlled';

const App = () => {
  const cards = [
    {question: 'Bonjour', answer: 'Hello'},
    {question:'Pomme', answer: 'Apple'},
    {question: 'Travail',answer: 'Work'},
    {question: 'Tres bien', answer: 'Very good'},
    {question: 'Merci', answer: 'Thank you'},
    {question: 'Au revoir', answer: 'Goodbye'},
    {question: 'Oui', answer: 'Yes'},
    {question: 'Amour', answer: 'Love'},
    {question: "S'il vous plait", answer: 'Please'},
    {question: 'Fromage', answer: 'Cheese'},
  ];

  // Track the current card index (starts at 0)
  const [choice, setChoice] = useState(0);
  
  // Track validation status ("correct", "wrong", or "")
  const [validationStatus, setValidationStatus] = useState("");

  // Boundary condition checks
  const isFirstCard = choice === 0;
  const isLastCard = choice === cards.length - 1;

  // Navigate forward without wrapping around
  const nextCard = () => {
    if (!isLastCard) {
      setChoice((prevChoice) => prevChoice + 1);
      setValidationStatus(""); 
    }
  }

  // Navigate backward without wrapping around
  const prevCard = () => {
    if (!isFirstCard) {
      setChoice((prevChoice) => prevChoice - 1);
      setValidationStatus(""); 
    }
  }
  
  const currentCard = cards[choice];

  // Validate user submission against the answer key
  const checkInput = (userInput) => {
    if (userInput.trim().toLowerCase() === currentCard.answer.toLowerCase()) {
      setValidationStatus("correct");
    } else {
      setValidationStatus("wrong");
    }
  }

  return (
    <div className="App">
      <h1>Pardon My French!</h1>
      <h2>Practice how much you know your French!</h2>
      <h3>Card {choice + 1} of {cards.length}</h3>
      
      <div className="card-style">
        <Card question={currentCard.question} answer={currentCard.answer}/>
      </div>
      
      <div className="navigation-buttons">
        <button onClick={prevCard} disabled={isFirstCard}>&larr;</button>
        <button onClick={nextCard} disabled={isLastCard}>&rarr;</button>
      </div>
      
      <Controlled 
        input={checkInput} 
        validation={validationStatus} 
        setValidation={setValidationStatus} 
        currentQuestion={currentCard.question}
      />
    </div>
  )
}

export default App;
