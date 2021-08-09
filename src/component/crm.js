import {useState} from 'react'
import { BsTrash } from "react-icons/bs";

const Crm = () => {

    const [crmForm , setCrmForm] = useState({DevName:''})
    const[devRole, setDevRole] = useState({})
    const[data, setData] = useState([])
    // const[color, setColor] = useState('#004040')

    const staff = (e) => {
        const value = e.target.value
        const name = e.target.name
        setCrmForm({...crmForm , [name] : value})
    }

    const radioStaff = (e) => {
        const value = e.target.value
        const name = e.target.name
        // setDevRole({...devRole, [name] : value})
        setDevRole({[name] : value})
    }
    // const colorChange = () => {
    //     let radioBtn = `${color} ? 'blackBtn' : 'whiteBtn'`
    //     setColor(!radioBtn)
    // }

    const devProfile = (e) => {
        e.preventDefault()
        const newDevData = {...devRole,...crmForm,id:new Date().getTime().toString()}
        setData([...data,newDevData])
        setCrmForm({DevName:''})
        setDevRole({})
    }

    const removeDev = (id) => {
       const dev =  data.filter((person) => person.id !==id)
       setData(dev)
        // console.log('rmv')
    }

    return ( 
        <div className="crmBody">
        <section className="crmBlock">
            <form onSubmit={devProfile}>
                <input type="text" 
                    className="devName"
                    placeholder="tech name" 
                    maxLength="20"
                    name="DevName" 
                    value={crmForm.DevName} 
                    onChange={staff}
                 />
                    {/* radio type section  */}
                <section className="radioBlock">
                <div className="rBTN">
                    <input type="radio" 
                        className="selectedDev"
                        checked={devRole === 'developer'}  
                        id="developer"
                        name="role" 
                        value='developer' 
                        onChange={radioStaff}
                        // style={{backgroundColor : true ? 'blue' : 'black'}}
                        // onClick={colorChange}
                        />
                    <label htmlFor="developer">Developer</label>
                 </div>
                 <div className="rBTN">
                    <input type="radio" 
                        className="selectedDev"
                        checked={devRole === 'designer'}  
                        id="designer"
                        name="role" 
                        value='designer'
                        onChange={radioStaff}
                        // style={{backgroundColor : true ? 'blue' : 'black'}}
                        // onClick={colorChange}
                        />
                    <label htmlFor="designer">Designer</label>
                 </div>
                    {/* <br /> */}
                    <div className="rBTN">
                        <input 
                            type="radio"  
                            className="selectedDev"
                            checked={devRole === 'devops'}  
                            id="devops"
                            name="role" 
                            value='devops'
                            onChange={radioStaff}
                            // style={{backgroundColor : true ? 'blue' : 'black'}}
                            />
                         <label htmlFor="devops">Devops</label>
                        </div>

                        <div className="rBTN">
                            <input type="radio" 
                                className="selectedDev" 
                                checked={devRole === 'dbadmin'}
                                id="dbadmin"
                                name="role" 
                                value='dbadmin' 
                                onChange={radioStaff}
                                // style={{backgroundColor : true ? 'blue' : 'black'}}
                                />
                            <label htmlFor="dbadmin">Db-Admin</label>
                        </div>
                </section>
                <button className="addDev" style={{backgroundColor:'blue', color:'white'}}>+ Add Dev</button>
            </form>
            </section>
                {/* display form data  */}
            <div>
                {data.map((person) => {
                    const{role,DevName,id} = person
                    return(
                        <div key={id} className="devInfo">
                            <section >
                                <h4>{DevName}</h4>
                                <p className="devPara">#{role}</p>
                            </section>
                            <section className="devRmv">
                                <button onClick={() => removeDev(id)}>
                                    <BsTrash />
                                </button>
                            </section>
                        </div>
                    )
                })}
            </div>
        
        </div>
     );
}


// challenges -> radio btn not getting background color 
 
export default Crm;