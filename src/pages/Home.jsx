import { Outlet } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <p>Hello from home</p>
            <Outlet/>
        </div>
    )
}

export default Home