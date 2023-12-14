import { useEffect, useState } from "react";

type Destination = {
  address: string;
  end_date: number;
  nickname: string;
  show_navigation: boolean;
  start_date: number;
};

export type UpcomingOrder = {
  driver: string;
  driver_thumbnail?: string;
  end_date: number;
  is_today: boolean;
  manager: string;
  order_number: string;
  start_date: number;
  status: 1 | 2 | 3 | 4;
  status_class: string;
  status_string: string;
  type: string;
  version: string;
  _id: string;
  destinations: Destination[];
};

export function useUpcomingOrders() {
  const [data, setData] = useState<UpcomingOrder[]>([]);

  useEffect(() => {
    const fetchUpcomingOrders = async () => {
      const response = await fetch(
        "https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders/upcoming"
      );
      const orders = await response.json();
      const ordersArray = orders.result;
      setData(ordersArray);
      // TODO: Remove
      // console.log(data);
    };
    fetchUpcomingOrders();
  }, []);

  return { upcomingOrders: data };
}
