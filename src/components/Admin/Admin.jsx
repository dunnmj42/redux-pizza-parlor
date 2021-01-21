import {useSelector} from 'react-redux'
import axios from 'axios';
import {useEffect, useState} from 'react';



function Admin(){

  const [pizzaOrders, setPizzaOrders] = useState([]);

  function fetchPizzaOrders() {
    axios.get('/api/order').then((response) => {
      setPizzaOrders(response);
    }).catch(error => {
      alert('error in GET orders & admin.jsx', error);
      console.error(error);
    })
  }

useEffect(() => {
  fetchPizzaOrders();
}, [])
  return(
    <>
    <header>
      <h1>Prime Pizza Orders</h1>
    </header>
    <section>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time Order Placed</th>
            <th>Type</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {pizzaOrders.map((order, index) => {
            <tr>
              <td>{order.name}</td>
              <td>{order.time}</td>
              <td>{order.type}</td>
              <td>{order.cost}</td>
            </tr>
          })}
        </tbody>
      </table>
    </section>
    </>
  )
}

export default Admin

