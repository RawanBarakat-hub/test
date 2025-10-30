import { Navigate, Outlet } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"

const Root = ({token}) => {
        return (token?
        <div>
            <NavBar/>
            <Outlet/>
        </div>
        :
        <Navigate to="/login"/>
    )
}

export default Root