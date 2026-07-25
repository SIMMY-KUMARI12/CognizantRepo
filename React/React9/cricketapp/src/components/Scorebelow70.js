import React from 'react';

function Scorebelow70({ players }) {
  const players70 = [];
  players.map((item) => {
    if (item.score <= 70) {
      players70.push(item);
    }
    return null;
  });

  return (
    <ul>
      {players70.map((item, index) => {
        return (
          <div key={index}>
            <li>Mr. {item.name}<span> {item.score}</span></li>
          </div>
        );
      })}
    </ul>
  );
}

export default Scorebelow70;