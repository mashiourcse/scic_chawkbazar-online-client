import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css';
import spinner from '../../images/spinner.gif'
import CarouselSection from './Carousel/Carousel';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('https://fast-headland-30459.herokuapp.com/products')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
        <div>
            <CarouselSection></CarouselSection>
        </div>
        <div className='product-container'>
            
            {
                products.length===0&&<img src={spinner} alt=""/>
            }
            {
                products.map(product=><Product key={product._id} product={product}></Product>)
            }
           
        </div>
        </div>
    );
};

export default Home;