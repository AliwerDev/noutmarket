import {
  faArrowAltCircleDown,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setUserData, signOutUser } from "../../firebase/functions";

export default function Profile() {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);

  const { register, reset, handleSubmit } = useForm({
    defaultValues: userData || {},
  });
  const submit = (data) => {
    setUserData(data, data.uid);
  };
  const signOut = () => {
    signOutUser((data) => console.log(data));
    navigate("/");
  };
  return (
    <ProfileWrapper className="py-5">
      <h3 className="mb-4 mt-3 d-flex justify-content-between">
        Profile{" "}
        <button className="signOut" onClick={signOut}>
          <FontAwesomeIcon icon={faArrowAltCircleDown} /> Sign Out
        </button>
      </h3>
      <div className="row justify-content-around py-4">
        <div className="col-md-4 col-sm-6 me-4">
          <h4 className="">
            Ma'lumot <span className="role">({userData.role})</span>
          </h4>

          <div className="info py-3">
            <h5 className="text-center">+ {userData.phone}</h5>

            <form onSubmit={handleSubmit(submit)}>
              <div className="row mb-5">
                <div className="col-md-12 mb-3">
                  <input
                    className="form-control w-100"
                    placeholder="To'liq ismingiz"
                    {...register("fullName", { required: true })}
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <textarea
                    className="form-control w-100"
                    placeholder="Manzilingiz"
                    type={"text"}
                    {...register("location", { required: true })}
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <input
                    className="form-control w-100"
                    type={"number"}
                    placeholder="Yoshingiz"
                    {...register("age", { required: true })}
                  />
                </div>
              </div>
              <div className="text-center">
                <button className="w-100 btn styledBtn" type="submit">
                  Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ProfileWrapper>
  );
}

const ProfileWrapper = styled.div`
  .ballCup {
    font-size: 50px;
  }
  .signOut {
    border: none;
    outline: none;
    background: none;
    color: #d61216;
    font-size: 18px;
    font-weight: bold;
  }
  .role {
    font-size: 18px;
    color: #d61216;
  }
`;
