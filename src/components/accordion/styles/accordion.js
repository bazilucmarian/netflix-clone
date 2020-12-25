import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;
export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 70px 45px;
  margin: auto;
`;
export const Item = styled.div`
  color: white;
  margin-bottom: 10px;
  max-width: 670px;

  &:first-of-type {
    margin-top: 2rem;
  }
`;
export const Body = styled.div`
  font-size: 16px;
  font-weight: normal;
  line-height: 1.5;
  width: 600px;
  border-top: 1px solid gray;
  background: #303030;
  padding: 0.5rem 1rem;
  white-space: pre-wrap;
  user-select: none;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-size: 20px;
  width: 600px;
  font-weight: normal;
  background: #303030;
  align-items: center;
  padding: 1rem 1rem;

  &:active {
    opacity: 0.9;
  }

  img {
    filter: brightness(0) invert(1);
    width: 16px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  line-height: 1.1;

  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 25px;
  }
`;
