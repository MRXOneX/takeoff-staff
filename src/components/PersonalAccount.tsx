import { Route, Routes, NavLink } from "react-router-dom"

// components
import { Users, Friends } from './'

// types
import { TUser } from "../@types/user"

// styles 
import "../styles/personalAccount.css"



type PersonalAccountProps = {
    user: TUser | undefined
}

const PersonalAccount = ({user}: PersonalAccountProps) => {
    return (
        <div className="wrapper-person-account">
            <div className="user-name-avatar">
                <img width={250} height={250} src={user?.image} alt="avatar" />
                <span>{user?.name}</span>
                <span>{user?.email}</span>
            </div>
            <div className="contacts">
                <div className="navbar">
                    <NavLink 
                        className={(navData) => navData.isActive ? "active" : "" }
                        to="/"
                    >
                        friends
                    </NavLink>
                    <NavLink 
                        className={(navData) => navData.isActive ? "active" : "" }
                        to="/users"
                    >
                        users
                    </NavLink>
                </div>
                <div className="content-account">
                    <Routes>
                        <Route path="/" element={ <Friends /> } />
                        <Route path="/users" element={ <Users /> } />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default PersonalAccount