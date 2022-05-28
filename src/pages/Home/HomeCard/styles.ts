import styled from "styled-components";
export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  h5,
  strong {
    color: var(--green);
    font-size: 1rem;
  }
  span {
    font-size: 0.8rem;
    font-weight: 300;
    color: var(--gray-300);
  }
`;

export const Container = styled.div`
  width: 80%;
  padding: 20px;
  color: #000000;
  margin: auto;
  border-top: 1px solid #eee;
  div {
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    input {
      min-width: 300px;
    }
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;
