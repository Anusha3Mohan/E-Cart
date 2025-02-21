import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slice/wishlistSlice'
import { addToCart } from '../redux/slice/cartSlice'


function Wishlist() {
  const dispatch=useDispatch()
  const wishlist = useSelector(state=>state.wishlistSlice.wishlist)

  const handleCart=(product)=>{
    dispatch(removeFromWishlist(product.id))
    dispatch(addToCart(product))
  }

  return (
       <div className='container mt-5'>
       <Row className='mt-5 container'>
            {wishlist.length>0?wishlist.map(product=>(
              <Col className="mt-5" sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: '18rem' }}>
           <Link to={"/view/1"}><Card.Img variant="top" style={{width:"100%"}} src={product.thumbnail} /></Link>
        <Card.Body>
          <Card.Title>{product?.title.slice(0,20)}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
  
          <div className='d-flex justify-content-between'>
              <Button className='btn btn-light' onClick={()=>dispatch(removeFromWishlist(product.id))}><i className='fa-solid fa-heart-circle-minus text-danger'></i></Button>
              <Button className='btn btn-light' onClick={()=>handleCart(product)}><i className='fa-solid fa-cart-plus text-success'></i></Button>
          </div>
  
          </Card.Body>
      </Card>
              </Col>
            )):
            <div className='container mt-5 d-flex align-items-center'>
              <h1 className='text-dark'>Your Wishlist is Empty...</h1>
              <img src="https://cdnl.iconscout.com/lottie/premium/thumb/empty-cart-8302196-6635017.gif" alt="" />
            </div>
              
              }
        </Row>
        </div>
        
      
    
  )
}

export default Wishlist