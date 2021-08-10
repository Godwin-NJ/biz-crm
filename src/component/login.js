import React,{useState} from 'react'
import { BsArrowLeft } from "react-icons/bs";
import Crm from './crm'
import {
    Link
  } from "react-router-dom";

const Login = () => {

        const img = "https://spng.pngfind.com/pngs/s/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png"

        const[formData, setFormData] = useState({
            email : "",
            password : "",
            // username : ""
        })
        const [people, setPeople] = useState([])

        const handleChange = (e) => {
            const name = e.target.name;
            const value = e.target.value
            setFormData({...formData, [name] : value})
        }

            // this switches between crm and login 
        const [login, setLogin] = useState(true)


        const handleSubmit = (e) => {
            e.preventDefault()
            if(formData.username && formData.email && formData.password){
               const newFormData = {...formData, id : new Date().getTime().toString()}
               setPeople([...people, newFormData])
               setFormData({email : "",password : "",username : ""})
            }
        }


    return ( 
        <div >
            {login ?
                <section className="formBorder">
                <header className="headerSpread">
                    <h4><Link to="/signup"> <BsArrowLeft/>BACK</Link></h4>
                    <h4><Link to="/">Login</Link></h4>
                </header>
              <div className="formCoverOne">
                <img className="userImage" src={img} alt="Avatar"></img>
                <h2 className="welcome">Welcome!</h2>
                <form onSubmit={handleSubmit} className="formAlign">
                    {/* username  */}
                {/* <label htmlFor="username">Username</label>
                <input type="text" value={formData.username} placeholder="enter username" name="username" onChange={handleChange}/> */}
                    {/* email */}
                <label htmlFor="email">Username | email</label>
                <input className="bottomBorder" 
                       type="email" value={formData.email} 
                       placeholder="enter email"  
                       name="email" 
                       onChange={handleChange}/>
                    {/* password  */}
                <label htmlFor="pwd">Password</label>
                <input className="bottomBorder" 
                       type="password" 
                       value={formData.password} 
                       name="password" 
                       onChange={handleChange}/>
                    <button type="submit" className="signupBtn">LOGIN</button>
                </form>
                    <p className="acctLink">already have an account <Link to="/signup">Sign Up</Link></p>
            </div>
            </section>

                : <Crm />
            }
            
           
        </div>
        
     );
}
 
export default Login;