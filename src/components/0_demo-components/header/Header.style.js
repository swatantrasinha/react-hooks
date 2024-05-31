import styled from "styled-components";

export const StyledHeader = styled.ul`
  .my-header {
    background-color: blue;
    border: 1px solid black;
    display: flex;
    width: 60%;
    justify-content: space-around;
    margin: auto;

    li {
      list-style: none;
      a {
        color: white;
        &:hover {
          background-color: black;
          color: #fff;
        }
      }
      &.subNav-wrapper {
        color: white;
        &:hover {
          background-color: black;
          color: #fff;
        }
      }
    }
    .subNav-label-and-options {
      position: relative;

      div.subNav-wrapper {
        cursor: pointer;
      }
      
    }
    .subNav {
      position: absolute;
      top: 20px;
      left:0;
      border: 1px solid red;
      background-color: blue;
      color: white;
    }
  }
`;
