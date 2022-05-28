import styled from "styled-components";
export const InfoDiv = styled.div`
  display: flex;
  padding: 20px;
  margin: 0 auto;

  h5,
  strong {
    color: var(--green);
    font-size: 1rem;
  }
  span {
    font-size: 0.8rem;
    font-weight: 300;
    color: var(--green);
  }
`;

export const Container = styled.div`
  width: 80%;
  padding: 20px;
  color: #000000;
  margin: auto;
  border-top: 1px solid #eee;
  div {
    width: 600px;
    margin: 10px auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    input {
      min-width: 300px;
    }
    @media (max-width: 768px) {
      flex-direction: column;
    }
    h5,
    strong {
      color: var(--green);
      font-size: 1rem;
    }
  }
`;
