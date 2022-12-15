import { createGlobalStyle } from "styled-components";

const GlovalStyle = createGlobalStyle`

:root{
  --color-todos: #F24B59;
  --color-working: #323F59;
  --color-done: #203A40;
  --color-main: #F2F2F2;
  --color-button: #e66980;
}

@font-face {
  font-family: "Pretendard-Regular";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-style: normal;
  font-weight: 400;
}

@font-face {
  font-family: "Pretendard-Regular";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-style: normal;
  font-weight: 700;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  text-decoration: none;
  outline: none;
  font-family: "Pretendard";
}

body {
  /* overflow: hidden; */
}
`;

export default GlovalStyle;
