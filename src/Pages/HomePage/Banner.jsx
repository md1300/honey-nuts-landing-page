import img from '../../assets/honneynuts.jpg'
import { BiPhoneCall } from "react-icons/bi";

const Banner = () => {
    return (
        <div className='mt-5 relative'>
            <div>
            <img className='w-full  border rounded-lg' src={img} alt="" />
            </div>
            <div className='absolute top-20 right-40'>
                <h2 className='hidden md:block md:text-3xl  bg-[#4ade80]'>হানির সুরেলা ছন্দে: <br /> নাটের সঙ্গে সুর মেলান!</h2>
            </div>
            <div className='absolute bottom-9 left-9'>
                <h3 className='flex gap-3 items-center bg-[#4ade80] mb-2 border rounded-2xl'><span className='text-sm md:text-2xl p-3 '>contact us</span><span className='text-2xl p-3 animate-pulse'><BiPhoneCall /></span></h3>
                <h3 className='text-sm md:text-2xl p-3 bg-[#4ade80] border rounded-2xl font-semibold'>01740408875</h3>
            </div>
        </div>
    );
};

export default Banner;