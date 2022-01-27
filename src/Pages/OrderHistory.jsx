import Header from "../library/components/Header";
import OrderGrid from "../library/components/OrderGrid";
import orders from "../services/orders";
const OrderHistory = () => {
  return (
    <>
      <Header />
      <OrderGrid values={orders} />;
    </>
  );
};

export default OrderHistory;
