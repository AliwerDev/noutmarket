import TableRow from "../../components/TableRow";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

const Order = () => {
  const ordersObj = useSelector((state) => state.orders);
  const orders = Object.entries(ordersObj);
  let summa = orders.reduce((first, order) => {
    if (order[1].done) return first;
    return first + order[1]["sum"];
  }, 0);

  return (
    <div className="table-cover d-flex flex-column pt-5" style={{ height: "90vh", overflow: 'auto' }}>
      <h3 className="mt-2">Arizalar</h3>
      <div className="d-flex flex-wrap align-items-center justify-content-between mb-2">
        <p className="text-secondary m-0">
          Yetib kelgan arizalarni kuzatishingiz mumkin
        </p>
        <p className="text-secondary my-0 me-3">Jami summa: {summa} so'm</p>
      </div>
      <Table striped bordered size="sm" className="orders flex-1">
        <thead>
          <tr>
            <th>F.I.O</th>
            <th>Telefon</th>
            <th>Summa</th>
            <th>Ovqatlar</th>
            <th>Holati</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => {
            if (order[1].done) return;
            return <TableRow order={order} key={i} />;
          })}
        </tbody>

      </Table>
    </div >
  );
};

export default Order;
