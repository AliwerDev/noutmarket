import styled from "styled-components";
import colors from "../../style/colors";

const CardWrapper = styled.div`
  transition: 0.2s;
  .img {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
    flex: 1;

    img {
      object-fit: cover;
      height: 100px;
    }

    .img-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background: rgba(45, 45, 45, 0.5);
      backdrop-filter: blur(3px);
      opacity: 0;
      transition: 0.5s;
      font-size: 12px !important;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
    }

    &:hover {
      .img-overlay {
        opacity: 1;
      }
    }
  }

  .title {
    text-align: left;
    font-size: 18px;
    font-weight: bold;
    color: ${colors.dark};
  }

  .price {
    text-align: left;
    font-weight: 600;
    font-size: 16px;
    color: rgba(40, 42, 48, 0.7);
  }
  &:hover {
    transform: translatey(-12px);
  }
`;

export default CardWrapper;
