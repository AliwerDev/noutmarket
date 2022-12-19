import styled from "styled-components";
import { Button, ButtonGroup } from "@mui/material";

const Choose = ({ data, addProductToKorzina, changeSoni, setOpen }) => (
  <ChooseWrapper>
    <div className="chooseProduct bg-white shadow p-0">
      <img className="img-fluid w-100" src={data.img} alt={data.name} />
      <div className="p-3">
        <div className="content">
          <h3>{data.name}</h3>
          <p>{data.desc}</p>
        </div>
        <div className="actions text-center">
          <div className="d-flex justify-content-between aligin-items-center">
            <h4 className="price">{data.price * data.soni} sum</h4>
            <div className="btn-group d-flex align-items-center">
              <ButtonGroup
                color={"warning"}
                size="small"
                aria-label="small button group"
              >
                <Button
                  onClick={() => {
                    changeSoni(false);
                    console.log(data);
                  }}
                >
                  -
                </Button>
                <Button>{data.soni}</Button>
                <Button
                  onClick={() => {
                    changeSoni(true);
                  }}
                >
                  +
                </Button>
              </ButtonGroup>
            </div>
          </div>
          <button
            className="styledBtn"
            onClick={() => {
              addProductToKorzina(data);
              setOpen(false);
            }}
          >
            Korzinaga qo'shish
          </button>
        </div>
      </div>
    </div>
  </ChooseWrapper>
);

const ChooseWrapper = styled.div`
.price{
  font-size: 18px;
  margin-top: 20px;
}
.content{
  h3{
    font-size: 24px;
    text-transform: capitalize;
  }
  p{
    font-size: 16px;
  }
}
  .styledBtn {
    margin-top: 30px;
    width: 100%;
    font-size: 18px !important;
  }
`;

export default Choose;
