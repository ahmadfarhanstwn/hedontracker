import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Paper } from "@material-ui/core";
import useStyles from "./useStyles";
import TotalAmount from "./components/TotalAmount";
import SubmitIncome from "./components/SubmitIncome";
import IncomeList from "./components/IncomeList";
import SubmitExpense from "./components/SubmitExpense";
import ExpenseList from "./components/ExpenseList";

const localIncomeData = () => {
  return JSON.parse(localStorage.getItem("income")) || [];
};

const localExpenseData = () => {
  return JSON.parse(localStorage.getItem("expense")) || [];
};

const App = () => {
  const classes = useStyles();
  const [incomeList, setIncomeList] = useState(localIncomeData);
  const [expenseList, setExpenseList] = useState(localExpenseData);
  const [incomeDesc, setIncomeDesc] = useState("");
  const [incomeValue, setIncomeValue] = useState(0);
  const [expenseDesc, setExpenseDesc] = useState("");
  const [expenseValue, setExpenseValue] = useState(0);

  React.useEffect(() => {
    localStorage.setItem("income", JSON.stringify(incomeList));
  }, [incomeList]);

  React.useEffect(() => {
    localStorage.setItem("expense", JSON.stringify(expenseList));
  }, [expenseList]);

  const reducer = (accumulator, item) => {
    return (accumulator = accumulator + parseInt(item.value));
  };

  const totalIncome = incomeList.reduce(reducer, 0);

  const totalExpense = expenseList.reduce(reducer, 0);

  const dateTime = () => {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.toLocaleString("id", { month: "long" });
    let year = currentDate.getFullYear();
    let date = `${day} ${month} ${year}`;
    return date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newIncomeList = {
      id: uuidv4(),
      date: dateTime(),
      name: incomeDesc,
      value: incomeValue,
    };
    const newExpenseList = {
      id: uuidv4(),
      date: dateTime(),
      name: expenseDesc,
      value: expenseValue,
    };
    if (incomeDesc && incomeValue) {
      setIncomeList([...incomeList, newIncomeList]);
      setIncomeDesc("");
      setIncomeValue(0);
    } else if (expenseDesc && expenseValue) {
      setExpenseList([...expenseList, newExpenseList]);
      setExpenseDesc("");
      setExpenseValue(0);
    }
  };

  const deleteIncome = (id) => {
    setIncomeList(incomeList.filter((incomeId) => incomeId.id !== id));
  };

  const deleteExpense = (id) => {
    setExpenseList(expenseList.filter((expenseId) => expenseId.id !== id));
  };

  return (
    <Paper variant="outlined" className={classes.root}>
      <h1 className={classes.title}>HedonTracker</h1>
      <TotalAmount totalIncome={totalIncome} totalExpense={totalExpense} />
      <SubmitIncome
        handleSubmit={handleSubmit}
        incomeDesc={incomeDesc}
        incomeValue={incomeValue}
        setIncomeDesc={setIncomeDesc}
        setIncomeValue={setIncomeValue}
      />
      <IncomeList incomeList={incomeList} deleteIncome={deleteIncome} />
      <SubmitExpense
        expenseDesc={expenseDesc}
        expenseValue={expenseValue}
        handleSubmit={handleSubmit}
        setExpenseDesc={setExpenseDesc}
        setExpenseValue={setExpenseValue}
      />
      <ExpenseList expenseList={expenseList} deleteExpense={deleteExpense} />
    </Paper>
  );
};

export default App;
