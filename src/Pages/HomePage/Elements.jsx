import { FaRegHandPointRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const Elements = () => {
    return (
        <div>
            <h1>this is element section </h1>
            <h1>which elements are used to produce this honey nuts premium</h1>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
                <div className="bg-gray-300 max-w-80 p-5  border-4 border-black ">
                     <h1>this is honey nuts element</h1>
                </div>
                <div className="bg-gray-300 max-w-80 p-5  border-4 border-black ">
                     <h1>this is honey nuts element</h1>
                </div>
                <div className="bg-gray-300 max-w-80 p-5  border-4 border-black ">
                     <h1>this is honey nuts element</h1>
                </div>
                <div className="bg-gray-300 max-w-80 p-5  border-4 border-black ">
                     <h1>this is honey nuts element</h1>
                </div>
                <div className="bg-gray-300 max-w-80 p-5  border-4 border-black ">
                     <h1>this is honey nuts element</h1>
                </div>
                <div className="bg-gray-300 max-w-80 p-5  border-4 border-black ">
                     <h1>this is honey nuts element</h1>
                </div>
                <div className="bg-gray-300 max-w-80 p-5  border-4 border-black ">
                     <h1>this is honey nuts element</h1>
                </div>
                <div className="bg-gray-300 max-w-80 p-5  border-4 border-black ">
                     <h1>this is honey nuts element</h1>
                </div>
            </div>
{/* ------------------click order button ----------------- */}
<div className="my-24 ">
           <Link><div className="grid justify-items-center" >
            <div className="flex gap-3 items-center  justify-center animate-pulse bg-[#4ade80] p-2 border rounded-full w-64 ">
            <p> <FaRegHandPointRight /></p>
            <p> click here to order </p>
            </div>      
           </div>
           </Link> 
            
        </div>
        </div>
    );
};

export default Elements;