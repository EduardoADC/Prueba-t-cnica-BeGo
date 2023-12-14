import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { UpcomingOrders } from "./upcoming/upcoming";
import { CargoDetails } from "./cargo_details/cargoDetails";

export default function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<UpcomingOrders />} />
        <Route path="/:orderId" element={<CargoDetails />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
