import React, { useContext, useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../../App';
import spinner from '../../images/spinner.gif'
import { getLoggedIn } from '../../utilities/fakedb';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import { shortListProduct, sortation} from '../../utilities/fakedb';


const Orders = () => {
    const [orders, setOrders] = useState([])
    const [successMessage, setSuccessMessage] = useState('');
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let localStorageLog = getLoggedIn();
    useEffect(()=>{
        
        console.log(localStorageLog);
        
        if(JSON.stringify(localStorageLog) !== '{}'){
        setLoggedInUser(localStorageLog);
      }
     
    
      }, loggedInUser);

    useEffect(() => {
        fetch(`https://fast-headland-30459.herokuapp.com/orders?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                 const sortedData = sortation(loggedInUser.email,data);
                 console.log(sortedData);
                setOrders(sortedData);
            })
    }, [loggedInUser.email])
    const handleProceed = () => {
        setSuccessMessage('Thank you for ordering')
    }

    const deleteOrder = (e, _id, email) => {

        if (window.confirm("Are you sure you want to remove order?")) {
            shortListProduct( _id, email);
       window.location.reload();
          } 
       

    }

    return (
        <div>
            {
                successMessage && <h2 className='text-center mt-5' style={{ color: 'green' }}>{successMessage}</h2>
            }
            <div className="m-3">
                
                {
                    orders.length === 0 && <div className='text-center'><img src={spinner} alt="" /></div>
                }
                {
                    orders.map(order =>
                        <ListGroup.Item key={order._id}>Product Name : {order.name}
                            <ListGroup.Item>Weight : {order.quantity}</ListGroup.Item>
                            <ListGroup.Item>Price : {order.price}</ListGroup.Item>
                            <ListGroup.Item>Date : {new Date(order.checkIn).toDateString('dd/MM/yyyy')}</ListGroup.Item>
                            <ListGroup.Item>Your Email : {order.email}</ListGroup.Item>
                        
                            <ListGroup.Item>
                            <ToggleSwitch></ToggleSwitch>
                            </ListGroup.Item>
                            <ListGroup.Item>
                            <button className="btn btn-danger" onClick={(e) => deleteOrder(e, order._id, order.email)}>Delete</button>
                            
                            </ListGroup.Item>
                            
                        </ListGroup.Item>
                    )
                }
                <button onClick={handleProceed} style={{ float: 'right' }} className="mt-3 btn btn-success">Proceed Checkout</button>
            </div>

        </div>
    );
};

export default Orders;