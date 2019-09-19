import styled from "styled-components";

export const DivInput = styled.div`
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
  }
  input {
    height: 30px;
    width: 30px;
    appearance: none;
    background-color: blueviolet;
    color: white;
    border: transparent;
    border-radius: 5px;
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
  @media screen and (max-width: 285px) {
    padding: 30px 0;
  }
`;
