import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Problem } from './problems';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

const AnswerOption = ({ option, isSubmitted, isCorrect, isSelected, handleClick }: { option: string, isSubmitted: boolean, isSelected: boolean, isCorrect: boolean, handleClick: () => void }) => {
  let optionStyle = '';

  if (isSubmitted) {
    if (isCorrect) {
      optionStyle = 'text-green-600 font-semibold';
    } else if (isSelected) {
      optionStyle = 'text-red-600 font-semibold';
    }
  } else if (isSelected) {
    optionStyle = 'font-semibold';
  }

  return (
    <div className="flex gap-2 items-start" onClick={handleClick}>
      <input className="mt-1.5" type="radio" checked={isSelected} />
      <span className={optionStyle}><MathJaxContext><MathJax>{option}</MathJax></MathJaxContext></span>
    </div>
  );
};

const ProblemSection = ({ problem, handleSubmitAnswer, submittedAnswer }: { problem: Problem, handleSubmitAnswer: (answer: string) => void, submittedAnswer: string | null }) => {
  const { enunciado: statement, alternativas: options, gabarito: answer, solucao: explanation } = problem;
  const [selectedOption, setSelectedOption] = useState<null | string>(null);
  const [displayExplanation, setDisplayExplanation] = useState(false);

  useEffect(() => {
    setSelectedOption(submittedAnswer);
    setDisplayExplanation(false);
  }, [problem.id]);

  const problemStatus = selectedOption === answer ?
    <>Resposta correta! <FontAwesomeIcon icon={faCircleCheck} /></> :
    <>Resposta incorreta... <FontAwesomeIcon icon={faCircleXmark} /></>;

  const isSubmitted = submittedAnswer != null;
  const isCorrect = isSubmitted && answer === selectedOption;

  return (
    <>
      <div className="section">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <p className="badge--primary">{problem.area_conhecimento}</p>
            {problem.area && <p className="badge--secondary">{problem.area}</p>}
            {problem.subarea && <p className="badge--secondary">{problem.subarea}</p>}
            <p className="badge--secondary">{`${problem.edicao === 'GERADA' ? '' : 'POSCOMP '}${problem.edicao}`}</p>
          </div>
          <p>
            {statement.split('\n').map((text, index, array) => text.length >= 0 ? (
              <MathJaxContext key={`${problem.id}-${index}`}>
                <MathJax>{text}{(index < array.length - 1) && <br />}</MathJax>
              </MathJaxContext>
            ) : null)}
          </p>
          <div className="flex flex-col gap-1">
            {options.map((option, index) => (
              <AnswerOption
                option={option}
                isCorrect={index === ['A', 'B', 'C', 'D', 'E'].findIndex(value => value === problem.gabarito)}
                isSubmitted={isSubmitted}
                isSelected={selectedOption === ['A', 'B', 'C', 'D', 'E'][index]}
                handleClick={() => setSelectedOption(['A', 'B', 'C', 'D', 'E'][index])}
              />
            ))}
          </div>

          <div className="flex gap-2 items-center">
            <button
              disabled={selectedOption == null}
              onClick={() => handleSubmitAnswer(selectedOption as string)}
              className={isSubmitted ? (isCorrect ? 'button--correct' : 'button--incorrect') : 'button--primary'}
            >
              {isSubmitted ? problemStatus : 'Submeter resposta'}
            </button>
            {isSubmitted && problem.solucao && (
              <button disabled={selectedOption === null} onClick={() => setDisplayExplanation(!displayExplanation)} className="button--primary">
                {displayExplanation ? 'Ocultar explicação' : 'Ver explicação'}
              </button>
            )}
          </div>
        </div>
      </div>
      {displayExplanation && (
        <div className="section explanation-section">
          {explanation.split('\n').map((text, index, array) => text.length > 0 ? (
            <MathJaxContext key={`${problem.id}-${index}`}>
              <MathJax>{text}{(index < array.length - 1) && <br />}</MathJax>
            </MathJaxContext>
          ) : null)}
        </div>
      )}
    </>
  );
};

export default ProblemSection;
