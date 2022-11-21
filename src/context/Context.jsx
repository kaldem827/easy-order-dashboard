import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const Context = ({ children }) => {
  const [currentOrderInfo, setCurrentOrderInfo] = useState({
    table: 1,
    value: 1200,
    status: "",
    meals: [
      "Feijoada na brasa",
      "Sopa de rodizio",
      "Agua Fonte gelada",
      "Coca-Cola",
    ],
  });
  const [overlayShowing, setOverlayShowing] = useState(false);
  const [popupShowing, setPopupShowing] = useState(false);
  const [orders, setOrders] = useState([]);
  const [tables, setTables] = useState([]);
  const [meals, setMeals] = useState([]);
  const values = {
    orders,
    setOrders,
    tables,
    setTables,
    setOverlayShowing,
    overlayShowing,
    currentOrderInfo,
    setCurrentOrderInfo,
    meals,
    setMeals,
    popupShowing,
    setPopupShowing,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useGlobalContext = (_) => useContext(AppContext);
