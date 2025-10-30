function Header() {
  const today = new Date().toLocaleDateString("en-NG", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="header">
      <h1>My Expense Tracker</h1>
      <p>{today}</p>
    </header>
  );
}

export default Header;