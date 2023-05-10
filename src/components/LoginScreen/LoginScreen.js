import { useContext, useState } from "react"
import "./LoginScreen.scss"
import { LoginContext } from "../Context/LoginContext"


const LoginScreen= ()=> {
    
    const {user, tryLogin} = useContext(LoginContext)
    
    const [values, setValues] = useState({
        email:"",
        password:""
    })

    const handleInputChange = (e) =>{

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        console.log(values)
        tryLogin(values)
    }

    return (
        <div className="login-screen">
            <div className="login">
                <h2>Login</h2>
                <hr/>

                <form onSubmit={handleSubmit}>
                    <input 
                        value={values.email}
                        type={"text"}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="tu email"
                        name="email"
                    />

                    <input
                        value={values.password}
                        type={"password"}
                        onChange={handleInputChange}
                        className="form-control my-3"
                        placeholder="Password"
                        name="password"
                    />

                    <button className="btn btn-primary" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen