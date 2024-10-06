import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../Provider/AuthProvider";



const CustomerOrders = () => {
    const {user}=useContext(AuthContext)   
    const [myOrders,setMyOrders]=useState([])

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/myOrder/${user?.email}`,{credentials:'include'})
        .then(res=>res.json())
        .then(data=>{
            console.log(data)

            setMyOrders(data)})
    },[user])
     
    console.log(myOrders)

    return (
        <div>
            
            <h1 className="text-3xl text-center mb-4 font-semibold">the total number of order is : {myOrders.length} </h1>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 ">
           {
            myOrders.map(myOrder=><div className="card p-6  border border-red-300 bg-white text-black" key={myOrder._id}>
                <h1>name:{myOrder.name}</h1>
                <h3>phoneNumber: {myOrder.phoneNumber}</h3>
                <div className="flex justify-between">
                <p>price : {myOrder.price} </p>
                <p>quantity : {myOrder.quantity} </p>
                </div>
            </div>)
        }
        </div>
        </div>
    );
};

export default CustomerOrders;