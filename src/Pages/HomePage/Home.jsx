
import Header from "./Header";
import Banner from "./Banner";
import Amount from "./Amount";
import Elements from "./Elements";
import Beneficial from "./Beneficial";
import OrderForm from "./OrderForm";

import { useRef } from "react";
import Navber from "../../Share/Navber";




const Home = () => {
    const currentRef=useRef(null)
    const handleCurrentRef=()=>{
        if(currentRef.current){
            currentRef.current.scrollIntoView({behavior:'smooth',block:'end'})
        }
    }
    return (
        <div className="p-5 bg-[#d9f99d]">
            <Navber></Navber>
            <h1 className="text-2xl text-center">this is home page</h1>
            <Header></Header>
            <Banner></Banner>
            <Amount handleCurrentRef={handleCurrentRef} ></Amount>
            <Elements handleCurrentRef={handleCurrentRef}></Elements>
            <Beneficial></Beneficial>
            <OrderForm ref={currentRef}></OrderForm>
            
           
        </div>
    );
};

export default Home;