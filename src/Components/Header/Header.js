import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

// import { faStore } from '@fortawesome/free-solid-svg-icons'
import { addToDb,clearLoggedIn } from '../../utilities/fakedb';
import firebase from "firebase/app";
import firebaseConfig from '../firebase.config';
const Home = () => {

  let history = useHistory();
  const handleClick = () => {
    history.push('/login')
  }
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);


   // Storing user info in localstorage
   const storeAtLocalStorage =() =>{
    if(JSON.stringify(loggedInUser) !== '{}'){
      console.log(loggedInUser);
      addToDb(loggedInUser);
    }
}
storeAtLocalStorage();

const handleLogOut = () => {
    
  setLoggedInUser({});
  clearLoggedIn();
  history.push('/login');
  

}

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to='/home'><h5> Chawkbazar Online</h5></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link style={{ marginLeft: '20px', textDecoration: 'none' }} to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link style={{ marginLeft: '20px', textDecoration: 'none' }} to="/orders">My Orders</Link>
          </li>
          <li className="nav-item">
            <Link style={{ marginLeft: '20px', textDecoration: 'none' }} to="/admin">Admin</Link>
          </li>
          
          
          
          <li className="nav-item p-2">
              {
                loggedInUser.name ? <Link to="" className="nav-link disabled">
                  <strong className="text-dark">{loggedInUser.name}</strong>
                </Link>
                
                  : <button onClick={handleClick} className="nav-link btn btn-danger btn-lg text-white p-1">
                    Login
                </button>
              }
            </li>
            <li className="nav-item">
              {
                loggedInUser.name ? <button onClick={handleLogOut} className="nav-link btn btn-danger btn-lg text-white p-1">
                Logout
            </button>
                
                  : ''
              }
            </li>
            
        </ul>
        <div style={{ marginLeft: '20px' }} className='form-inline'>
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </div>
      </div>
    </nav>
  );
};

export default Home;