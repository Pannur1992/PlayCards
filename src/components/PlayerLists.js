import React, { useEffect, useState } from 'react';
import PlayerCards from './PlayerCards';

function  PlayerLists(props){
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://localhost/cards/deck.php`;
    fetch(apiUrl, {
    method: "GET",

    headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
        }})
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);

  let players = props.totalPlayers;
//  console("error is here prabu");
  return <PlayerCards  players={players} isLoading={appState.loading} repos={appState.repos} />
    
};
export default PlayerLists;
