import ExpenseItem from "./EspenseItem";

function ExpenseList({ expenses, onDelete, onEdit }) {
  if (expenses.length === 0) {
    return <p className="empty-msg">No expenses recorded yet.</p>;
  }

  return (
    <div className="expense-list">
      {expenses.map((exp) => (
        <ExpenseItem key={exp.id} expense={exp} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
}

export default ExpenseList;