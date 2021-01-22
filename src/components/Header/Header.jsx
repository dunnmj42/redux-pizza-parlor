import { useSelector } from "react-redux";

function Header() {
  const cart = useSelector((store) => store.cartReducer);

  return (
    <header>
      <h1>Prime Pizza</h1>
      <p>Total: {cart.total}</p>
    </header>
  );
}

export default Header;
