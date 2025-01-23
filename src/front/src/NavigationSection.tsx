import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const NavigationSection = ({ totalProblems, getProblemStatus, activeProblem, setActiveProblem }: any) => {
  const problemIcon = (index: number) => {
    const problemStatus = getProblemStatus(index);

    switch (problemStatus) {
      case 'CORRECT': return <FontAwesomeIcon icon={faCircleCheck} className="text-green-600" />;
      case 'INCORRECT': return <FontAwesomeIcon icon={faCircleXmark} className="text-red-600" />;
      default: return <FontAwesomeIcon icon={faCircleDot} className="text-gray-600" />;
    }
  };

  return (
    <div className="flex flex-row gap-2 bg-white items-center rounded-2xl p-6 items-center justify-start overflow-scroll lg:justify-center">
      {[...Array(totalProblems)].map((_, index) => (
        <button
          className={activeProblem === index ? 'problem-navigation--active' : 'problem-navigation'}
          onClick={() => setActiveProblem(index)}
        >
          <span>{index + 1}</span>
          {problemIcon(index)}
        </button>)
      )}
    </div>
  );
}

export default NavigationSection;
