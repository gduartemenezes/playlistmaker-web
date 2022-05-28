import styled from "styled-components";
type CustomButtonProps = {
  backgroundColor?: string;
  customWidth?: string;
  textColor?: string;
};
export const CustomButton = styled.button<CustomButtonProps>`
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#7FA429"};
  display: flex;
  width: ${(props) => props.customWidth};
  max-width: 350px;
  height: 48px;
  justify-content: center;
  align-items: center;
  padding: 11px 22px;
  border: 0;
  box-shadow: 0px 8px 16px rgba(0, 79, 171, 0.24);
  border-radius: 10px;

  color: ${(props) => (props.textColor ? props.textColor : "#FFFFFF")};
  font-weight: bold;
  font-size: 15px;
  line-height: 26px;
  cursor: pointer;

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.85);
  }
`;
