import {useDispatch, useSelector} from 'react-redux'

function Checkout() {

  const cart = useSelector(store => store.cartReducer);
  const customer = useSelector(store => store.customerReducer);

  const dispatch = useDispatch();

  const handleCheckout = (cart, customer) => {

    let customerToSend = {
      customer_name: customer.name,
      street_address: customer.address,
	    city: customer.city,
	    zip: customer.zip,
	    type: customer.type,
      total: cart.total,
      pizzas: cart.pizzas
    }

    axios.post('/api/order', customerToSend)
      .then(response => {
          const action = {
            type: "CLEAR",
            payload: [],
          };

          dispatch(action);
          history.push('/');
      }).catch(err => {
        console.error(err)
      })

  }

  return (
    <div>
      <header>
        <h1>Prime Pizza</h1>
      </header>
      <h2>Step 3: Checkout</h2>
      <p>{customer.name}</p>
      <p>{customer.address}</p>
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
      <button onClick={() => handleCheckout(cart, customer)}>Checkout</button>
    </div>
  )
}

export default Checkout;