import { UpcomingOrder } from "../upcoming/useGetUpcomingOrders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import classes from "./styles/cargoDetailsStatus.module.css";

export function DriverDetails({ order }: { order: UpcomingOrder }) {
  const DATE = new Date(order?.start_date);

  return (
    <div className="card">
      <div className={classes.icon_circle}>
        {order?.driver_thumbnail ? (
          <img src={order?.driver_thumbnail} />
        ) : (
          <FontAwesomeIcon icon={faUser} color="black" size="xl" />
        )}
      </div>
      <div
        className={classes.hour_driver}
      >{`Hora de llegada: ${DATE.getHours()}:${DATE.getMinutes()}`}</div>
      <div className={classes.status_steps}>
        <div className={classes.row_status}>
          <div
            className={
              order?.status >= 1 ? classes.done : classes.pending_status
            }
          ></div>{" "}
          Orden creada
        </div>
        <div className={classes.row_status}>
          <div
            className={
              order?.status >= 2 ? classes.done : classes.pending_status
            }
          ></div>
          Orden aceptada
        </div>
        <div className={classes.row_status}>
          <div
            className={
              order?.status >= 3 ? classes.done : classes.pending_status
            }
          ></div>
          Recogido por {order?.driver}
        </div>
        <div className={classes.row_status}>
          <div
            className={
              order?.status >= 4 ? classes.done : classes.pending_status
            }
          ></div>
          Entrega completa
        </div>
      </div>
    </div>
  );
}
