import { useNavigate } from "react-router-dom";
import {css} from "@emotion/react";
import background from "../PNG/404Error.png";
import {Xcenter} from "../style/layout";
import {pallete} from "../style/pallete";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <main css={mainCss}>
      <button onClick={() => navigate('/')}>HOME</button>
    </main>
  );
}

const mainCss = css`
  position: relative;
  height: 100vh;
  background-image: url(${background});
  background-color: ${pallete.bgBlack};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  button {
    ${Xcenter};
    color: ${pallete.gray[100]};
    font-family: "Homemade Apple", cursive;
    font-weight: 900;
    font-size: 1.5rem;
    font-style: normal;
    bottom: 5%;
    background-color: transparent;
    height: 4rem;
    width: 12rem;
    outline: none;
  }
`;

export default ErrorPage;