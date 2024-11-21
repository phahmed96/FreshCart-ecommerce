

import {useFormik} from 'formik'
import * as yup from 'yup'
import axios  from 'axios'
import { useContext, useState} from 'react'
import { useNavigate } from "react-router-dom";
import { ColorRing } from 'react-loader-spinner'
import { authContext } from '../../Context/AuthContext';
import { cartContext } from '../../Context/CartContext';


export default function Login() {


  const {setToken}  = useContext(authContext)
  const {getUserCart}  = useContext(cartContext)

 const navigate =   useNavigate();
  const [errorMessage, setErrorMessage] = useState(null)
  const [correctMessage, setCorrectMessage] = useState(null)
  const [isClicked, setisClicked] = useState(false)







async  function   loginUser(values){

// try {
//   const {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup' , values)
//   console.log('res' , data);

// } catch (error) {
//   console.log(error.response.data.message );
  
// }

setisClicked(true)

axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin' , values)
.then( function( x ){
// console.log('sa7' , x);
setToken(x.data.token)
localStorage.setItem('token' , x.data.token)
getUserCart

setCorrectMessage(x);
setisClicked(false)
setTimeout(() => {

  navigate('/Products') ;
}, 2000);

// setTimeout(() => {
//   setCorrectMessage(false)
// }, 2000);


}  )
.catch( function( x ){
// console.log('8lt' , x.response.data.message);
setErrorMessage(x.response.data.message)
setisClicked(false)
setTimeout(() => {
  setErrorMessage(null)
}, 2000);

}  )





    };
  



const registerFormik = useFormik({
initialValues:
{

  email: '',
  password: '',
 
 
},

onSubmit : loginUser,


// validate : function(allData){
//   const errors = {};

//  const nameRegex = /^[A-Z][a-z]{4,8}$/;
//  const phoneRegex = /^01[0125][0-9]{8}$/;

// // "nameRegex".match(allData.name)
// if(nameRegex.test(allData.name)==false ){
// errors.name = "name is required";
// }

// if( phoneRegex.test(allData.phone) == false  ){
// errors.phone = 'phone must be egyptian num'
// }


// if (allData.email.includes('@') == false  || allData.email.includes('.') == false ){
// errors.email = 'emial not valid'
// }

// if (  allData.password.length < 12 == false || allData.password.length > 6 ==false  ){
//   errors.password = 'password must be less than 12 character '

// }
//  if( allData.password !== allData.rePassword ){
//   errors.rePassword = 'password not match'

//  }


// console.log(errors);

// return errors  

// },

validationSchema: yup.object().shape({
    
  email: yup.string().email("invalid email").required("email is required")  ,
  password: yup.string().required("password is required").min(6).max(12)    ,
  
}) 














});











  return (
    <div className="p-5 ">

{ errorMessage ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
{  errorMessage  }
</div>  : "" }


{ correctMessage ? <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
Welcome back
</div>  : "" }









<h2 className="text-center">Login Now</h2>
      

<form  onSubmit={registerFormik.handleSubmit} className="max-w-md mx-auto">
 

  <div className="relative z-0 w-full mb-5 group">
      <input value={registerFormik.values.email}  onChange={registerFormik.handleChange} onBlur={registerFormik.handleBlur} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">email</label>
   
      {   registerFormik.errors.email && registerFormik.touched.email ?  <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {registerFormik.errors.email}
</div>  : ''  }
   
  </div>



 


  <div className="relative z-0 w-full mb-5 group">
      <input value={registerFormik.values.password} onBlur={registerFormik.handleBlur}  onChange={registerFormik.handleChange} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">password</label>
 
       {   registerFormik.errors.password && registerFormik.touched.password ?  <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {registerFormik.errors.password}
</div>  : ''  }
  
 
  </div>











 
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  
  { isClicked  ? <ColorRing
  visible={true}
  height="30"
  width="30"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />  : 'Submit'
  
   }
  
  
  
  
  </button>
</form>




    </div>
  )
}
