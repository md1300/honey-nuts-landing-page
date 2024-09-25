

const CustomerDetails = ({customerData}) => {
    const {name,phoneNumber,address,location,email,price,quantity}=customerData ;
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
            <button className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    
    );
};

export default CustomerDetails;