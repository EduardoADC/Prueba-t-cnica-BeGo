import { useNavigate } from "react-router-dom";
import EYE from "../assets/eye.svg";
import { UpcomingOrder } from "../upcoming/useGetUpcomingOrders";
import classes from "./styles/buttons.module.css";

export function OverviewButton({ order }: { order: UpcomingOrder }) {
  const navigate = useNavigate();
  return (
    <button
      className={classes.overview}
      onClick={() => navigate(`/${order._id}`)}
    >
      Resumen <img src={EYE} />
    </button>
  );
}

export function StartPickupButton({ order }: { order: UpcomingOrder }) {
  // const timeUntil = Date.now() - order.start_date;
  // console.log(timeUntil / 1000);
  let date = new Date(order.start_date);
  return (
    <button
      className={classes.start_pickup}
      onClick={() => alert(`Navegar orden ${order.order_number}`)}
    >
      Iniciar entrega en{" "}
      <span className={classes.start_date}>{date.toLocaleTimeString()}</span>
    </button>
  );
}
