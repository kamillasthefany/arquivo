import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(5px);
  border-radius: 8px;
  //grid-area: 'profileArea';
  p{
    margin-bottom: 8px;
    padding: 16px;
  }
  a {
    font-size: 12px;
    color: #2E7BB4;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    padding: 1rem;

    &:hover{
    color: #ccddeb;
     opacity: 1;
     background: rgba(255, 255, 255, 0.09);
    }
    
    img {
      width: 16px;
      height: 16px;
      margin-right: 5px; 
    }
    
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;  
  margin-bottom: 8px;
  //padding: 16px;
  //margin: 16px 0 16px 0;
  padding: 16px 0 0 16px;

  img {
      width: 16px;
      height: 16px;
      margin-right: 5px;
      justify-content: flex-end;
    }
`;

export const Titulo = styled.div`
  display: flex;
  justify-content: flex-start;  
`;

export const Icone = styled.div`
  display: flex;
  justify-content: flex-end;
`;