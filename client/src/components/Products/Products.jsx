/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, {useState} from 'react';
import { useEffect } from 'react';
import { Items } from '../items/Items';
import { Grid,  Badge, Drawer } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Cart } from '../Cart/Cart';


function Products({categoryId}) {
    
const [products, setProducts] = useState([]);
const [cartItems, setCartItems] = useState([]);
const [cartOpen, setCartOpen] = useState(false);
const userData = JSON.parse(localStorage.getItem("user"));

const fetchProducts = async(id) => {
    const productData = await axios.get(`categories/${id}/products`,
    {
        headers:{
            token: `Bearer ${userData.accessToken}` 
          }
    }
    );
    setProducts(productData);
}

const onPayment = () =>{
    setCartItems([]);
    setCartOpen(false);
}

const getTotalItem = (items) =>{
    return items.reduce((acc,item)=>acc + item.amount, 0);
  };


const handleAddToCart = (clickedItem) => {
    setCartItems((prev)=> {
        const isItemInCart = prev.find((item)=>item._id === clickedItem._id);
        if(isItemInCart){
            return prev.map((item)=>
            item._id === clickedItem._id ? 
            { ...item, amount: item.amount + 1}
            :item
            )
        }
        return [ ...prev, {...clickedItem, amount:1}];
    });


}
const cartStyle = {
    fontFamily: "Arial, Helvetica, sans-serif",
  width: "500px",
  padding: "20px",
};

useEffect(()=>{
    fetchProducts(categoryId);
},[categoryId]);

  return (
    <>
    <div className='Cart' style={cartStyle}>
    <Drawer anchor='right' open={cartOpen} onClose={()=>setCartOpen(false)}>
    <Cart
    onPayment={onPayment}
    cartItems={cartItems}
    />
    </Drawer>
    </div>
    <div className='StyleButton' style={ {position:'index', zIndex:100, right:'20px', top: '20px'} }>
     <Badge badgeContent={getTotalItem(cartItems)} color="error">
            <AddShoppingCartIcon onClick={()=>setCartOpen(true)}/>
          </Badge>
    </div>
    <Grid container spacing={3}>
    {(products.length!== 0) ? products.data.map((item, index)=><Items key={index} item={item} handleAddToCart={handleAddToCart}/>) : null}
    </Grid>
    </>
    );
}
export {Products};