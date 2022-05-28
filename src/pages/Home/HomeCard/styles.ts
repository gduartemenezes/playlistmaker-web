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
  background: #eee;
  padding: 20px;
  color: #000000;
  .rene {
    color: #000000;
  }
`;
