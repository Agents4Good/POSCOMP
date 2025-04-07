import { useEffect, useState } from 'react';
import { Problem } from './problems';
import NavigationSection from './NavigationSection';
import ValidateProblemSection from './ValidateProblemSection';
import './App.css';

const App = () => {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/load");
      const jsonData = await response.json();
      setLoading(false);
      setProblems(jsonData);
    } catch (err) {
      const response = await fetch("http://localhost:5000/load");
      const jsonData = await response.json();
      setLoading(false);
      setProblems(jsonData);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const totalProblems = problems.length;

  const [activeProblem, setActiveProblem] = useState(0);

  return (problems.length === 0 || loading || problems[0] == null) ? <div /> : (
    <div className="bg-gray-600 min-h-[100vh] flex justify-center p-4">
      <div className="flex flex-col gap-4 w-[100%]">
        <ValidateProblemSection
          problem={problems[activeProblem]}
          updateData={loadData} />
      </div>
    </div>
  );
};

export default App;
