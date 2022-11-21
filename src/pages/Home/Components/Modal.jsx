import React, { useState } from "react";
import { useGlobalContext } from "../../../context/Context";

export const Modal = () => {
  const { currentOrderInfo, setCurrentOrderInfo } = useGlobalContext();
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Detalhes do pedido</h2>
        </div>
        <div className="modal-body">
          <div className="modal-body-left">
            <h3>Mesa: {currentOrderInfo.table}</h3>
            <h3>Valor: {currentOrderInfo.value} MZN</h3>
            <h3>Status: {currentOrderInfo.status}</h3>
          </div>
          <div className="modal-body-right">
            <h3>Itens do pedido:</h3>
            <ul>
              {currentOrderInfo.meals.map((meal, i) => (
                <li key={i}>{meal}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
