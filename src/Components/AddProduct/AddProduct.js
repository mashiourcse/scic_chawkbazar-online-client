import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import SideMenu from '../SideMenu/SideMenu';

const AddProduct = () => {
  const { register, handleSubmit, errors } = useForm();
  const [imageURL, setImageURL] = useState(null)
  const [successMessage, setSuccessMessage] = useState('');
  const onSubmit = data => {
    if(imageURL){
      const productData = {
        imageURL: imageURL,
        name: data.name,
        quantity: data.quantity,
        price: data.price
      };
      const url = `https://fast-headland-30459.herokuapp.com/addProducts`
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
      .then(res => {
        console.log(res);
        setSuccessMessage('Product added successfully');
      })
    }
    else{
      alert('please wait')
    }
    
  }


  const handleImageUpload = product => {
    const imageData = new FormData();
    imageData.set('key', 'db2f8d4473a0c0907db12bb86f312a01')
    imageData.append('image', product.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <div className="rows">
        <div className='side-nav col-md-4'>
          <SideMenu></SideMenu>
        </div>
        <div className='col-md-8'>
          <h3 className="pt-3">Add Product</h3>
          <form onSubmit={handleSubmit(onSubmit)} style={{ margin: '0 auto' }}>
            <input className="form-control" name="name" placeholder="Product Name" ref={register} />
            <br />
            <input className="form-control" name="quantity" placeholder="kg/gm" ref={register} />
            <br />
            <input className="form-control" name="price" placeholder="price" ref={register} />
            <br />
            <input className="form-control" name="exampleRequired" type='file' onChange={handleImageUpload} />
            <br />
            {errors.exampleRequired && <span>This field is required</span>}

            <input className="btn btn-primary" type="submit" value="Add Product" />
          </form>
          {
            successMessage && <h4 className="text-center text-success">{successMessage}</h4>
          }
        </div>
      </div>
    </div>
  );
};

export default AddProduct;