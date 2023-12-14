import { useParams } from "react-router-dom";
import { useUpcomingOrders } from "../upcoming/useGetUpcomingOrders";
import { MailingDetails } from "./mailingDetails";
import { DriverDetails } from "./driverDetails";
import { PickupDetails } from "./pickupDetails";
import { Header } from "../components/header";

export function CargoDetails() {
  let { orderId } = useParams();
  const { upcomingOrders } = useUpcomingOrders();
  const orderDetail = upcomingOrders.filter((el) => el?._id === orderId)[0];
  return (
    <main>
      <Header title={"Orden #" + orderDetail?._id} />
      <MailingDetails order={orderDetail} />
      <DriverDetails order={orderDetail} />
      <PickupDetails order={orderDetail} />
    </main>
  );
}
