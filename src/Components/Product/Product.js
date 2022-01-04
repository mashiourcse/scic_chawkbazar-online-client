import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { _id, imageURL, name, price, quantity } = props.product;

    const history = useHistory();
    const handleBuyNow = () => {
        history.push(`/checkout/${_id}`)
    }
    return (
        <div className="product">
            <div style={{ textAlign:'center'}} className="mb-4">
                <img src={imageURL} alt="" />
            </div>
            <h3>{name}</h3>
            <h5>{quantity}</h5>
            <div className="d-flex justify-content-between mt-2">
                <h4><strong>৳</strong> {price}</h4>
                <button className="btn btn-danger" onClick={handleBuyNow}><FontAwesomeIcon icon={faShoppingCart} /> Buy Now</button>
            </div>
        </div>
    );
};

export default Product;