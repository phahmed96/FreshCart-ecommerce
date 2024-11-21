import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Components/Layout/Layout";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import AuthContext from "./Context/AuthContext";
import Products from "./Components/Products/Products";
import Categories from "./Components/Categories/Categories";
import Brands from "./Components/Brands/Brands";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import CartContextProvider from "./Context/CartContext";
import  { Toaster } from 'react-hot-toast';
import Cart from "./Components/Cart/Cart";
import Payment from "./Components/Payment/Payment";
import { Offline } from "react-detect-offline";
const router = createBrowserRouter([
{ path:'' , element: <Layout/> , children : [  
  { index : true  , element : <ProtectedRoute>
    <Products/>
    </ProtectedRoute>    },  

{ path : 'Products' , element : <ProtectedRoute>
  <Products/>
  </ProtectedRoute>    }, 


  { path: 'Register' , element : <Register/> },     
  { path: 'Login' , element :  <Login/>    },     
   
     
  { path: 'Categories' , element : <ProtectedRoute>
    <Categories/>
  </ProtectedRoute>     },   
  
     
  { path: 'ProductDetails/:id' , element : <ProtectedRoute>
    <ProductDetails/>
  </ProtectedRoute>     },   
  
  

  { path: 'Brands' , element : <ProtectedRoute>
     <Brands/>
  </ProtectedRoute>    },    

  { path: 'Payment' , element : <ProtectedRoute>
     <Payment/>
  </ProtectedRoute>    },    
  
  
  { path: 'Cart' , element : <ProtectedRoute>
     <Cart/>
  </ProtectedRoute>    },     


  { path: '*' , element : <NotFound/>    },     
     
]  }
]);

 const QueryClientconfig = new  QueryClient()



export default function App() {





  return (
    <>
   
<AuthContext>

    <QueryClientProvider client={QueryClientconfig}>

<CartContextProvider>

<RouterProvider  router={router} />  
<Toaster/>       
    
<Offline>

  <div className="bg-black text-center text-white rounded fixed bottom-0 left-0">
    <h1>internet corruppted please check your internet</h1>
  </div>
</Offline>
    

</CartContextProvider>


      
    </QueryClientProvider>

      
</AuthContext>
    

    </>

  
  )
}
