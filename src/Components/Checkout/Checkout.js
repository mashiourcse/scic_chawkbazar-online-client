import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory, useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Checkout = () => {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://fast-headland-30459.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState({
    checkIn: new Date(),
    checkOut: new Date(),
  });
  let history = useHistory();
  const handleOrders = () => {
    
    const {imageURL,name,price,quantity} = product;
    const newOrders = { ...loggedInUser, imageURL,name,price,quantity, ...selectedDate };
    console.log(newOrders);
    fetch("https://fast-headland-30459.herokuapp.com/addOrders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrders),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        history.push("/orders");
      });
  };



  const handleCheckInDate = (date) => {
    const newDates = { ...selectedDate };
    newDates.checkIn = date;
    setSelectedDate(newDates);
  };

  const handleCheckOutDate = (date) => {
    const newDates = { ...selectedDate };
    newDates.checkOut = date;
    setSelectedDate(newDates);
  };
  return (
    <div
      style={{
        marginTop: '20px',
        height: "300px",
        width: "300px",
        margin: '0 auto'
      }}
    >
      <Card className="mt-5 text-center">
        <Card.Header>Checkout</Card.Header>
        <Card.Body>
          <Card.Title>Name : {product.name}</Card.Title>
          <Card.Text>
            Price : {product.price}, Weight : {product.quantity}
          </Card.Text>
        </Card.Body>
      </Card>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Check In Date"
            value={selectedDate.checkIn}
            onChange={handleCheckInDate}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Check Out Date"
            format="MM/dd/yyyy"
            value={selectedDate.checkOut}
            onChange={handleCheckOutDate}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </Grid>

      </MuiPickersUtilsProvider>
      <div className='text-center'>
        <button className="btn btn-danger" style={{ textDecoration: 'none', width: '270px' }} onClick={handleOrders}>
          Checkout
      </button>
      </div>
    </div>
  );
};

export default Checkout;
