import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const TweetBox = styled.div`
  position: relative;
  //width: 600px;
  width: 98%;
  height: 70%;
  color: #a6a6a6;
  //background-color: #a6a6;
  background: rgba(14, 13, 13, 0.404);
  margin: 5px;
  //box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  display: flex;
  padding: 5px;
  justify-content: space-around;
  align-items: center;
  backdrop-filter: blur(10px);
  flex-direction: column;
  flex-wrap: wrap;
`;

export const CardBox = styled.div`
  position: relative;
  //width: 600px;
  width: 100%;
  //height: 200px;
  max-height: 250px;
  color: black;
  //background-color: #fff;
  background: rgba(255, 255, 255, 0.05);
  margin: 5px;
 // box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  display: flex;
  //justify-content: space-evenly;
  align-items: flex-start;
  backdrop-filter: blur(10px);
  flex-direction: column;
  flex-wrap: wrap;

  &:hover{
    opacity: 1;
      background: rgba(255, 255, 255, 0.09);
     //transform: translateY(-20px);
  }
`;

export const Title = styled.div`
  display: flex;
  max-height: 50px;
  padding: 0.5rem;
  //color: black;
`;
export const Text = styled.div`
    max-height: 50px;
    display: flex;
  padding: 0.5rem;
  //width: 100%;
    flex-wrap: wrap;
`;

export const CommentWrapper = styled.div`
  max-height: 100px;
  display: flex;
  padding: 1rem;
  //width: 100%;
    flex-wrap: wrap;
    align-items: flex-start;
    //color:#404040;
`;

export const TweetUserInfo = styled.div`
    //max-height: 50px;
    display: flex;
  justify-content:flex-end;
  padding: 0.5rem;
  width: 100%;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  img {
    width: 35px;
    height: 35px;
    border-radius: 100px;
    //border: 1px solid #404040;
    margin-right: 10px;
    margin-left: 10px;

   
    //margin-right: 5px;
  }
`;

export const InfoWrapper = styled.div`
  flex-direction: column;
`;
