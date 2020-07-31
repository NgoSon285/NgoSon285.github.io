const Header = ({ products }) => {
  const count = products.length;
  return (
    <header className="container">
      <h1>Shopping Cart</h1>
      <ul className="breadcrumb">
        <li>Home</li>
        <li>Shopping Cart</li>
      </ul>
      <span className="count">{count} items in the bag</span>
    </header>
  );
};
