
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { ColorRing } from 'react-loader-spinner'
import useAllCategories from '../../CustomHooks/useAllCategories'


export default function Categories() {


// function getAllCategories(){
//     return  axios.get('https://ecommerce.routemisr.com/api/v1/categories')
// }

// const {data , isError , isLoading} = useQuery({
//   queryKey : ['allCategories'],
//   queryFn : getAllCategories
// })

const {data , isError , isLoading } = useAllCategories()




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

<div className="grid grid-cols-3">

  {data.data.data.map( (catagory) => <div key={catagory._id} className="catagory  ">
 <img src={catagory.image} alt={catagory.name} className='w-full' />

 <h2>{catagory.name}</h2>


</div>

  )}


</div>




  </div>
  
  
  </>
   
}
