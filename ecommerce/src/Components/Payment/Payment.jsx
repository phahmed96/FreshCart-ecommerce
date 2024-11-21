import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { cartContext } from '../../Context/CartContext'

export default function Payment() {
  
 const {CartId , clearUI} = useContext(cartContext)

 const [isOnline, setIsOnline] = useState(false)

function detectAndHandle(values){
 if(isOnline){
   paymentOnline (values)
  }
  else{
    createCashOrder (values)
  }

}





  function createCashOrder (values){
const backEndRequest = {
  shippingAddress : values ,
}

axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${CartId}` , backEndRequest , {
  headers : {
    token : localStorage.getItem('token')
  }
} )
.then( (res)=> {
console.log('after cash order', res);
clearUI()

} )
.catch( (error)=> {
console.log( 'error', error );

} )


  }



  function paymentOnline (values){
const backEndRequest = {
  shippingAddress : values ,
}

axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${CartId}` , backEndRequest , {
  headers : {
    token : localStorage.getItem('token')
  },
  params: {
    url : 'http://localhost:3333'
  }
} )
.then( (res)=> {
console.log('after online order', res);
window.open(res.data.session.url , '_self')
clearUI()

} )
.catch( (error)=> {
console.log( 'error', error );

} )


  }
  




 const paymentFormik=  useFormik({
    initialValues: {
        details: '',
        phone: '',
        email: '',
  },
  onSubmit : detectAndHandle

})
  
  
  
  
  
  
  
  
  return<>
  
  
<form  onSubmit={paymentFormik.handleSubmit} className="max-w-md mx-auto">
 

 <div className="relative z-0 w-full mb-5 group">
     <input value={paymentFormik.values.details}  onChange={paymentFormik.handleChange} onBlur={paymentFormik.handleBlur} type="text" name="details" id="details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
     <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">details</label>
  
     {   paymentFormik.errors.details && paymentFormik.touched.details ?  <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {paymentFormik.errors.details}
</div>  : ''  }
  
 </div>






 <div className="relative z-0 w-full mb-5 group">
     <input value={paymentFormik.values.phone} onBlur={paymentFormik.handleBlur}  onChange={paymentFormik.handleChange} type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
     <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">phone</label>

      {   paymentFormik.errors.phone && paymentFormik.touched.phone ?  <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {paymentFormik.errors.phone}
</div>  : ''  }
 

 </div>







 <div className="relative z-0 w-full mb-5 group">
     <input value={paymentFormik.values.city} onBlur={paymentFormik.handleBlur}  onChange={paymentFormik.handleChange} type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
     <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">city</label>

      {   paymentFormik.errors.city && paymentFormik.touched.city ?  <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {paymentFormik.errors.city}
</div>  : ''  }
 

 </div>












 <button  onClick={ () => { setIsOnline(false)  }  }  type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
 cash order

 </button>

 <button  onClick={ () => { setIsOnline(true)  }  } type="submit" className=" mx-4  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
 online payment

 </button>




</form>


  
  
  
  
  
  </>
}
