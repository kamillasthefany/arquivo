import styled from 'styled-components'

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(5px);
  border-radius: 8px;
  padding: 16px; 
  margin-bottom: 10px;
  overflow: auto;
  max-height:85vh;
  /* justify-content: center;*/

   @media(max-width: 700px){
    background: transparent;
    backdrop-filter: none;
    max-width: 100vh;
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
