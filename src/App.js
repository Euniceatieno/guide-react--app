import "./App.css";
import Expenses from "./components/Expenses";

// JSX -html code inside javascript

function App(props) {
  const expenses = [
    {
      title: "Food",
      date: new Date(2022, 10, 10),
      amount: 20000,
    },
    {
      title: "Fun",
      date: new Date(2022, 11, 10),
      amount: 10000,
    },
    {
      title: "School",
      date: new Date(2022, 12, 10),
      amount: 200000,
    },
    {
      title: "Shoes",
      date: new Date(2022, 10, 10),
      amount: 90000,
    },
    {
      title: "Clothes",
      date: new Date(2022, 11, 10),
      amount: 50000,
    },
    {
      title: "Family",
      date: new Date(2022, 12, 10),
      amount: 300000,
    },
  ];

  return (
    <div>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
