import { useState } from "react";
import "./LotteryGame.css";
import { getTicket, sum } from "./helper.js";

export default function LotteryGame() {
  let [ticketNo, setTicketNo] = useState([]);
  let isWinning = sum(ticketNo) === 15;
  let buyTicket = () => {
    setTicketNo(getTicket(3));
  };
  return (
    <>
      <h1>Lottery Game</h1>
      <h3>{isWinning && "'Congratulations,you Won!'"}</h3>
      {ticketNo.length ? (
        <p className="Ticket">Ticket no = {ticketNo}</p>
      ) : null}
      <button onClick={buyTicket}>Get New Ticket</button>
    </>
  );
}
