import { useContext, useEffect, useState } from "react";
import CustomerDetails from "./CustomerDetails";
import { AuthContext } from "../Provider/AuthProvider";


const Author = () => {
      const [customersData,setCustomersData]=useState([])
      const {user,}=useContext(AuthContext)

      useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/jabir/${user?.email}`,{credentials:'include'})
        .then(res=>res.json())
        .then(data=>{
            
            console.log(data)
            setCustomersData(data)})
      },[user])


    return (
        <div>
            <h1 className="text-3xl text-center mb-5 font-medium">the total number of order : {customersData.length}</h1>
            <div className="grid  lg:grid-cols-3 gap-2">
            {
                customersData.map(customerData=><CustomerDetails 
                    key={customerData._id}
                    customerData={customerData}
                    customersData={customersData}
                    setCustomersData={setCustomersData}
                ></CustomerDetails>)
            }
            </div>
        </div>
    );
};

export default Author;