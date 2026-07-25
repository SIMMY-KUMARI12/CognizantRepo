import React from 'react';

function ListofPlayers({ players }) {
  return (
    <ul>
      {players.map((item, index) => {
        return (
          <div key={index}>
            <li>Mr. {item.name}<span> {item.score}</span></li>
          </div>
        );
      })}
    </ul>
  );
}

export default ListofPlayers;