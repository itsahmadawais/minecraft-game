import React from "react";
import { FaTrash, FaRegHandPointer } from "react-icons/fa";
import { Button } from "../common";

export default function PlayerCard({ player, onSetAdmin, onDelete }) {
  return (
    <div className="shadow px-4 py-2 rounded-[10px]">
      <div className="flex justify-between">
        {player?.isAdmin ? (
          <small className="bg-black text-xs text-white text-xl px-4 py-2 rounded-[10px]">
            Admin
          </small>
        ) : (
          <span></span>
        )}
        <Button onClick={() => onDelete(player.id)}>
          <FaTrash className="text-cred" />
        </Button>
      </div>
      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
        <img src="http://via.placeholder.com/150" alt="" />
      </div>
      <h3 className="text-lg font-bold text-center my-6">{player.name}</h3>
      {!player?.isAdmin && (
        <div className="w-fit ml-auto">
          <Button
            className="bg-cgreen text-white text-xs"
            onClick={() => onSetAdmin(player.id)}
          >
            <div className="flex items-center gap-2">
              <FaRegHandPointer className="text-white" />
              <span>Set to admin</span>
            </div>
          </Button>
        </div>
      )}
    </div>
  );
}
