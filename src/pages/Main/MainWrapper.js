import styled from "styled-components";

const Wrapper = styled.div`
  background: #ecf0f150;
  padding-bottom: 100px;
  .category {
    text-align: left;
    font-weight: 600;
    font-size: 38px;
    margin-bottom: 35px;
  }
  main {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .tabBtn {
    background: rgb(240, 240, 240);
    width: 100%;
    display: inline-block;
    padding: 10px;
    border-radius: 10px;
    transition: background 0.25s ease-in 0s;
    text-decoration: none;
    color: black;
    &:hover {
      background: #d61216;
      color: white !important;
    }
  }
`;

export default Wrapper;
