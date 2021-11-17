import styled from 'styled-components';

export const Container = styled.div`
  background-image:url(https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-38.jpg);
  color:#FFF;
  height: 100vh;
  width:100vw;
  background-size:cover;
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
`;
export const MenuWrapper = styled.div`
  width: 20%;
  max-width: 240px;
  align-items: center;
  padding: 1rem;
`;

export const ContentWrapper = styled.div`
  width: 70%; 
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
`;