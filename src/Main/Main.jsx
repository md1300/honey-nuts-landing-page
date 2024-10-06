import { Outlet } from "react-router-dom";
import Navber from "../Share/Navber";
import Footer from "../Share/Footer";


const Main = () => {
    return (
        <div className="grid gap-6 px-5 bg-[#d9f99d]">
            <Navber/>
            <div className="min-h-[calc(100vh-134px)]">
            <Outlet/>
            </div>
            <Footer/>
            
        </div>
    );
};

export default Main;