
import React, { useState } from 'react';
import './index.css';

const studentProfiles = {
  Mia: 'Auditory Learner',
  Leo: 'Visual Learner',
  Sam: 'IEP Support',
  Ava: 'Kinesthetic Learner',
  Noah: 'Gifted Learner',
};

const App = () => {
  const [student, setStudent] = useState('Mia');
  const [output, setOutput] = useState('');

  const generateResponse = () => {
    const profile = studentProfiles[student];
    const responses: Record<string, string> = {
      'Visual Learner': `${student} receives diagrams and color-coded visuals for today's math lesson.`,
      'Auditory Learner': `${student} hears narrated walkthroughs and verbal prompts for comprehension.`,
      'IEP Support': `${student} receives simplified steps, extra time, and pause-check prompts.`,
      'Kinesthetic Learner': `${student} engages in hands-on virtual manipulatives for learning.`,
      'Gifted Learner': `${student} receives an accelerated path with challenge problems and projects.`,
    };
    setOutput(responses[profile]);
  };

  return (
    <div className='p-6 space-y-6 font-sans'>
      <img src='/logo.png' alt='Milo Logo' className='w-28 mb-4' />
      <h1 className='text-3xl font-bold text-gray-800'>Milo: Personalized AI Teaching Assistant</h1>
      <p className='text-gray-600'>Select a student to see Milo’s custom response for today’s lesson.</p>

      <select
        className='p-2 border rounded w-full'
        value={student}
        onChange={(e) => setStudent(e.target.value)}
      >
        {Object.keys(studentProfiles).map(name => (
          <option key={name} value={name}>{name} ({studentProfiles[name]})</option>
        ))}
      </select>

      <button onClick={generateResponse} className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>
        Generate Instruction
      </button>

      {output && <div className='mt-4 p-4 border rounded bg-gray-50 text-lg'>{output}</div>}
    </div>
  );
};

export default App;
