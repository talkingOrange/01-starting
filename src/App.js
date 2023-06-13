import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      title: "New Desk (Wooden)",
      amount: 204.09,
      date: new Date(2023, 6, 13),
    },
    {
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 6, 13),
    },
    {
      title: "Pizza",
      amount: 14.65,
      date: new Date(2023, 6, 13),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
