const categories = ["All", "Food", "Transport", "Bills", "Entertainment", "Others"];

function CategoryFilter({ current, onChange }) {
  return (
    <div className="filter-buttons">
      {categories.map((cat) => (
        <button
          key={cat}
          className={current === cat ? "active" : ""}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;