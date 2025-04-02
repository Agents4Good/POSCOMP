import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { useState } from 'react';

const NavigationSection = ({ problem, totalProblems, getProblemStatus, activeProblem, setActiveProblem, updateData }: any) => {
  const problemIcon = (index: number) => {
    const problemStatus = getProblemStatus(index);

    switch (problemStatus) {
      case 'CORRECT': return <FontAwesomeIcon icon={faCircleCheck} className="text-green-600" />;
      case 'INCORRECT': return <FontAwesomeIcon icon={faCircleXmark} className="text-red-600" />;
      default: return <FontAwesomeIcon icon={faCircleDot} className="text-gray-600" />;
    }
  };

  const [validation, setValidation] = useState('');
  
  const onSubmit = async () => {
    const response = await fetch("http://localhost:5000/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ problem, status: validation }),
    });

    const result = await response.json();
    updateData();
  };

  return (
    <div className="flex flex-col gap-6 bg-white items-start rounded-2xl p-6">
      <div className="flex flex-row gap-4">
        <select defaultValue="" className="border border-black" value={validation} onChange={event => setValidation(event.target.value)}>
          <option value="" disabled>Escolha uma opção...</option>
          <option value="ok">OK!</option>
          <option value="small-fixes">Ajustes pequenos</option>
          <option value="big-fixes">Ajustes grandes</option>
        </select>
        <button onClick={onSubmit} className="button--primary" disabled={validation.length === 0}>Submeter!</button>
      </div>
      <span className="text-xs"><b>OK:</b> nenhum ajuste necessário; <b>Ajustes pequenos:</b> fórmulas simples, espaçamentos, destaques; <b>Ajustes grandes:</b> fórmulas complexas, tabelas, imagens.</span>

    </div>
  );
}

export default NavigationSection;
