import '@/styles/globals.css'
import { store } from '../redux/store'
import { Provider, useDispatch } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { setReduxUser } from '@/redux/slice/userSlice'
import Header from "@/components/Header";
import Footer from '@/components/Footer'



function App({ Component, pageProps }) {

  const [user, setUser] = useState(null)
  const dispatch = useDispatch();

  useEffect(()=>{
    if(localStorage.getItem("access_token")){
      
      axios.get("https://express-job-portal-u1uo.vercel.app/api/get-user", {
        headers: {
          Authorization: "bearer " + localStorage.getItem("access_token")
      }
      }).then(res =>{
        // console.log(res);
        dispatch(setReduxUser(res.data[0]))
      
      })
    }
    
  },[dispatch]);
  return <>
  <Header/>
<Component {...pageProps}/>
{/* <Footer/> */}
</>
 
}
const WithReduxProvider = (App)=>{
  function Wrapper(props){
return<>
<Provider store={store}>
<App {...props}/>
</Provider>
</>
}
return Wrapper
}
export default WithReduxProvider(App)
