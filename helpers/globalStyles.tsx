import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Inter', sans-serif;
    }
    :root{
        --color-primary:#27AE60;
        --color-secondary:#EB5757;
        --grey-600:#333333;
        --grey-300:#828282;
        --grey-100:#E0E0E0;
        --grey-0:rgb(245, 245, 245, 1);

        --negative:#E60000;
        --warning:#FFCD07;
        --success:#168821;
        --information:#155BCB;
    }
    body{
        font-size: 17px;
        padding: 0px;
        margin: 0px;
    }
    h1{
        font-size: 26px;
        font-weight: bold;
    }
    h2{
        font-size: 22px;
        font-weight: bold;
    }
    h3{
        font-size: 18px;
    }
    h4{
        font-size:16px;
    }



`;
export default GlobalStyle;
