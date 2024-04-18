import { useEffect, useState } from "react";

type Delivery = {
    id: number;
    deliveryDate: Date;
    fromWarehouse: string;
    destination: string;
};

export default function DeliveryList() {
  const [delivery, setDelivery] = useState<Delivery[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8089/deliveries", {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });
        const data = await response.json();
        setDelivery(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  console.log("Delivery:", delivery);

  return (
    <div>
      <h1>Delivery List</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Delivery Date</th>
              <th>Destination</th>
              <th>Warehouse</th>
            </tr>
          </thead>
          <tbody>
            {delivery.map((delivery) => (
              <tr key={delivery.id}>
                <td>
                  {new Date(delivery.deliveryDate).toLocaleDateString(undefined, {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </td>
                <td>{delivery.destination}</td>
                <td>{delivery.fromWarehouse}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
