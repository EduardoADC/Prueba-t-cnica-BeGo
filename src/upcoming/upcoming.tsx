import { useUpcomingOrders, UpcomingOrder } from "./useGetUpcomingOrders";
import "./upcoming.css";
import { OrderSummary } from "../components/orderSummary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function UpcomingOrders() {
  const { upcomingOrders } = useUpcomingOrders();
  const [inputText, setInputText] = useState("");
  const handleSearch = (value: string) => {
    var lowerCase = value.toLowerCase();
    setInputText(lowerCase);
  };
  const filteredData = upcomingOrders.filter((el) => {
    if (inputText === "") {
      return el;
    } else return el.order_number.toLowerCase().includes(inputText);
  });

  return (
    <main>
      <div className="search_container">
        <div className="search_icon_container">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "white" }}
          />
        </div>
        <input
          className="search_bar"
          placeholder="Buscar.."
          type="search"
          onChange={(e) => handleSearch(e.target.value)}
        ></input>
      </div>
      {filteredData.map((upcomingOrder: UpcomingOrder) => {
        return (
          <div key={upcomingOrder._id} className="order">
            <OrderSummary order={upcomingOrder}></OrderSummary>
          </div>
        );
      })}
    </main>
  );
}
