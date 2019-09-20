import styled, { keyframes } from "styled-components";

const frame = keyframes`
from{
  transform:rotate(0deg)
}to{
  transform:rotate(360deg)
}
`;

export const DivInput = styled.form.attrs(props => ({}))`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  width: 100%;
  input[type="text"] {
    flex: 1;
    background-color: #eee;
    border: none;
    color: purple;
    padding: 10px 15px;
  }
  input {
    height: 30px;
    width: 30px;
    appearance: none;
    background-color: blueviolet;
    color: white;
    border: transparent;
    border-radius: 5px;
    &:disabled {
      background-color: rgba(138, 43, 226, 0.7);
      animation: ${frame} 2s linear infinite;
      cursor: not-allowed;
    }
  }
`;

export const DivTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  margin-bottom: 40px;
  img {
    width: 60px;
    margin-right: 10px;
  }
  h1 {
    font-size: 27px;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  }
`;

export const Container = styled.div`
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: white;
  width: 700px;
  max-width: 100%;
  padding: 30px;
  margin-bottom: 50px;
  overflow: auto;
  @media screen and (max-width: 285px) {
    padding: 30px 0;
  }
`;
