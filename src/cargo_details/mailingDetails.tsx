import { UpcomingOrder } from "../upcoming/useGetUpcomingOrders";
import { CargoDetailStatus } from "./cargoDetailsStatus";

export function MailingDetails({ order }: { order: UpcomingOrder }) {
  return (
    <div className="card">
      <div className="row">
        <p className="order_title">
          Orden <b>#{order?.order_number}</b>
        </p>
      </div>
      <CargoDetailStatus order={order ?? null}></CargoDetailStatus>
    </div>
  );
}
