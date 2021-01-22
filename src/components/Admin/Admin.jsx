import {useSelector} from 'react-redux'
import axios from 'axios';
import {useEffect, useState} from 'react';



function Admin(){

  const [pizzaOrders, setPizzaOrders] = useState([]);

  function fetchPizzaOrders() {
    axios.get("/api/order").then((response) => {
      console.log(response.data)
      setPizzaOrders(response.data);
    }).catch(error => {
      alert('error in GET orders & admin.jsx', error);
      console.error(error);
    })
  }

useEffect(() => {
  fetchPizzaOrders();
}, [])

console.log('pizzaOrders is now: ', pizzaOrders);
  return(
    <>
    <header>
      <h1>Prime Pizza Orders</h1>
    </header>

    <div>
      <table className="table align-middle table-striped">
        <thead>
          <tr>
            <th className="col-auto">Name</th>
            <th className="col-4">Time Order Placed</th>
            <th className="col-auto">Type</th>
            <th className="col-auto">Cost</th>
          </tr>
        </thead>
        <tbody>
          {pizzaOrders.map((order, index) => {
            return(

            <tr key={index}>
              <td>{order.customer_name}</td>
              <td>{order.time}</td>
              <td>{order.type}</td>
              <td>{order.total}</td>
            </tr>
              )
          })}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Admin

