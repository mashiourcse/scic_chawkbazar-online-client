import { faPencilAlt, faPlus, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SideMenu = () => {
    return (
        <div className='side-nav'>
            <Nav className="flex-column p-4">
                <Link className='m-2' style={{ textDecoration: 'none', color: 'white' }} to="/manageProducts"><FontAwesomeIcon icon={faThLarge} /><span className='ml-2'>Manage Product</span></Link>
                <Link className='m-2' style={{ textDecoration: 'none', color: 'white' }} to="/addProducts"><FontAwesomeIcon icon={faPlus} /><span className='ml-2'>Add Product</span></Link>
                <Link className='m-2' style={{ textDecoration: 'none', color: 'white' }} to="/editProducts"><FontAwesomeIcon icon={faPencilAlt} /><span className='ml-2'>Edit Product</span></Link>
            </Nav>
        </div>
    );
};

export default SideMenu;