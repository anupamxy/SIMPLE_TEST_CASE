import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/Socketprovider";

const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");
  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      console.log("Form submitted"); // Check if this logs when the button is clicked
      if (socket) {
        console.log("Socket exists, emitting room:join"); // Check if this logs when the button is clicked
        socket.emit("room:join", { email, room });
      } else {
        console.log("Socket does not exist"); // Check if this logs when the button is clicked
      }
    },
    [email, room, socket]
  );

  useEffect(() => {
    const handleJoinRoom = (data) => {
      const { email, room } = data;
      navigate(`/room/${room}`);
    };

    if (socket) {
      socket.on("room:join", handleJoinRoom);
      return () => {
        socket.off("room:join", handleJoinRoom);
      };
    }
  }, [socket, navigate]);

  return (
    <div>
      <h1>Lobby</h1>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="email">Email ID</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="room">Room Number</label>
        <input
          type="text"
          id="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <br />
        <button type="submit">Join</button>
      </form>
    </div>
  );
};

export default LobbyScreen;
