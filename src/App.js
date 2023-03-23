import "./App.scss";
import { MainContainer } from "./layouts";
import { PlayerForm, Players } from "./components";
import { useState } from "react";
function App() {
  const [players, setPlayers] = useState([
    {
      id: "2979a23e4ca24fe2b4a76325ee950f53",
      name: "Awais",
    },
  ]);

  const onAddNewPlayer = (player) => {
    let playerFound = players.find((item) => {
      if (item.id === player.id) {
        return true;
      }
      return false;
    });
    if (playerFound) {
      return false;
    } else {
      setPlayers([...players, player]);
    }
    console.log(players);
    return true;
  };

  const onSetAdmin = (id) => {
    let filterPlayers = players.map((player) => {
      if (player.id === id) {
        return {
          ...player,
          isAdmin: true,
        };
      }
      return player;
    });
    setPlayers(filterPlayers);
  };

  const onDelete = (id) => {
    let filterPlayers = players.filter((player) => player.id !== id);
    setPlayers(filterPlayers);
  };

  return (
    <MainContainer>
      <PlayerForm onAddNewPlayer={onAddNewPlayer} />
      <Players players={players} onSetAdmin={onSetAdmin} onDelete={onDelete} />
    </MainContainer>
  );
}

export default App;
