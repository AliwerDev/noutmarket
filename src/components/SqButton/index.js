import styled from "styled-components";

const SqButtonWrapper = styled.button`
  border-radius: 10px;
`;

export default function SqButton({ children, color, ...props }) {
  return (
    <SqButtonWrapper
      className={`btn btn-outline-${color || "dark"}`}
      {...props}
    >
      {children}
    </SqButtonWrapper>
  );
}
