import React from "react";
import { ButtonProps } from "../../../interfaces";
import { CustomButton } from "./styles";
const Button: React.FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> = ({
  backgroundColor,
  width = "100%",
  color,
  ...props
}) => {
  return (
    <CustomButton
      backgroundColor={props.disabled ? "#CCC" : backgroundColor}
      customWidth={width}
      textColor={color}
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
    >
      {props.children}
    </CustomButton>
  );
};

export { Button };
