import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PENDENTE } from "../../../constants/constants";
import { useGlobalContext } from "../../../context/Context";
import { Card } from "./Card";
import { OrderItem } from "./OrderItem";

export const TablesAndOtherContainer = () => {
  const { overlayShowing, orders, setOverlayShowing, setCurrentOrderInfo } =
    useGlobalContext();

  function loadModalItems(order) {
    console.log(order);
    setCurrentOrderInfo({
      table: order.mesa,
      value: order.valor,
      status: order.status,
      meals: order.pedidos,
    });
  }

  return (
    <div className="orders">
      <Card width="700px" height={"auto"}>
        <div className="order-management">
          <div className="title">
            <h2>Gestão de Pedidos</h2>
            <span className="btn">View All</span>
          </div>

          <table>
            <thead>
              <tr>
                <td>Mesa</td>
                <td>Pedidos</td>
                <td>Valor</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, i) => (
                <tr key={i}>
                  <td>{order.mesa}</td>
                  <td>{order.pedidos.length > 0 ? order.pedidos.length : 8}</td>
                  <td>{order.valor}</td>
                  <td>
                    {order.status === PENDENTE ? (
                      <span className="status waiting"></span>
                    ) : (
                      <span className="status ready"></span>
                    )}
                  </td>

                  <td>
                    <span
                      onClick={() => {
                        setOverlayShowing(true);
                        loadModalItems(order);
                      }}
                      className="action-btn info"
                    >
                      info
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {orders.length === 0 && (
            <p className="no-orders">No ordes at the moment</p>
          )}
        </div>
      </Card>
    </div>
  );
};
