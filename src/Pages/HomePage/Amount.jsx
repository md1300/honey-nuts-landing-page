
import { FaRegHandPointRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const Amount = ({handleCurrentRef}) => {
     
    return (
        <div className="mt-5">
        <div>
            <p className="text-center"> Amount component</p>
            <h1 className="text-2xl text-center bg-[#4ade80] my-5 p-3 border rounded-xl">হানিনাট ফুল প্যাকেজ (কাঁচের ওজন ছাড়া ৯০০ গ্রাম থাকে) প্রাইস ৮০০ টাকা, সারাদেশে ডেলিভারি চার্জ ফ্রি</h1>
        </div>
        <div className="mt-5 ">
            <Link>
        <div onClick={handleCurrentRef}  className="grid justify-items-center" >
            <div className="flex gap-3 items-center  justify-center animate-pulse bg-[#4ade80] p-2 border rounded-full w-64 ">
            <p> <FaRegHandPointRight /></p>
            <p> click here to order </p>
            </div>   
           </div> </Link>
            
        </div>
           <div className="border-4 border-black rounded-xl my-5 p-3 ">
                 <h3 className="text-xl text-black">সারাদিনের কর্মব্যস্ততা শেষে আপনি ক্লান্ত হয়ে বাসায় ফিরছেন। নিজের শারীরিক স্বাস্থ্য ও মানসিক সুস্থতার কথা যখন আপনি ভুলতে বসেছেন তখন আপনি ভরসা করতে পারেন হানি নাটস এর উপর।প্রিমিয়াম কোয়ালিটির মধুর মিশ্রণে তৈরি এই ড্রাই ফুডের মিশ্রণ আপনাকে রাখবে সুস্থ এবং সতেজ।শারীরিক সুস্থতার পাশাপাশি ভাল ঘুমের নিশ্চয়তা দিবে।</h3>
          </div>
          
          
        </div>
       
    );
};

export default Amount;