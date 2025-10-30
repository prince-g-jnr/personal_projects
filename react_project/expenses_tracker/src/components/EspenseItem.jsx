import { useState } from "react";

function ExpenseItem({ expense, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [desc, setDesc] = useState(expense.description);
  const [amt, setAmt] = useState(expense.amount);

  function handleSave() {
    if (desc.trim() === "" || amt <= 0) return;
    onEdit(expense.id, { description: desc, amount: parseFloat(amt) });
    setIsEditing(false);
  }

  const categoryColors = {
    Food: "#284cecff",
    Transport: "#10da17ff",
    Bills: "#da9d2dff",
    Entertainment: "#30c5caff",
    Others: "#ce3939ff",
  };

  return (
    <div className="expense-item" style={{ backgroundColor: categoryColors[expense.category] }}>
      {isEditing ? (
        <>
          <input value={desc} onChange={(e) => setDesc(e.target.value)} />
          <input type="number" value={amt} onChange={(e) => setAmt(e.target.value)} />
          <button onClick={handleSave}>save</button>
        </>
      ) : (
        <>
          <div className="expense-info" onClick={() => setIsEditing(true)}>
            <h4>{expense.description}</h4>
            <p>
              ₦{expense.amount.toLocaleString()} • {expense.category} •{" "}
              <small>{expense.date}</small>
            </p>
          </div>
          <button className="delete-btn" onClick={() => onDelete(expense.id)}>
            Trash
          </button>
        </>
      )}
    </div>
  );
}

export default ExpenseItem;