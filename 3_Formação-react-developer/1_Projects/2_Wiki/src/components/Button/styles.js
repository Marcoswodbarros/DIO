import styled from "styled-components";

export const ButtonContainer = styled.button`

    background-color: #FAFAFA;
    border: 1px solid #FAFAFA;
    border-radius: 20px;
    height: 62px;
    margin: 20px;
    width: 80%;
    
    &: hover {
        background-color: #FAFAFA40;
        color: white;
        cursor: pointer;
        transition: .5s;
    }
`