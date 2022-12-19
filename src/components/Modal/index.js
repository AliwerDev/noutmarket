import * as React from "react";
import styled from "styled-components";
import { ModalUnstyled } from "@mui/base";
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 9999999;
  height: 100vh;
  overflow-y: auto;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .times{
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    right: 20px;
    color: #fff;
  }
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export default function Modal({ open, setOpen, children, isNavigate }) {
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false)
    if(isNavigate){
      navigate("../")
    }
  };
  return (
    <div>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        className="row justifiy-content-center py-5"
      >
        <div className="col-md-6 col-sm-8 col-11 col-lg-4 position-relative">
          <IconButton className="times" onClick={handleClose}><FontAwesomeIcon icon={faTimes}/></IconButton>
          {children}
          </div>
      </StyledModal>
    </div>
  );
}
