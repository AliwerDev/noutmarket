import React from "react";
import MyButton from "../MainBtn/MainBtn";
import CardWrapper from "./WrapperCard";

export default function Card({ img, productName, price, remove }) {
  return (
    <CardWrapper className="h-100 d-flex flex-column">
      <div className="img">
        <img src={img} loading="lazy" alt="" className="img-fluid h-100" />
        <div className="img-overlay p-3 text-right">
          <MyButton color=" me-3 styledBtn" title="Qo'shish" onClick={remove}>
            Qo'shish
          </MyButton>
        </div>
      </div>
      <div className="p-3 ">
        <p className="title mt-4">
          {productName[0].toLocaleUpperCase() +
            productName.slice(1).toLowerCase()}
        </p>
        <p className="price">{price} sum</p>
      </div>
    </CardWrapper>
  );
}
