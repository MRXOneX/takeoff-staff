import { useState, useEffect } from "react"

//
import axios from "axios"

// components
import { Search } from "."

// types
import { TUser } from "../@types/user" 

// styles
import "../styles/personalAccount.css"


const Users = () => {
    const [users, setUsers] = useState<TUser[]>()

    useEffect(() => {
        async function loadUsers() {
            await axios.get("http://localhost:3001/users")
                .then((res: any) => {
                    if(res.data.length > 0) {
                        setUsers(res.data)
                    } 
                })
                .catch(e => console.log(`error users ${e}`))
        }
        loadUsers()
    }, [])


    return (
        <div>
            <div className="content-header">
                <h2>Users</h2>
                <Search />
            </div>
            <div className="content">
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default Users