import styled from 'styled-components';

export const Container = styled.div`
  //background: #FFF;
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(5px);
  border-radius: 8px;
  padding: 16px;
  grid-area: 'profileArea';

  margin-bottom: 10px;
  .boxLink {
    font-size: 14px;
    color: #2E7BB4;
    text-decoration: none;
    font-weight: 800;
  }
  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #333333;
    margin-bottom: 20px;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #ECF2FA;
  }
  input {
    width: 100%;
    background-color: #F4F4F4;
    //background-color: #A6A6A6;
    color: #333333;
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;
    ::placeholder {
      color: #333333;
      opacity: 1;
    }
  }
  textarea {
    //border: 1px solid #CDD5E5;
    //border: 1px solid #A6A6A6;
    //list-styleborder: 1px solid #404040;
    box-sizing: border-box;
    border-radius: 4px;
    min-height:190px;
    width: 100%;
    height: 100%;
    padding: 16px;
    //background-color: #A6A6A6;
    background: rgba(14, 13, 13, 0.404);
    /* width: 100%;
    height: 50%;
    //background-color: #F4F4F4;
    background-color: #A6A6A6;
    //color: #333333;
    color: #FFF;
    border: 0;
    padding: 14px 16px;
   // margin-bottom: 14px;
    border-radius: 0.5rem; */
    //border-radius: 10000px;
    ::placeholder {
      color: #D9D9D9;
      //color: #333333;
     // opacity: 1;
    }
  }
  button {
    border: 0;
    padding: 8px 12px;
    color: #FFFFFF;
    border-radius: 10000px;
    background-color: #737373;
    //background-color: #6F92BB;
  }
    ul {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr 1fr;
    max-height: 220px;
    list-style: none;
  }
  img {
    object-fit: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: relative;
  }
  ul li a {
    display: inline-block;
    height: 102px;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    span {
      color: #FFFFFF;
      font-size: 10px;
      position: absolute;
      left: 0;
      bottom: 10px;
      z-index: 2;
      padding: 0 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-indeX: 1;
      background-image: linear-gradient(0deg,#00000073,transparent);
    }
  }
`;
