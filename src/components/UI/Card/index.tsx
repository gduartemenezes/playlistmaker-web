import React from "react";
import { Container } from "./styles";
type CardProps = {
  children: React.ReactNode;
};

const Card: React.FC<CardProps & React.HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <Container
      className={props.className}
      onClick={props.onClick}
      id={props.id}
    >
      {props.children}
    </Container>
  );
};

export { Card };

// const Button: React.FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> = ({
//   bgColor = COLORS.BLUE_BUTTON,
//   width = "100%",
//   color = COLORS.WHITE,
//   ...props
// }) => {
