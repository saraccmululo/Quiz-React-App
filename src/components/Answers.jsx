import { useRef } from "react";

const Answers = ({answers, answerState, selectedAnswer, onSelect}) => {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(()=>Math.random()-0.5);
  }
  
  return (
    <ul id="answers">
      {shuffledAnswers.current.map(answer => {
        const isSelected = selectedAnswer=== answer;//userAnswers[userAnswers.length - 1] is the last answer the user selected.For each possible answer, we are checking:Is this button's option equal to the user's answer?

        let cssClass = '';
        if(answerState === 'answered' && isSelected) {
          cssClass = 'selected';
        }

        if((answerState === 'correct' || answerState === 'wrong') && isSelected) {
          cssClass = answerState;
        }

        return <li key={answer} className="answer">
          <button 
            onClick={() => onSelect(answer)} 
            className={cssClass}
            disabled={answerState !==''}
          >
            {answer}
          </button>
        </li>;
      }
      )}
    </ul>
  )
}

export default Answers