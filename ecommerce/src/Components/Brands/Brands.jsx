import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { ColorRing } from 'react-loader-spinner'


export default function Brands() {


function getAllBrands(){
    return  axios.get('https://ecommerce.routemisr.com/api/v1/brands')
}

const {data , isError , isLoading} = useQuery({
  queryKey : ['allBrands'],
  queryFn : getAllBrands
})


if(isError){
return <>
<h2>feh error</h2>
</>
}

if(isLoading){
return  <div className="h-screen bg-blue-300 flex justify-center items-center">
 
 
 
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


  return <>
  
  <div className="container mx-auto">

<div className="grid grid-cols-4">

  {data.data.data.map( (brand) => <div key={brand._id} className="brand rounded-xl bg-blue-300">
 <img src={brand.image} alt={brand.name} className='w-full' />

 <h2>{brand.name}</h2>


</div>

  )}


</div>




  </div>
  
  
  </>
   
}
