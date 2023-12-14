import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UpcomingOrder } from "../upcoming/useGetUpcomingOrders";
import classes from "./styles/cargoDetailsStatus.module.css";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

export function CargoDetailStatus({ order }: { order: UpcomingOrder }) {
  return (
    <>
      {order?.destinations.map((destination, idx) => {
        const COUNTRY = destination.address.split(",");
        const STATE = COUNTRY[COUNTRY.length - 2];
        return (
          <div key={idx} className={classes.sections}>
            <div className={classes.icon_section}>
              <FontAwesomeIcon icon={faTruck} color="black" />
            </div>

            <div className={classes.destination_section}>
              <p className={classes.destination_nickname}>
                {destination.nickname.toLocaleUpperCase()}
              </p>
              <p className={classes.destination_state}>
                {STATE} <span className={classes.date_simplified}></span>
              </p>
              <p className={classes.address_section}>
                <span className={classes.full_address}>
                  {destination.address}
                </span>
              </p>
              <div className={classes.pill}>
                <div
                  className={
                    order.destinations[idx].show_navigation
                      ? classes.accepted
                      : classes.pending
                  }
                ></div>
                <span>
                  {order.destinations[idx].show_navigation
                    ? "Aceptado"
                    : "Pendiente"}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
