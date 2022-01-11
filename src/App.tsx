import { useState, useEffect } from "react"

// types
import { TUser } from "./@types/user";

// components
import { Login, PersonalAccount } from "./components";

// styles
import './styles/app.css'



function App() {
  const [user, setUser] = useState<TUser>()
  const [isAuth, setIsAuth] = useState<boolean>(false)

  useEffect(() => {
    const userLocal = localStorage.getItem("user")

    if(userLocal) {
      setUser(JSON.parse(userLocal))
      setIsAuth(true)
    }
  }, [isAuth])

  const onHandleLogout = () => {
    localStorage.removeItem("user")
    setIsAuth(false)
  }


  return (
    <div className="app">
      {isAuth && <button className="logout" onClick={onHandleLogout}>Logout</button>}
      <div className="wrapper">
        {isAuth 
          ? <PersonalAccount user={user} />
          : <Login setIsAuth={setIsAuth} />
        }  
      </div>     
    </div>
  );
}

export default App;
