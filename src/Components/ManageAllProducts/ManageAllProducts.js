import React from 'react';
import './ManageAllProducts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const ManageAllProducts = (props) => {
    const { _id, name, price, quantity } = props.pd;
    const deleteProduct = (e, _id) => {
        fetch(`https://fast-headland-30459.herokuapp.com/delete/` + _id, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    e.target.parentNode.parentNode.style.display = 'none';
                }
            })
    }
    return (

        <div className="manage-product mb-3">
            <p>{name}</p>
            <p>{quantity}</p>
            <p>{price}</p>
            <p>
                <button className="btn btn-danger" onClick={(e) => deleteProduct(e, _id)}><FontAwesomeIcon icon={faTrashAlt} /> Delete</button>
            </p>
        </div>
    );
};

export default ManageAllProducts;