import { useEffect, useState } from 'react';
import { Problem } from './problems';
import { MathJax } from 'better-react-mathjax';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

const splitMarkdownWithMath = (text: string) => {
  const regex = /(\\\[[\s\S]+?\\\]|\\\(.+?\\\))/g;
  const parts: StatementPartType[] = [];
  let previousIndex = 0;
  let match = regex.exec(text);

  while (match !== null) {
    if (match.index > previousIndex) {
      parts.push({ type: 'markdown', content: text.slice(previousIndex, match.index) });
    }

    const content = match[0];
    const isBlock = content.startsWith('\\[');

    parts.push({ type: isBlock ? 'math-block' : 'math-inline', content });
    previousIndex = regex.lastIndex;

    match = regex.exec(text);
  }

  if (previousIndex < text.length) {
    parts.push({ type: 'markdown', content: text.slice(previousIndex) });
  }

  return parts;
};

const AnswerOption = ({ option }: { option: string }) => (
  <div className="flex gap-2 items-start">
    <input className="mt-1.5" type="radio" />
    <div className="">
      {splitMarkdownWithMath(option).map((part, index) => <StatementPart key={index} part={part} />)}
    </div>
  </div>
);

interface StatementPartType {
  type: 'markdown' | 'math-inline' | 'math-block';
  content: string;
}

const StatementPart = ({ part }: { part: StatementPartType }) => {
  if (part.type === 'markdown') {
    const startsWithSpace = part.content[0] === ' ';
    const endsWithSpace = part.content[part.content.length - 1] === ' ';

    return (
      <span style={{ display: 'inline' }}>
        {startsWithSpace && <>&nbsp;</>}
        <Markdown remarkPlugins={[remarkGfm]} components={{ p: 'span' }} >{part.content}</Markdown>
        {endsWithSpace && <>&nbsp;</>}
      </span>
    );
  }

  return (
    <MathJax inline={part.type === 'math-inline'} dynamic>
      {part.content}
    </MathJax>
  );
};

const ValidateProblemSection = ({ problem, updateData }: { problem: Problem, updateData: any }) => {
  const { enunciado: statement, alternativas: options } = problem;

  const [newStatement, setNewStatement] = useState(statement);
  const [newOptions, setNewOptions] = useState(options);

  const onSubmitFinal = async () => {
    const response = await fetch("http://localhost:5000/save-final", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ problem: { ...problem, enunciado: newStatement, alternativas: newOptions } }),
    });

    await response.json();
    updateData();
  };

  const onSubmitSkip = async () => {
    const response = await fetch("http://localhost:5000/save-skip", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ problem: { ...problem, enunciado: newStatement, alternativas: newOptions } }),
    });

    await response.json();
    updateData();
  };

  const wrapAlternativesInLatex = () => {
    setNewOptions(newOptions.map(value => `${value.slice(0, 3)}\\(${value.slice(3)}\\)`));
  };

  const statementParts = splitMarkdownWithMath(newStatement);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <div className="section">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <p className="badge--primary">{problem.id}</p>
          <p className="badge--primary">{problem.area_conhecimento}</p>
          {problem.area && <p className="badge--secondary">{problem.area}</p>}
          {problem.subarea && <p className="badge--secondary">{problem.subarea}</p>}
          <p className="badge--secondary">{`${problem.edicao === 'GERADA' ? '' : 'POSCOMP '}${problem.edicao}`}</p>
        </div>
        <div className="grid gap-8" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <div className="flex flex-col gap-2">
            <button onClick={onSubmitFinal} className="button--primary">Submeter edições</button>
            <button onClick={onSubmitSkip} className="button--primary">Pular questão</button>
            <p><b>Enunciado:</b></p>
            <textarea className="border-2 border-black" rows={4} value={newStatement} onChange={event => setNewStatement(event.target.value)} />
            <p><b>Alternativas:</b></p>
            <button onClick={() => wrapAlternativesInLatex()} className="button--primary">Adicionar LaTeX às opções</button>
            {newOptions.map((option, index) => (
              <textarea className="border-2 border-black w-[100%]" value={option} onChange={event => {
                let opts = [...newOptions];
                opts[index] = event.target.value;
                setNewOptions(opts);
              }} />
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p><b>Prévia:</b></p>
            <div>{statementParts.map((part, index) => <StatementPart key={index} part={part} />)}</div>
            <div className="flex flex-col gap-1">
              {newOptions.map((option, index) => <AnswerOption key={index} option={option} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidateProblemSection;
