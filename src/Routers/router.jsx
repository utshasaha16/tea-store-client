import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import AllTea from "../Components/AllTea/AllTea";
import AddTea from "../Components/AddTea/AddTea";


const router = createBrowserRouter ([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: "/allTea",
                element: <AllTea></AllTea>,
                loader: () => fetch('http://localhost:5000/tea'),
            },
            {
                path: "/addTea",
                element: <AddTea></AddTea>
            }
        ]
    }
]) 


export default router;