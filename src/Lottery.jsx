import { useState } from "react";
import "./LotteryGame.css";
import { getTicket, sum } from "./helper.js";
import Ticket from "./Ticket.jsx";
import Button from "./Button.jsx";
export default function LotteryGame({ n = 3, winConditon }) {
  let [ticket, setTicket] = useState([]);
  let isWinning = winConditon(ticket);
  let buyTicket = () => {
    setTicket(getTicket(n));
  };
  return (
    <>
      <h1>Lottery Game</h1>
      <Ticket ticket={ticket} />
      <Button action={buyTicket} />
      <h3>{isWinning && "'Congratulations,you Won!'"}</h3>
    </>
  );
}
