import React from "react";
import PlayersList from "./PlayersList";

export default function Players({ players, onSetAdmin, onDelete }) {
  return (
    <section className="py-10">
      <div className="text-center">
        <h2 className="font-bold text-3xl">Minecraft players</h2>
      </div>
      <div className="py-10">
        <PlayersList
          players={players}
          onSetAdmin={onSetAdmin}
          onDelete={onDelete}
        />
      </div>
    </section>
  );
}
