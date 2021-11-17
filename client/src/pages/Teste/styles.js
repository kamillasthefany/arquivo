import styled from 'styled-components';

export const Container = styled.div`
   // background-image:url(http://bit.ly/2gPLxZ4);
   //background-image:url(https://images3.alphacoders.com/812/812062.png);
   background-image:url(https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-38.jpg);
 // background-color: #051924;
  color:#FFF;
  //max-height: 100vh;
  height: 100vh;
  width:100vw;
  background-size:cover;
  overflow-y: auto;
  display: grid;
  /* align-items: center;  */
  /* flex-direction: column;
  flex-wrap: wrap;
  justify-content: center; */
  grid-template-columns: 15% 75%;

`;

export const TemplateColumns = styled.div`
  grid-template-columns: 25% 50% 25%;
`;

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1.6fr;
  grid-template-rows: 0.2fr 1.8fr;
  gap: 0px 0px;
  grid-template-areas:
    ". ."
    ". .";
`;