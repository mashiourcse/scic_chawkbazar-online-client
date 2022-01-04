import React, { useEffect, useState } from 'react';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import SideMenu from '../SideMenu/SideMenu';
import spinner from '../../images/spinner.gif'

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    const fetchProducts = () => {
        fetch('https://fast-headland-30459.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <div>
            <div className="rows">
                <div className="side-nav col-md-4">
                    <SideMenu></SideMenu>
                </div>
                <div className="col-md-8">
                    <h4 className='text-center m-4'>Manage product</h4>
                    {
                       products.length===0&&<div className='text-center'><img src={spinner} alt=""/></div>
                    }
                    {
                        products.map(pd => <ManageAllProducts key={pd._id} pd={pd}></ManageAllProducts>)

                    }
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;