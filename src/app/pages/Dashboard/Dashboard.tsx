
import { Link } from "react-router-dom"
export const Dashboard = () =>{
    return (
        <div className="container">
        <p>Dash</p>
        <Link to={"/entrar"}>Login</Link>
        </div>
    )
}