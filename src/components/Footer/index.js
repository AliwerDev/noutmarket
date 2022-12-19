import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <img src="/images/logo.svg" alt="savatcha" />
          </div>
          <div className="col-md-8 col-sm-6">
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  background-color: #f5f5f5;
`;

export default Footer;
