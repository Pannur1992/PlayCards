import React from 'react';

const PlayerCards = ({ isLoading, ...props }) => {
  const {players, repos} = props;
if(repos !== null && repos !== '' && typeof repos !== 'undefined') {
let playerItem = [];
  for (let i = 0; i < players; i++) {
    playerItem.push(
    <div key={i}>
      {
        <div>
          <p> Player {i+1}</p>
          <p>{repos.data[i].join(",")}</p>
        </div>
      }
    </div>)
  }
  if (!isLoading) return playerItem;
}

return (
  <p style={{ textAlign: 'center', fontSize: '30px' }}>
    Hold on, fetching data may take some time :)
  </p>
);
};
export default PlayerCards;
