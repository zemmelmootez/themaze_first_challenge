import React, { useState } from 'react';
import ColorSchemesExample from './components/Navbar';

const App = () => {
  const [painLevel, setPainLevel] = useState('');
  const [fatigueLevel, setFatigueLevel] = useState('');
  const [mood, setMood] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [submittedSymptoms, setSubmittedSymptoms] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const symptomsSummary = {
      painLevel,
      fatigueLevel,
      mood,
      additionalInfo
    };
    setSubmittedSymptoms(symptomsSummary);

  
    setPainLevel('');
    setFatigueLevel('');
    setMood('');
    setAdditionalInfo('');
  };

  return (
    <div>
    <ColorSchemesExample />
      <h2>Symptom Tracker</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Pain Level:
          <input
            type="text"
            value={painLevel}
            onChange={(e) => setPainLevel(e.target.value)}
          />
        </label>
        <br />
        <label>
          Fatigue Level:
          <input
            type="text"
            value={fatigueLevel}
            onChange={(e) => setFatigueLevel(e.target.value)}
          />
        </label>
        <br />
        <label>
          Mood:
          <input
            type="text"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          />
        </label>
        <br />
        <label>
          Additional Information:
          <textarea
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {submittedSymptoms && (
        <div>
          <h3>Submitted Symptoms:</h3>
          <p>Pain Level: {submittedSymptoms.painLevel}</p>
          <p>Fatigue Level: {submittedSymptoms.fatigueLevel}</p>
          <p>Mood: {submittedSymptoms.mood}</p>
          <p>Additional Information: {submittedSymptoms.additionalInfo}</p>
        </div>
      )}
    </div>
  );
};

export default App;
