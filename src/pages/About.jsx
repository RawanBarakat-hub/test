
import { Outlet, useLoaderData } from "react-router-dom"

const About = () => {
    const data=useLoaderData()
    return (
        <div>
            <p>Hello from about</p>
            <img src="/test/assets/react.svg" alt="s d" />
            {
                data?.map((element)=>{
                    return <div key={element.id}>
                        <h1>{element.title}</h1>
                    </div>
                })
            }
            <Outlet/>
        </div>
    )
}

export default About