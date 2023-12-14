import { UpcomingOrder } from "../upcoming/useGetUpcomingOrders";
import classes from "./styles/pickupData.module.css";

export function PickupData({ order }: { order: UpcomingOrder }) {
  return (
    <>
      {order?.destinations.map((destination, idx) => {
        const COUNTRY = destination.address.split(",");
        const STATE = COUNTRY[COUNTRY.length - 2];
        const DATE = new Date(destination.start_date);
        return (
          <div key={idx} className={classes.destination_section}>
            <p className={classes.destination_nickname}>
              {destination.nickname.toLocaleUpperCase()}
            </p>
            <p className={classes.destination_state}>
              {STATE}{" "}
              <span className={classes.date_simplified}>
                {DATE.toLocaleDateString()}
              </span>
            </p>
            <p className={classes.address_section}>
              <span className={classes.full_address}>
                {destination.address}{" "}
              </span>
              <span
                className={classes.hour_estimate}
              >{`${DATE.getHours()}:${DATE.getMinutes()}`}</span>
            </p>
          </div>
        );
      })}
    </>
  );
}
