const categories = ["All", "Food", "Transport", "Bills", "Entertainment", "Others"];

function CategoryFilter({ current, onChange }) {
  return (
    <div className="filter">
      {categories.map((cart) => (
        <button
          key={cart}
          className={current === cart ? "active" : ""}
          onClick={() => onChange(cart)}
        >
          {cart}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;