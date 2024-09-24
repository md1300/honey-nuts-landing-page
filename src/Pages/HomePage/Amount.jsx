import { Link, } from "react-router-dom";
import { FaRegHandPointRight } from "react-icons/fa";


const Amount = () => {
    return (
        <div className="mt-5">
        <div>
            <p className="text-center"> Amount component</p>
            <h1 className="text-2xl text-center bg-[#4ade80] my-5 p-3 border rounded-xl">the advertisement of honey nuts</h1>
        </div>
        <div className="mt-5 ">
           <Link><div className="grid justify-items-center" >
            <div className="flex gap-3 items-center  justify-center animate-pulse bg-[#4ade80] p-2 border rounded-full w-64 ">
            <p> <FaRegHandPointRight /></p>
            <p> click here to order </p>
            </div>      
           </div>
           </Link> 
            
        </div>
           <div className="border-4 border-black rounded-xl my-5 p-3 ">
                 <h3 className="text-xl text-black">this is the admiring part of honey nuts</h3>
          </div>
        </div>
       
    );
};

export default Amount;