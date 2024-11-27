import { Link, Outlet } from "react-router-dom";


const Home = () => {
    return (
        <div >
            <nav className="text-xl font-medium text-center space-x-4 bg-purple-600">
                <Link to="/">Home</Link>
                <Link to="/allTea">All Tea</Link>
                <Link to="/addTea">Add Tea</Link>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;