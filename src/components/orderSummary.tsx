import { UpcomingOrder } from "../upcoming/useGetUpcomingOrders";
import FCL from "../assets/freight.svg";
import FTL from "../assets/container-truck.svg";
import { OverviewButton, StartPickupButton } from "./buttons";
import { PickupData } from "./pickupData";

const TRANSPORT_TYPES = [
  { type: "FTL", image: FTL },
  { type: "FCL", image: FCL },
];

export function OrderSummary({ order }: { order: UpcomingOrder }) {
  return (
    <>
      <p className="order_title">
        Orden <b>#{order.order_number}</b>
      </p>
      <div className="card">
        <div className="row">
          <span className="order_type">
            <img
              src={
                TRANSPORT_TYPES.find((transpot) => transpot.type === order.type)
                  ?.image
              }
            />
            {order.type}
          </span>
          <div className="order_status">
            <div className={`status_circle ${order.status_class}`}></div>
            {order.status_string}
          </div>
        </div>
        <hr></hr>
        <PickupData order={order}></PickupData>
        <div className="row">
          <StartPickupButton order={order} />
          <OverviewButton order={order} />
        </div>
      </div>
    </>
  );
}
