import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((data) => {
        return (
          <ExpenseItem
            title={data.title}
            date={data.date}
            amount={data.amount}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
