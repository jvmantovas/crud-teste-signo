import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
}
body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F2f2f2;
}
a {
    color: black;
}
`;

export default Global;
