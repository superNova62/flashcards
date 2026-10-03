import { useState } from 'react';
import './App.css';
import Card from './components/Card';


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

  const [choice, setChoice] = useState( () => Math.floor(Math.random() * cards.length) );

  const randomChoice = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * cards.length);
    } while(randomIndex === choice && cards.length > 1);

    setChoice(randomIndex);
  }

  const currentCard = cards[choice];

  return (
    <div className="App">
        <h1>Pardon My French!</h1>
        <h2>Practice how much you know your French!</h2>
        <h3>Number of Cards: 10</h3>
      <div className="card-style">
        <Card question={currentCard.question} answer={currentCard.answer}/>
      </div>
      <button onClick={randomChoice}>&rarr;</button>
    </div>
  )
}

export default App
