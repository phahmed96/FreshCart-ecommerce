import { createContext, useEffect, useState } from "react"


export   const authContext = createContext()



export default function AuthContext({children}) {

const [token, setToken] = useState(localStorage.getItem('token'))
// console.log(token);

// useEffect(() => {
// const userToken = localStorage.getItem('token')
//  if (userToken != null ){
//     setToken(userToken)
//  }
// }, [])





  return (
<>
<authContext.Provider value={{token , setToken}}>

{children}

</authContext.Provider>










</>




)
}
