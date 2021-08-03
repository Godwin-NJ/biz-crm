import React,{useState} from 'react'

const Login = () => {

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
        <div className="formBorder">
            <form onSubmit={handleSubmit} className="formAlign">
                {/* username  */}
            <label htmlFor="username">Username</label>
            <input type="text" value={formData.username} placeholder="enter username" name="username" onChange={handleChange}/>
                {/* email */}
            <label htmlFor="email">Email</label>
            <input type="email" value={formData.email} placeholder="enter email"  name="email" onChange={handleChange}/>
                {/* password  */}
            <label htmlFor="pwd">Password</label>
            <input type="password" value={formData.password} name="password" onChange={handleChange}/>
                <button type="submit">Login</button>
            </form>

           {/* {people.map((person) => person.name)} */}
        </div>
        
     );
}
 
export default Login;