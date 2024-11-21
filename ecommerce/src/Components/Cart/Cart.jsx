
import { useContext } from 'react'
import { cartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'


export default function Cart() {

const { allProducts , totalCartPrice , updateCount , deleteProduct , numOfCartItems}= useContext(cartContext)


function handleUpdateCount(id , newCount){
  updateCount(id , newCount)

}

async function handleDelete(id){
 const resFlag = await deleteProduct(id)

 if (resFlag){
  toast.success('product deleted successfuly')
 }
else{
  toast.error('error occured')
}
}





    
  return<>

<h2 className='text-center text-red-400'>Total price : {totalCartPrice} LE </h2>
<p className='text-center text-red-400' >your cart contain {numOfCartItems} different items  </p>



  {/* 
  
  
  {
    "status": "success",
    "numOfCartItems": 1,
    "cartId": "66fc379d7d5140618ed3aaf1",
    "data": {
        "_id": "66fc379d7d5140618ed3aaf1",
        "cartOwner": "66d5bdc99f2845fbe683a2b9",
        "products": [
            {
                "count": 2,
                "_id": "66fc379d7d5140618ed3aaf2",
                "product": {
                    "subcategory": [
                        {
                            "_id": "6407f1bcb575d3b90bf95797",
                            "name": "Women's Clothing",
                            "slug": "women's-clothing",
                            "category": "6439d58a0049ad0b52b9003f"
                        }
                    ],
                    "_id": "6428e997dc1175abc65ca0a1",
                    "title": "Woman Shawl",
                    "quantity": 220,
                    "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680402838276-cover.jpeg",
                    "category": {
                      "_id": "6439d58a0049ad0b52b9003f",
                        "name": "Women's Fashion",
                        "slug": "women's-fashion",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg"
                        },
                    "brand": {
                        "_id": "64089bbe24b25627a253158b",
                        "name": "DeFacto",
                        "slug": "defacto",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png"
                        },
                    "ratingsAverage": 4.8,
                    "id": "6428e997dc1175abc65ca0a1"
                    },
                "price": 149
            }
        ],
        "createdAt": "2024-10-01T17:55:41.517Z",
        "updatedAt": "2024-10-09T12:38:42.243Z",
        "__v": 0,
        "totalCartPrice": 298
        }
        }
  
  
  
        
        
        
        
        
        
  
  
        
        */}
  
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Qty
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
    
    
    {allProducts?.map( (product) =>   <tr key={product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4">
          <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.product.title} />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {product.product.title}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <button disabled={product.count === 1}  onClick={()=> handleUpdateCount( product.product._id , product.count - 1 )} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
              </svg>
            </button>


            <div>
              <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={product.count} required />
            </div>


            <button onClick={()=> handleUpdateCount( product.product._id , product.count + 1 )} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
         {product.price}
        </td>
        <td className="px-6 py-4">
          <a onClick={()=> handleDelete(product.product._id)} href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
        </td>
      </tr> )}



    </tbody>
  </table>
</div>

<div>
 
<Link to='/payment'>

<button className='bg-blue-700 rounded-xl my-5 mx-auto w-full py-5 text-white '>purchase your product</button>

</Link>
  

</div>
  
  
  
  
  </>
}
