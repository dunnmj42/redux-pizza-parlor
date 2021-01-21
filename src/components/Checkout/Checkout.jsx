import {useSelector} from 'react-redux'

function Checkout() {

  const cart = useSelector(store => store.cartReducer);
  const customer = useSelector(store => store.customerReducer);

  return (
    <div>
      <h2>Step 3: Checkout</h2>
      <p>{customer.customer_name}</p>
      <p>{customer.street_address}</p>
      <p>{customer.city}, MN {customer.zip}</p>
      <p>{customer.type}</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((pizza, i) =>
            <tr key={i}>
              <td>{pizza.name}</td>
              <td>{pizza.price}</td>
            </tr>
          )}
        </tbody>
      </table>
      <h2>Total: {cart.total}</h2>
      <button>Checkout</button>
    </div>
  )
}

export default Checkout;