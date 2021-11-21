import styled from 'styled-components';

export const Container = styled.div`
  //background-image:url(https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-38.jpg);
  background-image:url(https://wallpapersfull.com/wallpapers/2019/piso-preto-wallpaper-11247.jpg);

  color:#FFF;
  height: 100vh;
  width:100vw;
  background-size:cover;
  display: flex;
  flex-direction: column;
  //background-color: #A6A6A6;
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

