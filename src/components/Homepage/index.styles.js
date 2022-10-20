import styled from "styled-components";

export const StyledApp = styled.div`
  .second-section {
    width: 100%;
    display: flex;
    padding: 5px;
    justify-content: space-evenly;
    .table-section {
        color: ${(props) => props.theme.fontColor};
        border: ${(props) => props.theme.borderColor};
    }
    .text-form {
        width: 50%;
        display: flex;
        flex-direction: column;
        margin: 0 20px;
        color: ${(props) => props.theme.fontColor};
        .text-field {
            margin: 20px 0px;
            color: ${(props) => props.theme.fontColor};
        }
    }
  }
`;

export const StyledHomePage = styled.div`
  .header {
    background-color: ${(props) => props.theme.backgroundColor};
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: sticky;
    top: 0px;
    width: 100%;
  }
`