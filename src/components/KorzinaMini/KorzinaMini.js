import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

function KorzinaMini({ soni, price, click }) {
  return (
    <KorzinaMiniWrapper className="row">
      <div
        className="col-11 col-sm-10 col-md-8 col-xxl-6"
        onClick={() => {
          click();
        }}
      >
        <h3 className="text-center">
          <FontAwesomeIcon icon={faCartPlus} /> Korzinangizda{" "}
          <span>{soni}</span> ta tovar bor, summa <span>{price} sum</span>{" "}
        </h3>
      </div>
    </KorzinaMiniWrapper>
  );
}

const KorzinaMiniWrapper = styled.div`
  z-index: 9999;
  width: 100%;
  position: fixed;
  bottom: 20px;
  left: 0;
  & > div {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    cursor: pointer;
    border-radius: 15px;
    background: #d61216;
    h3 {
      color: #fff;
      font-size: 20px;
      margin: 0;
    }
    span {
      font-weight: 700;
    }
  }
`;

export default KorzinaMini;
