import React,{useState} from 'react'
import { BsArrowLeft } from "react-icons/bs";
import {
    Link,
    Redirect,
  } from "react-router-dom";
  import axios from 'axios'

const Signup = () => {
        const [token, setToken] = useState(null)
        const noComparePassword = ({ comparePassword, ...rest }) => rest ;
        const[formData, setFormData] = useState({
            email : "",
            password : "",
            name: "",
            comparePassword: ""
        })
        const compareData = noComparePassword(formData)
        const[error, setError] = useState("")


// const img = "https://spng.pngfind.com/pngs/s/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png"


        const handleChange = (e) => {
            const name = e.target.name;
            const value = e.target.value
            setFormData({...formData, [name] : value})
        }


        const handleSubmit = async (e) => {
            e.preventDefault()
            if(formData.password !== formData.comparePassword){
                setFormData({password: "",comparePassword : ""})
                setError('Password does not match')
                setTimeout(() => {
                    setError('')
                }, 5000); 
            }
            try {
                const{data} = await axios.post('/crm/v1/auth/register',compareData)
                console.log(data)
                localStorage.setItem('token', data.token)
                setToken(localStorage.getItem('token'))
            } catch (err) {
               setError(err.response.data.msg)
                setTimeout(() => {
                    setError('')
                }, 5000);
            }
           

            // if(formData.username && formData.email && formData.password){
            //    const newFormData = {...formData, id : new Date().getTime().toString()}
            //    setPeople([...people, newFormData])
            //    setFormData({email : "",password : "",username : ""})
            // }
        } 

        if(token){
            return <Redirect to="/dashboard" />
        }

    return ( 
        <div >
            <section className="formBorder">
                <header className="headerSpread">
                    <h4><Link to="/"> <BsArrowLeft/>BACK</Link></h4>
                    <h4><Link to="/signup">LOG-IN</Link></h4>
                </header>
            <div className="formCoverOne">
                {/* <img className="userImage" src={img} alt="Avatar"></img> */}
                <form onSubmit={handleSubmit} className="formAlign">
                    {error && <span className="errorTextColor">{error}</span>}
                    {/* username  */}
                <label htmlFor="name">Username</label>
                <input className='bottomBorder' 
                        type="text" value={formData.name} 
                        placeholder="enter username" 
                        name="name" 
                        onChange={handleChange}/>
                    {/* email */}
                <label htmlFor="email">Email</label>
                <input className='bottomBorder' 
                       type="email" value={formData.email} 
                       placeholder="enter email"  
                       name="email" 
                       onChange={handleChange}/>
                    {/* password  */}
                <label htmlFor="password">Password</label>
                <input className='bottomBorder' 
                       type="password" value={formData.password} 
                       name="password" 
                       autoComplete="on"
                       onChange={handleChange}/>
                       {/* compare-password */}
                <label htmlFor="comparePassword">Retype-Password</label>
                <input className='bottomBorder' 
                       type="password" value={formData.comparePassword} 
                       name="comparePassword" 
                       autoComplete="on"
                       onChange={handleChange}/>
                    <button type="submit" className="signupBtn">SIGN UP</button>
                </form>
                    <p className="acctLinkRegister">already have an account <Link to="/">login</Link></p>
            </div>
            </section>
            
        </div>
        
     );
}
 
 
export default Signup;