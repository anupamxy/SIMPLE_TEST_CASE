import React from "react";
import { useLocation } from "react-router-dom";
import AddNote from './../components/Addnote';
import Notes from './../components/Notes';






const Teams = () => {
  const location = useLocation();
  const orders = location.state && location.state.orders;

  const ordersArray = orders && Array.isArray(orders) ? orders : [];

  console.log("Orders in Teams component:", ordersArray);

  return (
    <div>
      {ordersArray.length > 0 ? (
        <div>
          {ordersArray.map((order, index) => (
            <div key={index}>
              <p>{order.status}</p>
              {/* Render other order details */}
            </div>
          ))}
        </div>
      ) : (
        <p>No orders data available</p>
      )}
     <Notes/>
    
    </div>
  );
};

export default Teams;
