import styled from 'styled-components';

const LogInWrapper = styled.div`
  background: #fff;
  .text-filed{
      border: none;
      outline: none;
      background: none;
      width: 100%;
  }
  .styledBtn{
    display: block;
    text-align: center;
    width: 100%;
    margin-top: 20px;
  }
  fieldset{
    border: none;
    outline: none !important;
  }
  input{
    border-bottom: 2px solid #dedede;
  }
  a{
    background: none !important;
    text-decoration: none;
    font-size: 16px !important;
  }
  input, p{
    font-size: 18px !important;
  }
`;

export default LogInWrapper;