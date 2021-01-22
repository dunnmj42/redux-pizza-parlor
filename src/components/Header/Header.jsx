import { useSelector } from "react-redux";

function Header() {
  const total = useSelector((store) => store.totalReducer);

  return (
    <header>
      <h1>Prime Pizza</h1>
      <p>Total: {total}</p>
    </header>
  );
}

export default Header;
