import  { useState } from "react";
import Header from "./components/Header";
import AddExpenseForm from "./components/AddExpenseForm";
import CategoryFilter from "./components/CategoryFilter";
import ExpenseStats from "./components/ExpenseStats";
import ExpenseList from "./components/ExpenseList";
// import './ExpenseTracker.css';
import './App.css'



function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Lunch at Mama Put",
      amount: 1500, category:
      "Food",
      date: "2025-10-22"
    },
    {
      id: 2,
      description: "Bolt ride",
      amount: 1200, category:
      "Transport",
      date: "2025-10-21"
    },
    {
      id: 3,
      description: "Netflix subscription",
      amount: 4000,
      category: "Entertainment",
      date: "2025-10-20"
    },
  ]);

  const [filter, setFilter] = useState("All");

  function addExpense(newExpense) {
    setExpenses([...expenses, { ...newExpense, id: Date.now(), date: new Date().toISOString().split("T")[0] }]);
  }

  function deleteExpense(id) {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  }

  function editExpense(id, updatedExpense) {
    setExpenses(expenses.map((exp) => (exp.id === id ? { ...exp, ...updatedExpense } : exp)));
  }

  const filteredExpenses = filter === "All" ? expenses : expenses.filter((exp) => exp.category === filter);

  return (
    <div className="expense-app">
      <Header />
      <AddExpenseForm onAdd={addExpense} />
      <CategoryFilter current={filter} onChange={setFilter} />
      <ExpenseStats expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} onDelete={deleteExpense} onEdit={editExpense} />
    </div>
  );
}

export default App;
