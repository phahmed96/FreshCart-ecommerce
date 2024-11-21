import axios from "axios"
import { useContext, useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import SimpleSlider from "../HomeSlider/HomeSlider";
import sliderImg7 from '../../assets/images/blog-img-1.jpeg'
import sliderImg8 from '../../assets/images/blog-img-2.jpeg'
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";


export default function Products() {

//     const [allProducts, setAllProducts] = useState(null)

const {addProduct} =  useContext(cartContext)

async function handleAddProduct(id){

  const resFlag = await addProduct(id)

  if (resFlag) {
   toast.success('product added successfuly')
    }
    else {
   toast.error('product added error')
    }
}



 function getAllProducts(){

 return  axios.get('https://ecommerce.routemisr.com/api/v1/products');

  
  
}


// useEffect( () => {

//     getAllProducts();

// } , [] );

const {data , isError , isLoading , isFetching , isSuccess } =  useQuery({

queryKey : 'productDetails',
queryFn : getAllProducts
})

console.log( 'data' ,  data);
console.log( 'isError' , isError);
console.log( 'isLoading' , isLoading);
console.log( 'isFetching' , isFetching);
console.log( 'isSuccess' ,  isSuccess);

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





  return <>

 
<div className="container mx-auto">
<div className="flex justify-center items-center">

<div className="w-[80%]">
<SimpleSlider/>
</div>

<div className="w-[20%] ">
<img className="w-full h-40" src={sliderImg7} alt="" />
<img className="w-full h-40" src={sliderImg8} alt="" />
</div>


</div>


<CategoriesSlider/>
    

<div className="grid md:grid-cols-3 lg:grid-cols-6 ">

{ data.data.data.map( (product) =>

<div key={product._id} className="product p-2 ">

<div className="relative overflow-hidden group ">


<div className="absolute top-0 end-0 cursor-pointer translate-x-[155%] group-hover:translate-x-0 transition-[700ms]">
<i onClick={ () => handleAddProduct(product._id) }  className="fa-solid fa-plus rounded-xl bg-green-500 p-2" ></i>
</div>


<Link to={`/ProductDetails/${product._id}`}>




<img className="w-full" src={product.imageCover} alt={product.title} />
<h6 className="text-emerald-700" > {product.category.name}</h6>
<h2>{product.title.split(' ').slice(0,2).join(' ')}</h2>
<div className="flex justify-between items-center">

<p>
    
   <span className={product.priceAfterDiscount? 'line-through text-red-600'  : '' } > {product.price}</span>
   <span className="ml-2">{product.priceAfterDiscount}</span>

</p>
<p>  <i className="fa-solid fa-star text-yellow-500"></i>  {product.ratingsAverage}</p>

</div>







</Link>

</div>

</div>

)}

</div>



</div>

 


 
   





</>


    
  
}



















































