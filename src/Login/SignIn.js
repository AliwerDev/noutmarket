import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LogInWrapper from "./styled";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { signIn } from "../firebase/functions";

export default function SignIn() {
  const { register, reset, handleSubmit } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    signIn(data, dispatch);
    navigate("../");
    reset();
  };

  return (
    <LogInWrapper className="rounded p-4 shadow text-center">
      <h2 style={{ fontWeight: "700" }} className="mb-4">
        Kirish
      </h2>
      <p className={"mb-2"}>NoutMarket'da hali akkauntingiz mavjud emasmi?</p>
      <NavLink to={"/signup"} className="link pb-4">
        Ro'yxatdan o'tish
      </NavLink>

      <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="text-field w-100">
          <TextField
            className="mb-4 w-100"
            type={"email"}
            label={"Emailni kiriting"}
            {...register("email", { required: true })}
          />
        </div>
        <div className="text-field w-100">
          <TextField
            className="w-100"
            type={"passworn"}
            label={"Passwordni kiriting"}
            {...register("password", { required: true })}
          />
        </div>
        <button className="styledBtn mt-4" type="submit">
          Kirish
        </button>
      </form>
    </LogInWrapper>
  );
}
