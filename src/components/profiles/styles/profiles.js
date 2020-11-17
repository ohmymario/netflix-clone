import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

const Title = styled.h1`
  width: 100%;
  color: #fff;
  font-size: 3rem;
  text-align: center;
  font-weight: 500;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid #000;
  cursor: pointer;
`;

const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 1rem;

  &:hover {
    font-weight: bold;
    color: #e5e5e5;
  }
`;

const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  list-style: none;
  text-align: center;
  margin-right: 30px;

  // Hover on item gives Picture/Name styles
  &:hover > ${Picture} {
    border: 3px solid white;
  }

  &:hover > ${Name} {
    font-weight: bold;
    color: #fff;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export { Container, Title, List, Item, Picture, Name };
