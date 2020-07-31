const Footer = ({ products }) => {
  const cashItem = products.map((product) => product.price);
  const quantityItem = products.map((product) => product.quantity);
  // const [subTotal,setSubToltal]=React.useState(0)
  // function changeSubTotal() {
  //   setSubToltal(product.price * product.quantity)
  // }
  let subTotal = 0;
  products.map((product) => {
    subTotal += product.price * product.quantity;
    return subTotal;
  });
  return (
    <section className="container">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" id="promo-code" /> <button type="button" />
      </div>
      <div className="summary">
        <ul>
          <li>
  Subtotal <span>${subTotal}</span>
          </li>
          <li>
            Tax <span>$5.00</span>
          </li>
          <li className="total">
            Total <span>${subTotal+5}</span>
          </li>
        </ul>
      </div>
      <div className="checkout">
        <button type="button">Check Out</button>
      </div>
    </section>
  );
};
