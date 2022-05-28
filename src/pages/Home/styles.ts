import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  width: 100%;
  margin: auto;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #eee;
`;

export const WelcomeSection = styled.div`
  width: 100%;
  height: 387px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)),
    url(${backgroundImg});
  background-size: 1500px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  h1,
  h5,
  p,
  strong {
    color: #ffffff;
    background: transparent;
    font-size: 1.5rem;
  }
`;
