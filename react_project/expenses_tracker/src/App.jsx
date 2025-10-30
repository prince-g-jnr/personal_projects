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
      amount: 1500,
      category: "Food",
      date: "2025-10-15"
    },
    {
      id: 2,
      description: "LAGRIDE",
      amount: 3000,
      category: "Transport",
      date: "2025-10-30"
    },
    {
      id: 3,
      description: "Electricity Bill",
      amount: 50000,
      category: "Bills",
      date: "2025-10-30"
    },
    {
      id: 4,
      description: "Movies and Cinema",
      amount: 9000,
      category: "Entertainment",
      date: "2025-10-30"
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
    <div className="container">
      <Header />
      <AddExpenseForm onAdd={addExpense} />
      <CategoryFilter current={filter} onChange={setFilter} />
      <ExpenseStats expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} onDelete={deleteExpense} onEdit={editExpense} />
    </div>
  );
}

export default App;
