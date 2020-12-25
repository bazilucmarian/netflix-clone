import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 80%;
  margin: 0 auto;
`;
export const Title = styled.h1`
  width: 100%;
  color: white;
  font-size: 30px;
  text-align: center;
  font-weight: 500;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;
export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
  cursor: pointer;
`;
export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;
`;
export const Item = styled.li`
  list-style: none;
  max-height: 200px;
  max-width: 200px;
  text-align: center;

  &:hover > ${Picture} {
    border: 3px solid white;
  }

  &:hover ${Name} {
    font-weight: bold;
    color: white;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
