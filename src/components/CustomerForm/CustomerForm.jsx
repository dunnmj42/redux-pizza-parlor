
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';


function CustomerForm() {
  const[name, setName] = useState('');
  const[address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [type, setType] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    console.log('adding customer info:' ,  {name, address, city, zip, type}) ;

    //dispatch to customer reducer
    dispatch({
      type: 'SET_CUSTOMER_INFO',
      payload: {name, address, city, zip, type}
    })
    //send to checkout page
    history.push('/checkout');
  }



  return(
    <>
    <div>
      <h2>Step 2: Customer Information</h2>
    </div>
    <section>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="Street Address" value={address} onChange={(e) => setAddress(e.target.value)}/>
        <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)}/>
        <input type="text" placeholder="Zip" value={zip} onChange={(e) => setZip(e.target.value)}/>
        {/* onClick to setType with checkbox value? */}
        <input type="checkbox" id="pickup" name="pickup" value={type} onChange={(e) => setType(e.target.value)}/>
        <label htmlFor="pickup">Pickup</label>
        <input type="checkbox" name="delivery" id="delivery" value={type}onChange={(e) => setType(e.target.value)}/>
        <label htmlFor="delivery">Delivery</label>

        <button type='submit'>NEXT</button>

      </form>

    </section>

    </>
  )
}

export default CustomerForm;