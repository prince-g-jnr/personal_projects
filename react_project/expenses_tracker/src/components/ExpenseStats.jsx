function ExpenseStats({ expenses }) {
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const count = expenses.length;
  const highest = expenses.length ? Math.max(...expenses.map((e) => e.amount)) : 0;

  const categoryTotals = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});

  return (
    <div className="stats">
      <div className="stats-item">
        <h3>Total</h3>
        <p>₦{total.toLocaleString()}</p>
      </div>
      <div className="stats-item">
        <h3>Expenses</h3>
        <p>{count}</p>
      </div>
      <div className="stats-item">
        <h3>Highest</h3>
        <p>₦{highest.toLocaleString()}</p>
      </div>
     
    </div>
  );
}

export default ExpenseStats;