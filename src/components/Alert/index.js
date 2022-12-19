import { Alert } from "@mui/material";
import * as React from "react";
import styled from "styled-components";

export default function AlertMini({ text, open, setOpen, isTrue = true }) {
   if(open){
     setTimeout(() => {
       setOpen(false)
     }, 2000)
   }

  return (
    <AlertWrapper className={!open && "hide"}>
      <Alert variant="filled" severity={isTrue ? "success" : "danger"}>{text}</Alert>
    </AlertWrapper>
  );
}
const AlertWrapper = styled.span`
  position: fixed;
  bottom: 30px;
  left: 30px;
  z-index: 99999;
  transition: all 1s  ease-in-out;
  &.hide{
    left: 120% !important;
    bottom: 30px !important;
  }
`;