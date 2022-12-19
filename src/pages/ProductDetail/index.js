import React, { useContext } from "react";
import Wrapper from "./ProductDetailWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SqButton from "../../components/SqButton";
import ProductsContext from "../../contexts/ProductsContext";
import CategoriesContext from "../../contexts/CategoriesContext";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetail({ title }) {
  const { products, setProducts } = useContext(ProductsContext);
  const { categories, setCategories } = useContext(CategoriesContext);

  const params = useParams();
  console.log(params);
  const navigate = useNavigate();

  const index = params.category;

  const { register, reset, handleSubmit } = useForm({
    defaultValues: index ? products[index] : {},
  });

  const submit = (data) => {
    const t = [...products];
    console.log(data);

    if (index) {
      // products.push(data);
      setProducts(...products, data);
      // t[index] = data;
    } else {
      // t.push(data);
      categories.push(data);
      setCategories(data);
    }

    navigate("/");
  };

  return (
    <Wrapper className="text-center container">
      <form onSubmit={handleSubmit(submit)}>
        <div className="row mb-5">
          <div className="col-md-6 mb-3">
            <input
              className="form-control w-100"
              placeholder="Mahsulot rasmi"
              {...register("img", { required: true })}
            ></input>
          </div>
          <div className="col-md-6 mb-3">
            <input
              className="form-control w-100"
              placeholder="Mahsulot nomi"
              {...register("title", { required: true })}
            ></input>
          </div>
          <div className="col-md-12 mb-3">
            <textarea
              className="form-control textArea w-100"
              placeholder="Tarif"
              type="number"
              {...register("description", { required: true })}
            ></textarea>
          </div>
          <div className="col-md-6 mb-3">
            <input
              className="form-control w-100"
              placeholder="Narxi"
              {...register("price", { required: true })}
            ></input>
          </div>
          <div className="col-md-6 mb-3">
            <select
              className="form-control w-100"
              placeholder="Mahsulot nomi"
              name="category"
              {...register("category", { required: true })}
            >
              {categories.map((item, i) => (
                <option key={i} className="p-2">
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-dark styledBtn" type="submit">
            Saqlash
          </button>
        </div>
      </form>
    </Wrapper>
  );
}
