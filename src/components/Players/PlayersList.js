import React from "react";
import PlayerCard from "./PlayerCard";

export default function PlayersList({ players, onSetAdmin, onDelete }) {
  return (
    <>
      {players.length > 0 ? (
        <div className="grid grid-cols-4 gap-4">
          {players.map((player, index) => {
            return (
              <PlayerCard
                key={index}
                player={player}
                onSetAdmin={onSetAdmin}
                onDelete={onDelete}
              />
            );
          })}
        </div>
      ) : (
        <p className="text-center">No players found!</p>
      )}
    </>
  );
}
