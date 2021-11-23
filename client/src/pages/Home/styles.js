import styled from 'styled-components';

export const Container = styled.div`
  //background-image:url(https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-38.jpg);
  background-image:url(https://wallpapersfull.com/wallpapers/2019/piso-preto-wallpaper-11247.jpg);

  color:#FFF;

  background-size:cover;
  display: flex;
  flex-direction: column;
  background-color: #A6A6A6;

  @media(min-width: 860px){
    height: 100vh;
    width:100vw;
  }

  &::-webkit-scrollbar {
  height: 8px;
  width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #A6A6A6;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
  background: #555555;
  }
`;

export const RelationsGrid = styled.div`
  grid-area: 'relationsArea';
`;

export const ContainerGrid = styled.div`
  grid-area: 'RelationsGrid';
`;

export const ProfileGrid = styled.div`
 grid-area: 'profileArea';
 `;

export const WelcomeGrid = styled.div`
 grid-area: 'welcomeArea';
 `;

