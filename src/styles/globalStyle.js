import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
    }
    html,body,#root{
        height: 100%;
        width:100%;
    }
    body{
        background-color:blueviolet;
        padding:50px;
        @media screen and (max-width: 400px) {
            padding: 50px 0;
  }
    }
`;
