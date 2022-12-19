import styled from "styled-components";

const TitleWrapper = styled.div`
  p {
    font-weight: 600;
    font-size: 24px;
  }
  h1 {
    /* -webkit-text-fill-color: white;
    -webkit-text-stroke: 2px black; */
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    font-size: calc(2.5rem + 4.5vw);
  }
`;

export default function Title({ title }) {
  return (
    <TitleWrapper className="container pt-5 pb-4 mt-2 text-center">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-9 col-xl-8">
          <p>Barchasini ko’rish / qo’shish / o’zgartirish / o’chirish paneli</p>
          <h1>{title}</h1>
        </div>
      </div>
    </TitleWrapper>
  );
}
