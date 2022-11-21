import React from "react";

export const OrderItem = ({ mesa, pedidos, valor, status }) => {
  return (
    <div className="order-item">
      <span>{mesa}</span>
      <span>{pedidos}</span>
      <span>{valor}</span>
      <span>{status}</span>
    </div>
  );
};
