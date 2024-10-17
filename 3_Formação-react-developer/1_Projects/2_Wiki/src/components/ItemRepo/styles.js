import styled from "styled-components";

export const ItemContainer = styled.div`
    margin-top: 2rem;
    width: 80%;

    h3 {
        color: #FAFAFA;
        font-size: 32px;
    }

    p {
        color: #FAFAFA60;
        font-size: 16px;
        margin-bottom: 20px;
    }

    a {
        color: blue;
        letter-spacing: .2rem;
        text-decoration: none;
        text-transform: uppercase;
    }

    a.remover {
        color: #FF0000;
        display: inline-block;
        margin-top: 1rem;
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`