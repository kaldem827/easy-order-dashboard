import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/Context";
import { CardsContainer } from "./Components/CardsContainer";
import { Search } from "./Components/Search";
import { TablesAndOtherContainer } from "./Components/TablesAndOtherContainer";
import "./Home.css";
import axios from "axios";
import { Overlay } from "./Components/Overlay";
import { Modal } from "./Components/Modal";
const url = "http://www.easyorder.com.mz:8080";

export const Home = () => {
  const { setTables } = useGlobalContext();
  async function getTables() {
    const res = axios.get();
  }
  useEffect(() => {});
  return (
    <div className="left home">
      <Search />
      <CardsContainer />

      <TablesAndOtherContainer />
      <Overlay>
        <Modal />
      </Overlay>
    </div>
  );
};
