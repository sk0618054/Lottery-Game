import "./App.css";
import LotteryGame from "./LotteryGame";
import Ticket from "./Ticket";
import Lottery from "./Lottery";
import { sum } from "./helper";
function App() {
  let winConditon = (ticket) => {
    return sum(ticket) === 15;
  };
  return (
    <>
      <Lottery n={3} winConditon={winConditon} />
    </>
  );
}

export default App;
