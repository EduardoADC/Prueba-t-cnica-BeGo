import { UpcomingOrder } from "../upcoming/useGetUpcomingOrders";
import classes from "./styles/cargoDetailsStatus.module.css";

export function PickupDetails({ order }: { order: UpcomingOrder }) {
  const DATE = new Date(order?.destinations[1]?.end_date);

  return (
    <div className="card">
      <div className="row">
        <p className={classes.pickup_title}>Información de Entrega</p>
      </div>
      <hr></hr>

      <div>
        <div className="row">{order?.destinations[1].address}</div>
        <div className="row">{DATE.toDateString()}</div>
        <div className="row">+1 543 169 1673</div>
        <div className="row">federico@bego.ai</div>
      </div>
    </div>
  );
}
