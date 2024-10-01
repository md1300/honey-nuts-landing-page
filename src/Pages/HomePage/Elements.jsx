import { FaRegHandPointRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const Elements = ({handleCurrentRef}) => {
    return (
        <div>
            <h1>this is element section </h1>
            <h1>যে  উপাদানগুলো ব্যবহার করা হয়েছে আমাদের হানি নাটস তৈরিতে </h1>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
                <div className="bg-gray-300 max-w-80 p-5  border-4 border-black ">
                     <h1 className="text-2xl text-center">মধু:</h1>
                     <p>মধু একটি প্রাকৃতিক খাবার। এতে প্রায় ৪৫টি খাদ্য উপাদান বিদ্যমান। মধু শরীরে তাপ শক্তি যুগিয়ে শরীরকে সুস্থ রাখে,হজমে সহায়তা করে, কোষ্ঠকাঠিন্য দূর করে।</p>
                </div>
                <div className="bg-gray-300 max-w-80 p-5  border-4 border-black ">
                <h1 className="text-2xl text-center">বাদাম:</h1>
                <p>বাদাম পুষ্টগুণ সম্পূর্ণ একটি খাবার, বাদামে রয়েছে ওমেগা ৩,ভিটামিন A,ফসফরাস,ফাইবারসহ প্রযোজনীয় উপাদান।আমরা ব্যবহার করেছি, কাঠ বাদাম,পোস্তা বাদাম,ও চিনা বাদাম।</p>
                </div>
                <div className="bg-gray-300 max-w-80 p-5  border-4 border-black ">
                <h1 className="text-2xl text-center">খেজুর: </h1>
                <p>খেজুর ফলকে চিনির বিকল্প হিসাবে ধরা হয়। খেজুর শক্তির একটি ভালো উৎস। খেজুর শরীরের ক্লান্তিভাব দূর করতে সাহায্য করে।</p>
                </div>
                <div className="bg-gray-300 max-w-80 p-5  border-4 border-black ">
                <h1 className="text-2xl text-center">কুমড়োর বীজ  </h1>
                <p> কুমড়োর বীজে প্রচুর পরিমাণে অ্যান্টিঅক্সিডেন্ট, ম্যাগনেশিয়াম,জিংক ও ফ্যাটি এসিড থাকে।কুমড়োর বীজে প্রচুর ক্যালরি আছে এবং এগুলো প্রোটিন সমৃদ্ধ।যা রোগ প্রতিরোধ ক্ষমতা বাড়ায়।</p>
                </div>
                <div className="bg-gray-300 max-w-80 p-5  border-4 border-black ">
                     <h1 className="text-2xl text-center">আখরোটে</h1>
                     <p>আখরোটে রয়েছে স্নেহ, ফাইবার,প্রোটিন এর মত উপাদান। যা আমাদের   হৃদপিণ্ড ভাল রাখার পাশাপাশি ত্বক ভাল রাখে</p>
                </div>
                <div className="bg-gray-300 max-w-80 p-5  border-4 border-black ">
                <h1 className="text-2xl text-center">আখরোটে</h1>
                <p>আখরোটে রয়েছে স্নেহ, ফাইবার,প্রোটিন এর মত উপাদান। যা আমাদের   হৃদপিণ্ড ভাল রাখার পাশাপাশি ত্বক ভাল রাখে</p>
                </div>
                <div className="bg-gray-300 max-w-80 p-5  border-4 border-black ">
                     <h1 className="text-2xl text-center">আলুবোখারা</h1>
                     <p>ক্যালসিয়াম, আয়রন, পটাশিয়াম, ম্যাগনেশিয়াম, ফ্যাট,প্রোটিন, ভিটামিন এ,বি,সি,কে,ই এর মত উপাদান।</p>
                </div>
                <div className="bg-gray-300 max-w-80 p-5  border-4 border-black ">
                     <h1 className="text-2xl text-center">কিসমিস</h1>
                     <p>কিসমিসে রয়েছে কার্বোহাইড্রেট,আশ,চিনি,ভিটামিন এ,সি,কে,আয়রন, ম্যাগনেশিয়াম ও পটাশিয়াম এর মত গুরুত্বপূর্ণ উপাদান। 
                      </p>
                </div>
            </div>
{/* ------------------click order button ----------------- */}
<div className="my-24 ">
           <Link onClick={handleCurrentRef}><div className="grid justify-items-center" >
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