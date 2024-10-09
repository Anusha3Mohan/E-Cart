import React, { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToWishlist } from '../redux/slice/wishlistSlice'
import { addToCart } from '../redux/slice/cartSlice'


function View() {
  const {id}=useParams()
  
  const {loading}=useSelector((state)=>state.productSlice)
  const[product,setProduct]=useState({})
  const products=JSON.parse(localStorage.getItem("products"))
  const dispatch=useDispatch()
  const {wishlist}=useSelector(state =>state.wishlistSlice)

  useEffect(()=>{
    
    setProduct(products.find(product=>product.id==id))
  },[])

  const handleWishlist=(product)=>{
    const existingProduct = wishlist.find(item=>item.id==product.id)
    if(existingProduct){
      alert("already exist")
    }else{
      dispatch(addToWishlist(product))
    }
  }

  return (
    <div className='container mt-5'>
      <div className='d-flex justify-content-center mt-5'>
         <Spinner animation="border" variant="info" />Loading...
     </div>:
        <div className='container row' style={{marginTop:"100px"}}>
      
        <div className="col-lg-4">
        <img style={{width:"100%",height:"400px"}} src={product?.thumbnail} alt="" />
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-6">
          <p>Pid:{product?.id}</p>
          <h1>{product?.title}</h1>
          <h5 className='fw-bolder'>Price: <span style={{color:"red"}}>${product?.price}</span></h5>
          <p>{product?.description}</p>
    
          <div className='d-flex justify-content-between mt-4'>
             <Button className='btn btn-outline-light' onClick={()=>handleWishlist(product)}><i className='fa-solid fa-heart text-danger'></i>Wishlist</Button>
             <Button className='btn btn-outline-light' onClick={()=>dispatch(addToCart(product))}><i className='fa-solid fa-cart-shopping text-warning'></i>Cart</Button>
            </div>
        </div>
        <br/>
        </div>
      
    </div>
    
  )
}

export default View
