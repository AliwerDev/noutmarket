import {
  faArrowRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import HeaderWrapper from "./HeaderWrapper";

const Header = ({ setOpen, ...props }) => {
  const navigate = useNavigate();

  const userData = useSelector((state) => state.userData);

  return (
    <HeaderWrapper>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between  align-items-center">
          <div className="d-flex justify-content-start">
            <img src="/images/logo.svg" width="160px" alt="savatcha" />
          </div>
          <form className="search-form">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              style={{ width: "300px" }}
              {...props}
            />
          </form>
          <div>
            {(userData.uid && (
              <button
                onClick={() => {
                  navigate("/admin");
                }}
                className="styledBtn"
              >
                <FontAwesomeIcon icon={faArrowRightFromBracket} />{" "}
                {userData.fullName}
              </button>
            )) || (
              <button
                className="styledBtn"
                onClick={() => {
                  setOpen(true);
                  navigate("/signin");
                }}
              >
                <FontAwesomeIcon icon={faArrowRightFromBracket} /> Kirish
              </button>
            )}
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
