import axios from "axios";
import { createContext, useEffect, useState } from "react"






// eslint-disable-next-line react-refresh/only-export-components
export  const cartContext = createContext();

// eslint-disable-next-line react/prop-types
export default function CartContextProvider({ children }) {

const [allProducts, setAllProducts] = useState(null);
const [numOfCartItems, setNumOfCartItems] = useState(0);
const [totalCartPrice, setTotalCartPrice] = useState(0);
const [CartId, setCartId] = useState(null)

console.log('allProducts', allProducts);

function clearUI(){
  setAllProducts(null)
setNumOfCartItems(0)
setTotalCartPrice(0)
setCartId(null)
}




let headers = {
token : localStorage.getItem('token')
}




async function addProduct(ProductId){
return  axios.post('https://ecommerce.routemisr.com/api/v1/cart' , {
    "productId": ProductId
} , { headers : {
  token : localStorage.getItem('token'),
},
} )
.then( (res) => {
  // setAllProducts(res.data.data.products)
  // setNumOfCartItems(res.data.numOfCartItems)
  // setTotalCartPrice(res.data.data.totalCartPrice)
  getUserCart()
return true ; 

}  )
.catch( (error) => {
console.log(error);
return false;

}   )
}



function getUserCart(){
  axios.get('https://ecommerce.routemisr.com/api/v1/cart' , {
    headers : headers
  }).then( (res)=>{
    setAllProducts(res.data.data.products)
    setTotalCartPrice(res.data.data.totalCartPrice)
    setNumOfCartItems(res.data.numOfCartItems)
    setCartId(res.data.data._id)
  } )
    .catch( (error)=> {
      console.log('error', error);
    } )

   
}


function updateCount(productId , newCount){
axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
  
    "count": newCount,
}, {
  headers,
})
.then( (res)=>{
  setTotalCartPrice(res.data.data.totalCartPrice)
  setAllProducts(res.data.data.products)
  setNumOfCartItems(res.data.numOfCartItems)
} )
.catch( (error)=>{
console.log('error', error);

} )


}



async function deleteProduct(pId){
return  axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${pId}`, {
    headers,
  } )
  .then( (res)=>{
    setAllProducts(res.data.data.products)
    setTotalCartPrice(res.data.data.totalCartPrice)
    setNumOfCartItems(res.data.numOfCartItems)
    return true
  } )
    .catch( (error)=> {
      console.log('error', error);
      return false
    } )

}






useEffect( ()=>{
  getUserCart();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []  );

  return <cartContext.Provider value={{
    addProduct,
    allProducts,
    numOfCartItems,
    totalCartPrice,
    getUserCart,
    updateCount,
    deleteProduct,
    CartId,
    clearUI,
    }}>
  
  
  { children}
  
  
  </cartContext.Provider>
}
