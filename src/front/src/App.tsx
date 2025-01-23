import { useState } from 'react';
import { problems } from './problems';
import NavigationSection from './NavigationSection';
import ProblemSection from './ProblemSection';
import './App.css';

const App = () => {
  const totalProblems = problems.length;

  const [activeProblem, setActiveProblem] = useState(0);
  const [submittedAnswers, setSubmittedAnswers] = useState(new Array(totalProblems));

  const getProblemStatus = (index: number) => {
    if (submittedAnswers[index] != null) {
      if (submittedAnswers[index] === problems[index].answer) {
        return 'CORRECT';
      } else {
        return 'INCORRECT';
      }
    }

    return 'PENDING';
  };

  const submitAnswer = (problemIndex: number, answerIndex: number) => {
    let newSubmittedAnswers = submittedAnswers;
    newSubmittedAnswers[problemIndex] = answerIndex;
    setSubmittedAnswers([...newSubmittedAnswers]);
  };

  return (
    <div className="bg-gray-600 min-h-[100vh] flex justify-center items-center p-4 sm:p-20">
      <div className="flex flex-col gap-4 w-[100%] md:w-[80%] lg:w-[60%] xl:w-[40%]">
        <NavigationSection
          totalProblems={totalProblems}
          submittedAnswers={submittedAnswers}
          getProblemStatus={getProblemStatus}
          activeProblem={activeProblem}
          setActiveProblem={setActiveProblem} />

        <ProblemSection
          problem={problems[activeProblem]}
          handleSubmitAnswer={(answer: number) => submitAnswer(activeProblem, answer)}
          submittedAnswer={submittedAnswers[activeProblem]}
        />
      </div>
    </div>
  );
};

export default App;
