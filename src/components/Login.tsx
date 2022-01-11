import { useState } from "react"
//
import axios from "axios"

// styles
import "../styles/login.css"


type LoginProps = {
    setIsAuth: any
}

const Login = ({setIsAuth}: LoginProps) => {
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()


    const onHandleLogin = async() => {
        await axios.get(`http://localhost:3001/users?email=${email}&password=${password}`)
            .then((res: any) => {
                if(res.data.length > 0) {
                    setIsAuth(true)
                    localStorage.setItem("user", JSON.stringify(res.data[0]))
                }
            })
            .catch(e => console.log(`error login ${e}`))
    }



    return (
        <div className="login">
            <h2>Login</h2>
            <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email" 
                placeholder="Email" />
            <input 
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password" 
                placeholder="Password" />
            <button onClick={onHandleLogin}>Login</button>
        </div>
    )
}

export default Login