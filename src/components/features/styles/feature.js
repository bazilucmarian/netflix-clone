import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 165px 45px;
`;
export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 40px;
  font-weight: 500;
  margin: 0 auto;

  @media (max-width: 600px) {
    font-size: 25px;
  }
`;
export const Subtitle = styled.h2`
  color: white;
  max-width: 640px;
  font-size: 22px;
  font-weight: normal;
  margin: 15px auto;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;
