import { useParams } from "react-router-dom"

const Service = () => {
    const params=useParams()
    console.log(params)
    return (
        <div>
            <p>Hello from service {params.serviceName}</p>
        </div>
    )
}

export default Service