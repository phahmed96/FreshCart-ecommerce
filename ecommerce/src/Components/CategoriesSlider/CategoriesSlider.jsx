import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { ColorRing } from "react-loader-spinner";
import { useQuery } from "@tanstack/react-query";
import useAllCategories from "../../CustomHooks/useAllCategories";


export default function CategoriesSlider() {

//  const [allCategories, setAllCategories] = useState(null)

//  useEffect( ()=> {

//     getAllCategories()
//  } , [] )


const {data , isError , isLoading } = useAllCategories()

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 5,
  };

 function getAllCategories(){

return  axios.get('https://ecommerce.routemisr.com/api/v1/categories')
  
    
  } 


//   const {data , isError , isLoading} = useQuery({

//     queryKey : ['allCategories'],
//     queryFn : getAllCategories
// })


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

<Slider {...settings} arrows={false}>
      
      {data.data.data.map( ( catagory ) =>
      
      
      
      <div key={catagory._id}>
       <img className="w-full h-36"  src={catagory.image} alt= {catagory.name}/>
       <h6>{catagory.name}</h6>

      </div>
    
    )}
      
    </Slider>
   

</>

  

}


   