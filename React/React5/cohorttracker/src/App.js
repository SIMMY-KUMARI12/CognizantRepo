import React from 'react';
import CohortDetails from './CohortDetails';

const cohorts = [
  { name: 'INTADMDF10 -.NET FSD', status: 'Scheduled', startDate: '22-Feb-2022', coach: 'Aathma', trainer: 'Jojo Jose' },
  { name: 'ADM21JF014 -Java FSD', status: 'Ongoing', startDate: '10-Sep-2021', coach: 'Apoorv', trainer: 'Elisa Smith' },
  { name: 'CDBJF21025 -Java FSD', status: 'Ongoing', startDate: '24-Dec-2021', coach: 'Aathma', trainer: 'John Doe' },
];

function App() {
  return (
    <div>
      <h1>Cohorts Details</h1>
      {cohorts.map((c, i) => (
        <CohortDetails key={i} cohort={c} />
      ))}
    </div>
  );
}

export default App;