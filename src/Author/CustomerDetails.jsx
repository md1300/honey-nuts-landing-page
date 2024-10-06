import Swal from "sweetalert2";

       

const CustomerDetails = ({customerData,customersData,setCustomersData}) => {
  
    const {name,phoneNumber,address,location,email,price,quantity,_id}=customerData ;

    const handleDeleteButton=id=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`${import.meta.env.VITE_API_URL}/hussain/${id}`,{
                        method:'DELETE'
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        console.log(data)
                    if(data.deletedCount===1){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          }); 
                          const remainingCustomersData=customersData.filter(customer=>customer._id!==id) 
                          setCustomersData(remainingCustomersData)
                    }})
                 
                }
              });
          
        
        
        
    }

    return (
       
           <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
             <h2 className="card-title">custormer name :{name}</h2>
             <h3>phone number : {phoneNumber} </h3>
             <h3>address : {address} </h3>
             <h3>Police station/city: {location} </h3>
             <h3>email : {email} </h3>
             <div className="flex justify-between">
                <h3>Quantity :{quantity} </h3>
                <h3>Price : {price} </h3>
             </div>
            <div className="card-actions justify-end">
            <button onClick={()=>handleDeleteButton(_id)} className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    
    );
};

export default CustomerDetails;


