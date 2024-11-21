import { Link , NavLink, useNavigate } from 'react-router-dom'
import freshLogo from '../../assets/images/freshcart-logo.svg'
import { useContext } from 'react'
import { authContext } from '../../Context/AuthContext'

export default function Navbar() {

const {token , setToken} =  useContext(authContext)

const navigate = useNavigate()

function handleLogout(){
  localStorage.removeItem('token');
  setToken(null);
  navigate('/login')


}



  return (
    <nav className='  bg-emerald-500 p-4'>
<div className="flex  mx-auto container items-center justify-between">

  
<div className="leftPart flex gap-4 items-center">
<Link to = '' >
<img src={freshLogo} alt="Fresh Cart" />
</Link>


{ token ? 
<ul className='flex space-x-4 items-center'>

<li>
  <NavLink to='/Products' >Products</NavLink>
</li>
<li>
  <NavLink to='/Categories' >Categories</NavLink>
</li>
<li>
  <NavLink to='/brands' >Brands</NavLink>
</li>
<li>
  <NavLink to='/Cart' >Cart</NavLink>
</li>
</ul>
 : null  }


</div>




<div className="rightPart flex gap-4 ">

<ul className='flex gap-4 items-center '>
  <li>

    <i className="fa-brands cursor-pointer  fa-facebook"></i>
    
  </li>
  <li>

    <i className="fa-brands cursor-pointer fa-instagram"></i>

  </li>
  <li>

    <i className="fa-brands cursor-pointer fa-linkedin"></i>

  </li>
  <li>

    <i className="fa-brands cursor-pointer fa-youtube"></i>

  </li>
  
</ul>
   


<ul className='flex items-center gap-4'>

{ token ? <li>
<span className='cursor-pointer' onClick={handleLogout} >Logout</span>
</li> : <>

<li>
<NavLink to='/Register'>Register</NavLink>
</li>
<li>
<NavLink to='/Login'  >Login</NavLink>
</li> 

</>
}



</ul>   







</div>


</div>

    </nav>




  )
}
