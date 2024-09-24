import img from '../../assets/honneynuts.jpg'
import { BiPhoneCall } from "react-icons/bi";

const Banner = () => {
    return (
        <div className='mt-5 relative'>
            <div>
            <img className='w-full  border rounded-lg' src={img} alt="" />
            </div>
            <div className='absolute top-4 right-96'>
                <h2 className='text-3xl text-white'>heading title</h2>
            </div>
            <div className='absolute bottom-9 left-9'>
                <h3 className='flex gap-3 items-center bg-[#4ade80] mb-2 border rounded-2xl'><span className='text-2xl p-3 '>contact us</span><span className='text-2xl p-3 '><BiPhoneCall /></span></h3>
                <h3 className='text-2xl p-3 bg-[#4ade80] border rounded-2xl'>01740408875</h3>
            </div>
        </div>
    );
};

export default Banner;