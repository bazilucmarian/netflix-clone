import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  box-sizing: border-box;
  height: 50px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 50px;
  color: white;
  background: #e50914;
  text-transform: uppercase;
  padding: 0 32px;
  border: 0;
  font-size: 26px;
  cursor: pointer;
  &:hover {
    background: #f40612;
  }

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 35px;
    height: 35px;

    @media (max-width: 1000px) {
      width: 25px;
      height: 25px;
    }
  }
  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 12px;
  }
`;
