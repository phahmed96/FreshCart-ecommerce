import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useContext } from "react";
import { ColorRing } from "react-loader-spinner"
import { useParams } from "react-router-dom"
import { cartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";

export default function ProductDetails() {


 const { id } = useParams();


const {addProduct} =  useContext(cartContext)

async function handleAddProduct(id){
 const resFlag = await addProduct(id)
console.log('resFlag' , resFlag);


 if (resFlag) {
toast.success('product added successfuly')
 }
 else {
toast.error('product added error')
 }

}


function getProductDetails(){
  return  axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
}

const { data, isError , isLoading} = useQuery({
    queryKey : ['AllProducts' , id],
    queryFn : getProductDetails
})



if(isLoading){

    return    <div className="h-screen bg-blue-300 flex justify-center items-center">
     
     
     
        <ColorRing
       visible={true}
       height="80"
       width="80"
       ariaLabel="color-ring-loading"
       wrapperStyle={{}}
       wrapperClass="color-ring-wrapper"
       colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
       />
         
       
       
       
       
       </div>
       
    }
    
    if( isError ){
    return <>
    
    <h2>feh error</h2>
    
    </>
    }
    
    
    

const objectOfData = data.data.data ;

  return<>
  
  <div className="container mx-auto flex items-center justify-between p-5">

<div className="w-1/4">

<img src={objectOfData.imageCover } alt={objectOfData.title} />

</div>




<div className="w-[70%]">

<h1>{objectOfData.title}</h1>
<p>{objectOfData.description}</p>
<h5>category: {objectOfData.category.name}</h5>
<h5>price: {objectOfData.price}</h5>

<button onClick={()=> handleAddProduct(objectOfData._id)} className="bg-green-500 rounded-xl w-full p-3"  >+ add product to cart</button>

</div>



  </div>
  
  
  
  
  
  
  
  </>
}
