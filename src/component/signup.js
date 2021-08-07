import React,{useState} from 'react'
import { BsArrowLeft } from "react-icons/bs";

const Signup = () => {

        const img = "https://spng.pngfind.com/pngs/s/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png"

        const[formData, setFormData] = useState({
            email : "",
            password : "",
            username : ""
        })
        const [people, setPeople] = useState([])

        const handleChange = (e) => {
            const name = e.target.name;
            const value = e.target.value
            setFormData({...formData, [name] : value})
        }


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
            <section className="formBorder">
                <header className="headerSpread">
                    <h4><a href="/"> <BsArrowLeft/>BACK</a></h4>
                    <h4><a href="/">Sign Up</a></h4>
                </header>
            <div className="formCoverOne">
                <img className="userImage" src={img} alt="Avatar"></img>
                <form onSubmit={handleSubmit} className="formAlign">
                    {/* username  */}
                <label htmlFor="username">Username</label>
                <input className='bottomBorder' 
                        type="text" value={formData.username} 
                        placeholder="enter username" 
                        name="username" 
                        onChange={handleChange}/>
                    {/* email */}
                <label htmlFor="email">Email</label>
                <input className='bottomBorder' 
                       type="email" value={formData.email} 
                       placeholder="enter email"  
                       name="email" 
                       onChange={handleChange}/>
                    {/* password  */}
                <label htmlFor="pwd">Password</label>
                <input className='bottomBorder' 
                       type="password" value={formData.password} 
                       name="password" 
                       onChange={handleChange}/>
                    <button type="submit" className="signupBtn">SIGN UP</button>
                </form>
                    <p className="acctLink">already have an account <a href="/">login</a></p>
            </div>
            </section>
            

        </div>
        
     );
}
 
 
export default Signup;