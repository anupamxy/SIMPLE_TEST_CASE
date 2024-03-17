import React from "react";

const Teams = (props) => {
  const { orders } = props;

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
    </div>
  );
};

export default Teams;
