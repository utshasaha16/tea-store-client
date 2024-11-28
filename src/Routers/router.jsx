import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import AllTea from "../Components/AllTea/AllTea";
import AddTea from "../Components/AddTea/AddTea";
import UpdateTea from "../Components/UpdateTea/UpdateTea";


const router = createBrowserRouter([
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
            },
            {
                path: "/updateTea/:id",
                element: <UpdateTea></UpdateTea>,
                loader: ({params}) => fetch(`http://localhost:5000/tea/${params.id}`)
            }
        ]
    }
])


export default router;