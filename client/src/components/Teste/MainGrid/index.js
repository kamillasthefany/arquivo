import styled from 'styled-components'

const MainGrid = styled.main`
  width: 100%;  
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 16px;

  .profileArea{
    display: none;
    @media(min-width: 860px){
      display: block;
    }
  }

  @media(min-width: 860px){
    max-width: 1110px;
    //max-width: 95vw;
    display: grid;
    grid-template-areas: "profileArea welcomeArea relationsArea";
   grid-template-columns: 160px 1fr 300px;
  }
`;

export default MainGrid;