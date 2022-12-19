import { useSelector } from "react-redux";
import styled from "styled-components";
import { doneOrder } from "../../firebase/functions";

const TableRowWrapper = styled.tr`
  background: #fffced;
  align-items: center;
  margin-bottom: 10px;
  padding: 5px 10px;
  .outlined-btn {
    background: transparent;
    color: black;
    padding: 4px 12px;
    border-radius: 10px;
    border: 0.1px solid rgba(128, 128, 128, 0.2);
    transition: 0.2s;
    &:hover {
      background: #ffec00;
    }
  }
  .done {
    background: #ffec00;
  }
`;

const TableRow = ({ order }) => {
  const userData = useSelector((state) => state.userData);
  const rols = useSelector((state) => state.rols);
  console.log(order, 'orders detail');
  const orderDetail = order[1];
  const orderId = order[0];
  function orderDelivery() {
    if (
      (userData.role === rols.yetkazuvchi && !orderDetail.done) ||
      (userData.role === rols.admin && orderDetail.done) ||
      userData.role === rols.superAdmin
    ) {
      let worker = {};
      if (userData.role === rols.yetkazuvchi) {
        worker = userData.fullName;
      }
      doneOrder(orderId, orderDetail, worker);
    }
  }
  const deleteOrder = () => {
    doneOrder(orderId, {});
  };

  return (
    <TableRowWrapper>
      <td>{orderDetail.fullName}</td>
      <td>{orderDetail.phone}</td>
      <td>{orderDetail.sum}</td>
      {orderDetail.done && <td>{orderDetail.worker || 'Super Admin'}</td>}
      <td>{Object.entries(orderDetail.products).map(([meal, amount]) => <p className="m-0">{meal} - {amount}</p>)}</td>
      <td>
        {((userData.role === rols.yetkazuvchi && !orderDetail.done) ||
          (userData.role === rols.admin && orderDetail.done) ||
          userData.role === rols.superAdmin) && (
            <button
              onClick={orderDelivery}
              className={`outlined-btn ${!orderDetail.done ? "done" : ""} `}
            >
              {orderDetail.done ? "Qaytarish" : "Yetkazildi"}
            </button>
          )}
        {((userData.role === rols.admin || userData.role === rols.superAdmin) && orderDetail.done) && (
          <button onClick={deleteOrder} className={`outlined-btn done ms-3`}>
            O'chirish
          </button>

        )}
      </td>
    </TableRowWrapper>
  );
};

export default TableRow;
