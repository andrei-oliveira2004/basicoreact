import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Dashboard, Login } from "../pages";

export const Rotas = () =>{
    return ( 
        <BrowserRouter>
           <Routes>
             <Route path = "/pagina-inicial" Component ={Dashboard} />
             <Route path = "/entrar" Component ={Login} />

             <Route path = "*" Component ={()=> <Navigate to = "/pagina-inicial"/>} />

        </Routes>
        </BrowserRouter>

    )
}