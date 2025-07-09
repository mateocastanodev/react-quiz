import { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import { codeExercises } from '../code-exercises';
import Button from "@mui/material/Button";

const CodeLive = () => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [code, setCode] = useState(codeExercises[0].initialCode);
  const [output, setOutput] = useState<string>('');

  const currentExercise = codeExercises[currentExerciseIndex];

  useEffect(() => {
    setCode(currentExercise.initialCode);
    setOutput('');
  }, [currentExerciseIndex]);

  const runCode = () => {
    try {
      let consoleOutput = '';
      const originalConsoleLog = console.log;
      console.log = (...args: any[]) => {
        consoleOutput += args.map(String).join(' ') + '\n';
      };

      eval(code);

      console.log = originalConsoleLog;
      setOutput(consoleOutput);
    } catch (error: any) {
      setOutput(`Error: ${error.message}`);
    }
  };

  const handleNextExercise = () => {
    setCurrentExerciseIndex((prevIndex) => Math.min(prevIndex + 1, codeExercises.length - 1));
  };

  const handlePreviousExercise = () => {
    setCurrentExerciseIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="code-live-container">
      <h2>{currentExercise.title}</h2>
      <p>{currentExercise.description}</p>
      <div className="editor-wrapper">
        <Editor
          value={code}
          onValueChange={setCode}
          highlight={(code) => highlight(code, languages.js, 'javascript')}
          padding={10}
          style={{
            fontFamily: 'monospace',
            fontSize: 16,
            backgroundColor: '#272727',
            color: '#FFFFFF',
            minHeight: '200px',
            borderRadius: '5px',
          }}
        />
      </div>
      <div className="code-live-controls">
        <Button onClick={runCode} variant="contained">Run Code</Button>
        <Button onClick={handlePreviousExercise} disabled={currentExerciseIndex === 0} variant="contained">Previous</Button>
        <Button onClick={handleNextExercise} disabled={currentExerciseIndex === codeExercises.length - 1} variant="contained">Next</Button>
      </div>
      <div className="output-wrapper">
        <h3>Output:</h3>
        <pre className="code-output">{output}</pre>
      </div>
    </div>
  );
};

export default CodeLive;
