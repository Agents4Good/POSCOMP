import { useEffect, useState } from 'react';
import { Problem } from './problems';
import NavigationSection from './NavigationSection';
import ProblemSection from './ProblemSection';
import './App.css';

const App = () => {
  const [problems, setProblems] = useState<Problem[]>([]);

  const loadData = async () => {
    const response = await fetch("http://localhost:5000/load");
    const jsonData = await response.json();
    setProblems(jsonData);
  };

  useEffect(() => {
    loadData();
  }, []);

  const totalProblems = problems.length;

  const [activeProblem, setActiveProblem] = useState(0);
  const [submittedAnswers, setSubmittedAnswers] = useState(new Array(totalProblems));

  const getProblemStatus = (index: number) => {
    if (submittedAnswers[index] != null) {
      if (submittedAnswers[index] === problems[index].gabarito) {
        return 'CORRECT';
      } else {
        return 'INCORRECT';
      }
    }

    return 'PENDING';
  };

  const submitAnswer = (problemIndex: number, answerIndex: string) => {
    let newSubmittedAnswers = submittedAnswers;
    newSubmittedAnswers[problemIndex] = answerIndex;
    setSubmittedAnswers([...newSubmittedAnswers]);
  };

  return problems.length === 0 ? <div /> : (
    <div className="bg-gray-600 min-h-[100vh] flex justify-center p-4 sm:p-20">
      <div className="flex flex-col gap-4 w-[100%] md:w-[80%] lg:w-[60%] xl:w-[80%]">
        <NavigationSection
          problem={problems[activeProblem]}
          totalProblems={totalProblems}
          submittedAnswers={submittedAnswers}
          getProblemStatus={getProblemStatus}
          activeProblem={activeProblem}
          setActiveProblem={setActiveProblem}
          updateData={loadData} />

        <ProblemSection
          problem={problems[activeProblem]}
          handleSubmitAnswer={(answer: string) => submitAnswer(activeProblem, answer)}
          submittedAnswer={submittedAnswers[activeProblem]}
        />
      </div>
    </div>
  );
};

export default App;
