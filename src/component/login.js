import React,{useState} from 'react'
import { BsArrowLeft } from "react-icons/bs";
// import Crm from './crm'
import {
    Link, Redirect
  } from "react-router-dom";
import axios from 'axios'

const Login = () => {
        // const [token, setToken] = useState(localStorage.getItem('token'))
        const [token, setToken] = useState(null)

        // const img = "https://spng.pngfind.com/pngs/s/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png"

        //const token = localStorage.getItem('token')
        const[formData, setFormData] = useState({
            email : "",
            password : "",
            // username : ""
        })
        const [error, setError] = useState("")

        const handleChange = (e) => {
            const name = e.target.name;
            const value = e.target.value
            setFormData({...formData, [name] : value})
        }

            // this switches between crm and login 
        // const [loginData, setLoginData] = useState(false)


        const handleSubmit = async (e) => {
            e.preventDefault();
            
            try {
                const {data} = await axios.post('/crm/v1/auth/login', formData)             
                console.log(data)
                const userData = localStorage.setItem('token', data.token)
                if(!userData){
                    console.log('user data is wrong')
                }
                setToken(localStorage.getItem('token'))
            } catch (error) {
                setError(error.response.data.msg)
                setTimeout(() => {
                    setError("")
                }, 5000);
            }
            // const {data} = await axios.post('/crm/v1/auth/login', formData)             
            // console.log(data)
            // const userData = localStorage.setItem('token', data.token)
            // if(!userData){
            //     console.log('user data is wrong')
            // }
            // setToken(localStorage.getItem('token'))
            // setToken(userData)
            // setFormData({email:"",password:""})
            // if(formData.email && formData.password){
            //    const newFormData = {...formData, id : new Date().getTime().toString()}
            //    setPeople([...people, newFormData])
            // //situation were data is correct switch to crm page using setLoginData(false)
            // //    setLoginData(false)
            //    setFormData({email : "",password : "",username : ""})
            // }
        }

        if(token !==null){
            return <Redirect to="/dashboard" />
        }


    return ( 
        <div >
                <section className="formBorder">
                <header className="headerSpread">
                    <h4><Link to="/signup"> <BsArrowLeft/>BACK</Link></h4>
                    <h4><Link to="/">SIGN-UP</Link></h4>
                </header>                                                                               
              <div className="formCoverOne">
                {/* <img className="userImage" src={img} alt="Avatar"></img> */}
                <h2 className="welcome">Welcome!</h2>
                <form onSubmit={handleSubmit} className="formAlign">
                    {error && <span className="errorTextColor">{error}</span>}                
                    {/* email */}
                <label htmlFor="email">Email</label>
                <input className="bottomBorder" 
                       type="email" value={formData.email} 
                       placeholder="enter email"  
                       name="email" 
                       onChange={handleChange}
                />
                    {/* password  */}
                <label htmlFor="pwd">Password</label>
                <input className="bottomBorder" 
                       type="password" 
                       value={formData.password} 
                       name="password" 
                       onChange={handleChange}
                    />
                    <button type="submit" className="signupBtn">LOGIN</button>
                </form>
                    <p className="acctLinkLogin">already have an account <Link to="/signup">Sign Up</Link></p>
            </div>
            </section>

                {/* for the data to switch to crm page , an authentication  
               needs to happen with the back-end data  */}
           
        </div>
        
     );
}
 
export default Login;