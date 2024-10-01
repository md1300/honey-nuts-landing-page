import { useContext, useEffect, useState } from "react";
import Navber from "../../Share/Navber";
import { AuthContext } from "../../Provider/AuthProvider";



const CustomerOrders = () => {
    const {user}=useContext(AuthContext)   
    const [myOrders,setMyOrders]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/myOrder/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setMyOrders(data)})
    },[user])
     
    console.log(myOrders)

    return (
        <div>
            <Navber/>
            <p>the total number of order is : {myOrders.length} </p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
           {
            myOrders.map(myOrder=><div className="card  border border-red-300" key={myOrder._id}>
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