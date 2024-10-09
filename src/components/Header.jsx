import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {

  const[wishListCount,setWishListCount]=useState(0)
  const[cartCount,setCartCount]=useState(0)
  const wishlist=useSelector(state=>state.wishlistSlice.wishlist)
  const cart = useSelector(state=>state.cartReducer)

  useEffect(()=>{
    setWishListCount(wishlist?.length)
    setCartCount(cart?.length)
  },[wishlist,cart])

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-info" style={{border:"none"}}>
      <Container>
        <Navbar.Brand><Link to={'/'} style={{color:"black",textDecoration:"none"}} className='text-light'><i class="fa-solid fa-truck-fast"></i> E-CART</Link></Navbar.Brand>
        <Nav>
            <Nav.Link>
                <Link to={'/wishlist'} style={{ color: "black" }} className='text-light'>
                <i class="fa-regular fa-heart"></i>
                <Badge bg="primary rounded ms-2" >{wishListCount}</Badge>
                </Link>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                <Link to={'/cart'}  style={{ color: "black" }} className='text-light'>
                <i class="fa-solid fa-bag-shopping"></i>
                <Badge bg="primary rounded ms-2">{cartCount}</Badge>
                </Link>
            </Nav.Link>
            </Nav>

      </Container>
    </Navbar>

    </div>
  )
}

export default Header