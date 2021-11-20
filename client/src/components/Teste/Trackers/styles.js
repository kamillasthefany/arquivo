import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(5px);
  border-radius: 8px;
  padding: 16px;
  grid-area: 'profileArea';
  
  a {
    font-size: 12px;
    color: #2E7BB4;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    img {
      width: 16px;
      height: 16px;
      margin-right: 5px; 
    }
  }
`;