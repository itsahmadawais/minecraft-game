import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Input } from "./common";
import { getUser } from "../service";

export default function PlayerForm({ onAddNewPlayer }) {
  const [playerName, setPlayerName] = useState(null);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await getUser(playerName);
      console.log("Player Data:", response.data);
      let reply = onAddNewPlayer(response.data);
      if (reply) {
        toast.success("Player added!");
        setPlayerName("");
      } else {
        toast.error("Player already added!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Player not found!");
    }
  };

  return (
    <form
      className="bg-cgrey-50 rounded-[10px] px-10 py-10"
      onSubmit={onFormSubmit}
    >
      <div className="flex items-center gap-8">
        <div className="w-2/12 p-8">
          <img src="/images/minecraft-avatar.png" className="w-full" alt="" />
        </div>
        <div className="w-9/12">
          <h1 className="text-2xl font-bold mb-4">Add Your Minecraft Player</h1>
          <div className="flex gap-2">
            <Input
              type="text"
              className="w-4/12"
              placeholder="Enter player name..."
              onChange={(e) => setPlayerName(e.target.value)}
            />
            <Button type="submit" className="bg-cblue text-white">
              Add Player
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
