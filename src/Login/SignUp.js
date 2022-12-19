import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LogInWrapper from "./styled";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { createUser } from "../firebase/functions";
import { useDispatch } from "react-redux";

export default function SignUp() {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data, dispatch);
    navigate("../");
    reset();
  };

  return (
    <LogInWrapper className="rounded p-4 shadow text-center">
      <h2 style={{ fontWeight: "700" }} className="mb-4">
        Ro'yxatdan o'tish
      </h2>
      <p className={"mb-2"}>NoutMarket'da akkauntingiz mavjudmi?</p>
      <NavLink to={"/signin"} className="link pb-4">
        Kirish
      </NavLink>

      <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="text-field w-100 pb-3">
          <TextField
            className="w-100"
            type={"text"}
            label={"To'liq ismingizni kiriting"}
            {...register("fullName", { required: true })}
          />
        </div>
        <div className="text-field w-100 pb-3">
          <TextField
            className="w-100"
            type={"email"}
            label={"Emailni kiriting"}
            {...register("email", { required: true })}
          />
        </div>

        <div className="text-field w-100 pb-3">
          <TextField
            className="w-100"
            type={"password"}
            label={"Passwordni kiriting"}
            {...register("password", { required: true })}
          />
        </div>

        <div className="text-field w-100">
          <TextField
            className="w-100"
            type={"number"}
            label={"Telefon no'meringizni kiriting"}
            {...register("phone", { required: true })}
          />
        </div>
        <button className="styledBtn mt-4" type="submit">
          Ro'yxatdan o'tish
        </button>
      </form>
    </LogInWrapper>
  );
}
