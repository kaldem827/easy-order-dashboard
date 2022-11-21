import React, { useEffect } from "react";
import { Card } from "./Card";
import ReadyIcon from "../../../assets/images/dinner (1).png";
import WaitingIcon from "../../../assets/images/espera.png";
import ServedIcon from "../../../assets/images/atendimento-ao-cliente.png";
import AvailableIcon from "../../../assets/images/ponto-de-encontro.png";
import { useGlobalContext } from "../../../context/Context";
import { PENDENTE, PRONTO, RESERVADA } from "../../../constants/constants";
export const CardsContainer = () => {
  const [meals, setMeals] = React.useState([]);
  const { setTables, tables, orders } = useGlobalContext();
  async function getTables() {
    try {
      const response = await fetch(
        "http://www.easyorder.co.mz:8082/restaurant/1/tables"
      );
      const tables = await response.json();
      return tables;
    } catch (error) {
      console.log("failed to fetch tables");
    }
  }

  useEffect(() => {
    getTables().then((tables) => {
      console.log(tables);
    });
  });
  return (
    <div className="cards-container">
      <Card>
        <div>
          <h1>{orders.filter((order) => order.status === PRONTO).length}</h1>
          <h3>Refeições prontas</h3>
        </div>
        <div className="icon-case">
          <img src={ReadyIcon} alt="" />
        </div>
      </Card>
      <Card>
        <div className="box">
          <h1>{tables.filter((table) => table.status === PENDENTE).length}</h1>
          <h3>Mesas em espera</h3>
        </div>
        <div className="icon-case">
          <img src={WaitingIcon} alt="" />
        </div>
      </Card>
      <Card>
        <div className="box">
          <h1>{tables.filter((table) => table.status === RESERVADA).length}</h1>
          <h3>Mesas Reservadas</h3>
        </div>
        <div className="icon-case">
          <img src={ServedIcon} alt="" />
        </div>
      </Card>
      <Card>
        <div className="box">
          <h1>
            {tables.filter((table) => table.status === "Disponivel").length}
          </h1>
          <h3>Mesas Disponiveis</h3>
        </div>
        <div className="icon-case">
          <img src={AvailableIcon} alt="" />
        </div>
      </Card>
    </div>
  );
};
