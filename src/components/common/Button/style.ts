import styled from "styled-components";

interface ActiveButtonProps {
  "data-is-active"?: boolean;
  width?: string;
}

export const StyledButton = styled.button<ActiveButtonProps>`
  width: ${(props) => (props.width ? props.width : "202px")};
  height: 48px;
  margin-right: 20px;
  background: ${(props) => (props["data-is-active"] ? "#6324c6" : "#a7b0be")};
  border: transparent;
  border-radius: 8px;
  font-family: "Mulish", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`;
