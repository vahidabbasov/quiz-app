import { useState } from 'react';
import './index.scss';

const questions = [
  {
    title: 'React nədir?',
    variants: ['Kitabxana', 'Framework', 'Tətbiq'],
    correct: 0,
  },
  {
    title: 'Hansı React hook-u deyil?',
    variants: ['useMemo', 'useText', 'useContext'],
    correct: 1,
  },
  {
    title: 'React app-ini işə salmaq üçün hansı command istifadə olunur?',
    variants: [
      'npm serve',
      'npm run dev',
      'npm start',
    ],
    correct: 2,
  },
  {
    title: 'React app-inin default olaraq ayağa qalxdığı server?',
    variants: [
      '3500',
      '8080',
      '3000',
    ],
    correct: 2,
  },
  {
    title: 'Hansı inline style yazılış doğrudur?',
    variants: [
      "style={{fontSize:'12px',color:'red'}}",
      "style={{font-size:12, color:'red'}}",
      "style={fontSize:'12px',color:'red'}",
    ],
    correct: 0,
  },
  {
    title: 'React js ilk dəfə nə vaxt istifadəyə verilib?',
    variants: [
      '29 may 2013',
      '29 aprel 2014',
      '29 may 2012',
    ],
    correct: 0,
  },
  {
    title: 'React js kim tərəfindən yaradılıb?',
    variants: [
      'Lake Bennett',
      'Lester Daniels',
      'Jordan Walke',
    ],
    correct: 2,
  },
  {
    title: 'React.js hansı şirkətə məxsusdur?',
    variants: [
      'Google',
      'Facebook',
      'Apple',
    ],
    correct: 1,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2> {questions.length} sualdan {correct} suala düzgün cavab verdiniz </h2>
      <a href='/'>
      <button>Yenidən cəhd et</button>
      </a>
    </div>
  );
}

function Game({question, onClickVariant, step}) {
  const percentage = Math.round(step / questions.length*100)
  console.log(percentage);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
       { question.variants.map((text, index)=>(
        <li onClick={()=>onClickVariant(index)} key={index}>{text}</li>
       ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0)
  const question = questions[step]
  const [correct, setCorrect] = useState(0)



  const onClickVariant = (index) =>{
    setStep(step+1)

    if(index ===question.correct){
      setCorrect(correct+1)
    }
  }
  return (
    <div className="App">
     {
      step !== questions.length ?  <Game step={step} question={question} onClickVariant={onClickVariant} /> : <Result correct={correct} />
     }
      
    </div>
  );
}

export default App;
